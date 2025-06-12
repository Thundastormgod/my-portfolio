
Introduction

This report provides a detailed technical breakdown of our recent initiative to overhaul the company's fraud detection capabilities. We moved beyond traditional siloed models to build an integrated, end-to-end AI system that is not only more accurate but also significantly more agile. The project's success, marked by a 40% increase in fraud detection and £5M in cost savings, is rooted in a robust data strategy, intelligent feature engineering, and a modern MLOps architecture. This document will walk you through the key business challenges we addressed, our data pipeline, the features we engineered, our model choices, and how we measured success.
The Challenge: Addressing 10 Core Business Pain Points
Our work was laser-focused on solving tangible business problems that were impacting our bottom line and operational efficiency. We identified the following 10 primary pain points:
High Financial Losses: Direct revenue loss from successful fraudulent transactions and chargebacks.
Reactive Detection: Inability to detect novel or "zero-day" fraud patterns, leaving us constantly playing catch-up.
High False Positive Rate: Legitimate customer transactions were being incorrectly flagged, causing friction and poor customer experience.
Costly Manual Reviews: A large, expensive operations team was needed to manually investigate thousands of flagged alerts daily.
Synthetic Identity Fraud: Inability to detect fraudulent accounts created from a composite of real and fake information.
Organised Fraud Rings: Inability to detect coordinated attacks from groups of bad actors who appeared independent.
Slow Model Deployment: The path from a trained model to production was manual, slow (weeks to months), and error-prone.
Data Silos: Critical data for fraud detection was fragmented across different databases.
Scalability Issues: The system couldn't handle peak transaction volumes, leading to missed detections.
Lack of Explainability: The "black box" nature of older models made it difficult to justify decisions or improve the system.



Building an XGBoost-Powered Fraud Detection System

This document outlines the architecture, data strategy, and performance of a machine learning system designed to detect fraudulent transactions in real-time. The project's primary goal was to replace an outdated, inefficient rules-based engine with a scalable, accurate, and explainable ML-powered solution.


## The Challenge: Key Business Pain Points

The previous system suffered from several critical issues that led to financial losses and operational inefficiencies:

1.  **High Financial Losses:** The legacy system failed to detect sophisticated fraud patterns, leading to significant direct financial losses.
2.  **Novel Fraud Patterns:** It could not adapt to new, unseen fraud techniques, leaving the business vulnerable.
3.  **High False Positives:** Legitimate customers were frequently flagged, causing friction and damaging user trust.
4.  **Manual Review Overload:** The high volume of false positives overwhelmed the manual review team, increasing operational costs.
5.  **Synthetic Identity Fraud:** The system was unable to identify fraudulent accounts created using a combination of real and fake information.
6.  **Organised Fraud Rings:** It struggled to identify coordinated attacks from groups of bad actors who appeared independent.
7.  **Slow Model Deployment:** The path from a trained model to production was manual, slow (weeks to months), and error-prone.
8.  **Data Silos:** Critical data for fraud detection was fragmented across different databases.
9.  **Scalability Issues:** The system couldn't handle peak transaction volumes, leading to missed detections.
10. **Lack of Explainability:** The "black box" nature of older models made it difficult to justify decisions or improve the system.

---



 Data Strategy: The Foundation of Success

A successful model is built on a foundation of clean, accessible, and relevant data. We engineered a robust pipeline to handle data at scale.

Data Sources

We unified several disparate sources to create a 360-degree view of each transaction:

*   **Transactional Database (SQL):** Core data on transaction amounts, timestamps, merchant details, and payment methods.
*   **Customer Relationship Management (CRM):** Customer data including account creation date, historical activity, and contact information.
*   **Web/App Server Logs (JSON):** Semi-structured data containing IP addresses, device IDs, user-agent strings, and session behaviour.
*   **Third-Party Enrichment Services:** Data from providers to verify addresses or flag high-risk IP addresses.
*   **Public Blockchain Data:** For tracing cryptocurrency transactions to identify links to illicit wallets.

 Data Ingestion & Processing

We used a dual approach for real-time and batch processing.

*   **Real-Time Ingestion:** **Apache Kafka** served as the backbone of our real-time pipeline. Transaction and server log events were published to Kafka topics for immediate processing.
*   **Batch Ingestion:** Nightly **PySpark** jobs were run to pull, clean, and aggregate data from SQL and CRM databases, creating historical feature sets.

`[Insert Diagram: Real-Time & Batch Data Pipeline Architecture]`

 Data Cleaning & Aggregation

*   **Null Value Imputation:** Handled using mean/median imputation for numerical fields and a constant 'unknown' for categorical data.
*   **Standardisation:** Timestamps were converted to UTC, and categorical data like country codes were standardised.
*   **Joining:** Each incoming transaction was enriched in real-time with historical features, creating a single, wide feature vector for the model.

---
 Feature Engineering: Translating Data into Intelligence

We engineered over 50 features. Below are 10 key examples and how they directly address the business pain points.

| Feature Name | Description & Rationale | Pain Point Addressed |
| :--- | :--- | :--- |
| **Transaction_Velocity_24h** | Count of transactions from the same account in a rolling 24-hour window. A sudden spike is a classic indicator of a compromised account. | #1 (Financial Losses), #4 (Manual Reviews) |
| **Account_Age_vs_Value_Ratio** | Ratio of transaction value to account age. A high-value transaction on a new account is highly suspicious. | #5 (Synthetic Identity Fraud) |
| **Time_Since_Last_Transaction** | The time delta (in seconds) from the account's previous transaction. Very short deltas can indicate automated scripts. | #2 (Novel Fraud), #9 (Scalability) |
| **Graph_Community_Risk_Score** | A score from a graph database identifying if a user belongs to a community of previously flagged accounts. | #6 (Organised Fraud Rings) |
| **IP_Country_vs_Card_Country** | A binary flag (1/0) indicating if the transaction IP's origin country matches the card's issuing country. | #3 (False Positives), #1 (Financial Losses) |
| **Device_ID_History** | The number of unique accounts that have transacted from the same device ID in the last 30 days. | #6 (Organised Fraud Rings) |
| **Unusual_Merchant_Category** | A flag indicating if the merchant category is unusual for the customer based on their 90-day transaction history. | #2 (Novel Fraud) |
| **Blockchain_Wallet_Reputation** | For crypto transactions, a score indicating if the destination wallet has been associated with illicit activity. | #1 (Financial Losses), #5 (Synthetic Identity) |
| **Session_Behaviour_Anomaly** | A score from an Isolation Forest model based on session data (e.g., time-on-page, clicks) to detect non-human behaviour. | #2 (Novel Fraud), #10 (Explainability) |
| **Value_vs_Historical_Avg** | The ratio of the current transaction value to the customer's 3-month average transaction value. | #3 (False Positives), #1 (Financial Losses) |

---

## Model Selection: The Right Tools for the Job

We chose a hybrid model approach to leverage the strengths of different algorithms, creating a more robust and resilient system.

`[Insert Diagram: Hybrid Model Architecture (XGBoost + Isolation Forest)]`

### 1. XGBoost (eXtreme Gradient Boosting)

This was our primary model for supervised classification.

*   **Rationale:** XGBoost excels on structured, tabular data. It's highly effective at capturing complex, non-linear interactions between features, computationally efficient, and scalable. For explainability (Pain Point #10), we used **SHAP (SHapley Additive exPlanations)** to provide feature importance scores for each prediction.

### 2. Isolation Forest

This was our key unsupervised model for anomaly detection.

*   **Rationale:** To address novel fraud (Pain Point #2), we needed to detect patterns we hadn't seen before. Isolation Forest works by "isolating" outliers in the data without relying on labels, making it perfect for identifying anomalies in session behaviour and transaction patterns.

### 3. Linear Regression

*   **Rationale:** While not our primary detection model, we used Linear Regression as a baseline to ensure our complex models were adding significant value. It also served sub-tasks, like predicting a customer's 'expected' transaction value, with the residual from this prediction being a powerful feature for the main XGBoost model.

---

## Performance Evaluation: Measuring What Matters

We tracked both technical and business metrics to ensure our solution delivered real business value.

### Technical Metrics

Accuracy alone is misleading in an imbalanced dataset like fraud. We focused on the following:

*   **Recall (Sensitivity):** Our primary metric. It measures the percentage of actual fraud cases we correctly identified. `Recall = TP / (TP + FN)`.
    > **Result: Improved from ~55% to over 77%.**
*   **Precision:** Measures what percentage of our flagged transactions were actually fraudulent. `Precision = TP / (TP + FP)`.
    > **Result: Significantly improved, reducing manual review workload.**
*   **AUC-ROC Curve:** A comprehensive measure of model performance across all decision thresholds.
    > **Result: Our final model achieved an AUC of 0.96.**

`[Insert Chart: AUC-ROC Curve for XGBoost Model]`

### Business Metrics

Ultimately, the project was judged on its business impact:

> **£5M in Annual Cost Savings**

This was a composite metric calculated from:
*   **40% Improvement in Fraud Detection:** A direct result of the improved recall rate.
*   **Reduced Operational Overhead:** Higher precision led to fewer manual reviews (Pain Point #4).
*   **65% Faster Deployment Time:** Our MLOps pipeline on AWS SageMaker and Kubernetes with MLflow integration reduced the deployment cycle from over a month to less than a week.
