#Introduction


This report provides a detailed technical breakdown of our recent initiative to overhaul the company's fraud detection capabilities. We moved beyond traditional siloed models to build an integrated, end-to-end AI system that is not only more accurate but also significantly more agile. The project's success, marked by a 40% increase in fraud detection and £5M in cost savings, is rooted in a robust data strategy, intelligent feature engineering, and a modern MLOps architecture. This document will walk you through the key business challenges we addressed, our data pipeline, the features we engineered, our model choices, and how we measured success.
The Challenge: Addressing 10 Core Business Pain Points
Our work was laser-focused on solving tangible business problems that were impacting our bottom line and operational efficiency. We identified the following 10 primary pain points:
High Financial Losses: Direct revenue loss from successful fraudulent transactions and chargebacks.
Reactive Detection: Inability to detect novel or "zero-day" fraud patterns, leaving us constantly playing catch-up.
High False Positive Rate: Legitimate customer transactions were being incorrectly flagged, causing friction and poor customer experience.
Costly Manual Reviews: A large, expensive operations team was needed to manually investigate thousands of flagged alerts daily.
Synthetic Identity Fraud: Inability to detect fraudulent accounts created from a composite of real and fake information.
Organised Fraud Rings: Difficulty identifying coordinated attacks from groups of bad actors who appear independent.
Slow Model Deployment: The path from a trained model to production was manual, slow (weeks to months), and error-prone.
Data Silos: Critical data for fraud detection was fragmented across different databases (transactions, customer info, weblogs).
Scalability Issues: The existing system couldn't handle peak transaction volumes, leading to missed detections during critical periods.
Lack of Explainability: The "black box" nature of older models made it difficult to justify decisions to auditors or improve the system based on insights.
 Data Strategy: The Foundation of Success
A successful model is built on a foundation of clean, accessible, and relevant data.1 We engineered a robust pipeline to handle data at scale.

Data Sources: We unified several disparate sources to create a 360-degree view of each transaction:
Transactional Database (SQL): Core data on transaction amounts, timestamps, merchant details, and payment methods.
Customer Relationship Management (CRM): Customer data including account creation date, historical activity, and contact information.
Web/App Server Logs (JSON): Semi-structured data containing IP addresses, device IDs, user-agent strings, and session behaviour.
Third-Party Enrichment Services: Data from providers to verify addresses or flag high-risk IP addresses.
Public Blockchain Data: For tracing transactions involving cryptocurrency to identify links to illicit wallets.2
Data Ingestion & Processing: We used a dual approach for real-time and batch processing.
Real-Time Ingestion: Apache Kafka was the backbone of our real-time pipeline. Transaction and server log events were published to Kafka topics, allowing for immediate processing and scoring by our models.
Batch Ingestion: Nightly batch jobs using PySpark were run to pull, clean, and aggregate data from the SQL and CRM databases, creating historical feature sets.
Data Cleaning & Aggregation: Before feature engineering, data was rigorously cleaned:
Null Value Imputation: Missing values were handled using strategies like mean/median imputation for numerical fields or a constant 'unknown' for categorical data.
Standardisation: Timestamps were converted to UTC, and categorical data like country codes were standardised.
Joining: The core of our data strategy was joining these sources. Each incoming transaction event was enriched in real-time with aggregated historical features from the customer's profile and graph-based scores, creating a single, wide feature vector for the model.
 Feature Engineering: Translating Data into Intelligence
We engineered over 50 features; below are 10 key examples and how they directly address the business pain points.
Feature Name
Description & Rationale
Pain Point Addressed
1. Transaction_Velocity_24h
Count of transactions from the same account in a rolling 24-hour window. A sudden spike is a classic indicator of a compromised account.
#1 (Financial Losses), #4 (Manual Reviews)
2. Account_Age_vs_Value_Ratio
Ratio of transaction value to account age in days. A high-value transaction on a brand-new account is highly suspicious.
#5 (Synthetic Identity Fraud)
3. Time_Since_Last_Transaction
The time delta (in seconds) from the account's previous transaction. Very short deltas can indicate automated scripts.
#2 (Novel Fraud), #9 (Scalability)
4. Graph_Community_Risk_Score
A score derived from a graph database identifying if a user belongs to a community of previously flagged accounts.
#6 (Organised Fraud Rings)
5. IP_Country_vs_Card_Country
A binary flag (1/0) indicating if the transaction IP's origin country matches the card's issuing country. A mismatch is a common red flag.
#3 (False Positives), #1 (Financial Losses)
6. Device_ID_History
The number of unique accounts that have transacted from the same device ID in the last 30 days.
#6 (Organised Fraud Rings)
7. Unusual_Merchant_Category
A flag indicating if the merchant category (e.g., 'gambling') is unusual for the customer based on their 90-day transaction history.
#2 (Novel Fraud)
8. Blockchain_Wallet_Reputation
For crypto transactions, a score from a third-party service indicating if the destination wallet has been associated with illicit activity.
#1 (Financial Losses), #5 (Synthetic Identity)
9. Session_Behaviour_Anomaly
A score from the Isolation Forest model based on session data like time-on-page and clicks, detecting non-human behaviour.
#2 (Novel Fraud), #10 (Explainability)
10. Value_vs_Historical_Avg
The ratio of the current transaction value to the customer's 3-month average transaction value.
#3 (False Positives), #1 (Financial Losses)


 Model Selection: The Right Tools for the Job
We chose a hybrid model approach to leverage the strengths of different algorithms, creating a more robust and resilient system.
XGBoost (eXtreme Gradient Boosting): This was our primary model for supervised classification.
Rationale: XGBoost excels on the type of structured, tabular data we created.3 It's highly effective at capturing complex, non-linear interactions between features (e.g., the relationship between Account_Age_vs_Value_Ratio and IP_Country_vs_Card_Country). It's also computationally efficient and scalable. For Pain Point #10, we used SHAP (SHapley Additive exPlanations) to provide feature importance scores for each prediction, making the model's decisions transparent to the review team.
Isolation Forest: This was our key unsupervised model.
Rationale: To address Pain Point #2, we needed to detect fraud we hadn't seen before. Isolation Forest is perfect for this. It works by "isolating" outliers in the data without relying on labels. It's computationally cheap and effective at identifying anomalies in our session behaviour data and transaction patterns.
Linear Regression:
Rationale: While not our primary detection model, we used Linear Regression as a baseline to ensure our complex models were adding significant value. It also served specific sub-tasks, like predicting a customer's 'expected' transaction value, with the residual from this prediction being a powerful feature for the main XGBoost model.

Performance Evaluation: Measuring What Matters
We tracked both technical and business metrics to ensure our solution was not just technically sound but also delivered real business value.
Technical Metrics
We focused on a confusion matrix-based evaluation, as accuracy alone is misleading in an imbalanced dataset like fraud.
Recall (Sensitivity): This was our primary metric. It measures the percentage of actual fraud cases we correctly identified (Recall=TP+FNTP​).4 A high recall is critical to minimize missed fraud (Pain Point #1).5 We improved this from ~55% to over 77%.
Precision: This measures what percentage of our flagged transactions were actually fraudulent (Precision=TP+FPTP​).6 Improving precision was key to reducing customer friction and operational costs (Pain Points #3 & #4).
AUC-ROC Curve: The Area Under the Receiver Operating Characteristic Curve gave us a comprehensive measure of model performance across all decision thresholds, ensuring the model was robust.7 Our final model achieved an AUC of 0.96.
Business Metrics
Ultimately, the project was judged on its business impact.
40% Improvement in Fraud Detection: This figure comes directly from the improved recall rate, translating to a significant reduction in fraudulent transactions successfully processed.
£5M in Cost Savings: This was a composite metric calculated from:
Reduced direct fraud losses and chargeback fees.
Reduced operational overhead due to higher precision, leading to fewer manual reviews (Pain Point #4).
65% Faster Deployment Time: Our MLOps pipeline on AWS SageMaker and Kubernetes with MLflow integration automated testing, validation, and deployment, reducing the cycle time from over a month to less than a week. This directly addressed Pain Point #7 and allows us to react to new threats much faster.
