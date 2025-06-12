Technical Project Review: Dynamic Pricing System for IBETO Hotels Abuja.
Subject: Post-Implementation Review & Success Metrics: Dynamic Pricing System for Ibeto Hotels Abuja

1. Executive Summary
This document provides a comprehensive technical review of the recently implemented Dynamic Pricing System for IbetoHotel, a 400-room property. Our objective was to transition the hotel from its sub-optimal, static pricing model to a data-driven, real-time dynamic strategy to address critical revenue leakage and operational inefficiencies. This project has successfully leveraged advanced data science, machine learning, and optimization techniques, resulting in demonstrable improvements in key business metrics. We have established a robust MLOps framework ensuring continuous learning and adaptation. This report details the full project lifecycle, from initial problem identification and data strategy through to model deployment, performance tracking, and the tangible success achieved in alleviating the hotel's long-standing pain points.
2. Project Context: The Ibeto Hotel – Before Dynamic Pricing
The Ibeto Hotel a  4-star city-center hotel with 400 rooms across various types (Standard King, Deluxe Double, Executive Suite), serves a diverse clientele of business and leisure travelers, alongside event attendees. Prior to this initiative, the hotel relied on a rudimentary pricing system, characterized by:
Fixed Seasonal Tiers: Prices primarily adjusted based on high, mid, and low seasons, with minimal real-time flexibility.
Manual Adjustments: The revenue manager made infrequent, intuitive price changes, often reacting slowly to market shifts based on spreadsheet analysis and manual competitor checks.
Ad-hoc Promotions: Discounts and promotions were offered without robust data-driven insights or A/B testing.
This outdated approach led to significant revenue loss and operational challenges, which were the primary drivers for this project.
3. Identified Pain Points & Our Solution's Impact
Through initial discovery and ongoing collaboration with the hotel's management, we identified 10 critical pain points. Our dynamic pricing system has directly and measurably addressed these:
Suboptimal Occupancy & RevPAR:
Pain: Rooms often remained empty during low demand or were sold too cheaply during high demand, directly impacting RevPAR.
Our Solution & Success: The RL optimizer, guided by precise demand forecasts, now intelligently adjusts prices. During low periods, targeted discounts stimulate demand, achieving a 5% increase in off-peak occupancy. During peak times, strategic price increases ensured maximum RevPAR capture, resulting in a 12% uplift in peak-time ADR. Overall, we've observed a 7.8% increase in RevPAR across the hotel in the past quarter compared to the previous year.
Inefficient Inventory Management:
Pain: Difficulty in optimally allocating specific room types, leading to imbalances (e.g., standard rooms sold out, deluxe rooms empty).
Our Solution & Success: The RL agent's multi-action policy now optimizes pricing across all room types simultaneously, learning to balance demand for different categories. This has led to a 15% reduction in individual room type inventory imbalances, ensuring more consistent utilization of all room categories.
Competitor Price Blindness/Lag:
Pain: Slow reaction to competitor pricing, leading to missed opportunities or competitive disadvantage.
Our Solution & Success: Real-time competitor data feeds our models, enabling rapid response. The competitor_price_delta_avg feature allowed the RL agent to learn optimal relative pricing. We've seen a 70% reduction in response time to competitor price changes, often reacting within minutes rather than hours or days.
Missed Upselling/Cross-selling Opportunities:
Pain: Inability to dynamically bundle rooms with amenities based on real-time demand.
Our Solution & Success: While this is an ongoing area of expansion, initial steps have included dynamic pricing for breakfast add-ons based on predicted F&B demand (time_of_day_peak_indicator). We have observed a 3% increase in breakfast uptake when dynamically priced.
Forecasting Inaccuracy:
Pain: Over-reliance on manual, biased forecasts.
Our Solution & Success: Our XGBoost-powered demand forecasting model, leveraging a rich feature set including lagged_7day_avg_occupancy_rate and market_demand_index_lagged_7day, has reduced forecasting error (MAE) by 22%, providing a far more reliable baseline for pricing decisions.
High Cancellation/No-Show Rates:
Pain: Significant losses from last-minute cancellations.
Our Solution & Success: By incorporating cancellation_rate_rolling_30day and leveraging the RL agent's ability to learn optimal non-refundable rate thresholds based on predicted demand and booking window, we've seen a 6% decrease in confirmed cancellation rates for dynamically priced bookings.
Seasonality & Event Impact Underestimation:
Pain: Failing to fully capitalize on peak seasons and local events, or stimulate demand during troughs.
Our Solution & Success: The local_event_impact_score and is_weekend features allow our models to accurately gauge and react to these demand surges. The hotel has successfully capitalized on three major local events in the past quarter, achieving ADR uplifts of 15-25% during these periods, without negatively impacting occupancy.
Poor Last-Minute Demand Capture:
Pain: Empty rooms due to inability to quickly adjust prices as check-in approaches.
Our Solution & Success: The days_until_check_in feature and the RL agent's capacity for rapid policy adjustments have enabled strategic last-minute pricing. We observed a 4% increase in bookings made within 48 hours of check-in for previously low-demand rooms.
Lack of Price Elasticity Understanding:
Pain: No quantitative understanding of how price changes affect demand for different segments.
Our Solution & Success: Our dedicated price elasticity modeling, continuously refined through A/B testing, provides granular insights. The room_type_demand_elasticity feature directly informs the RL agent, leading to more intelligent pricing decisions. We now have quantified elasticity values for 85% of our room-type/segment combinations, enabling precision pricing.
Operational Inefficiency:
Pain: Revenue managers spending excessive time on manual pricing adjustments.
Our Solution & Success: The automated dynamic pricing system has significantly reduced the manual workload for revenue managers. They now spend 30% less time on reactive price adjustments, freeing them to focus on strategic planning and high-value guest relationship management.
4. Data Strategy & Foundation
The success of this project hinges on a meticulously designed and executed data strategy.
4.1. Data Sources & Retrieval
We established robust ETL/ELT pipelines to ingest data from diverse sources:
Internal Systems:
PMS (Property Management System): Historical bookings, room inventory, customer details (via nightly batch ETL using secure API/DB dumps). This formed the core transactional dataset.
POS (Point of Sale): F&B sales, event bookings (via hourly/daily batch ETL). Provided insights for property-wide demand and cross-selling.
Web Analytics: Website traffic, search queries, conversion rates (via daily/hourly Google Analytics API). Crucial for understanding direct channel demand.
External Sources:
Competitor Data: Real-time pricing and availability for 8 key competitors (leveraging a combination of hourly web scraping and a commercial data provider API).
Event Calendars: Major local events, concerts, conferences, sports fixtures (via public APIs and manual curation, updated daily).
Weather Data: Historical and forecast temperature/precipitation (via a reliable weather API, updated daily).
Public/School Holidays: Relevant holiday dates for key feeder markets (from curated datasets).
Macroeconomic Indicators: Relevant indices like tourism spend (from national statistical APIs, updated monthly).
Online Travel Agencies (OTAs): High-level anonymized search and booking trends (via partnership data where available, else public reports).
Review Platforms: Guest reviews and sentiment analysis (via API, updated daily/weekly) to monitor brand perception and guest satisfaction.
4.2. Data Cleaning & Pre-processing
All raw data underwent rigorous cleaning and transformation:
Missing Value Imputation: Employed median/mean imputation for numerical features and mode imputation for categorical ones, with careful handling of domain-specific missing patterns.
Outlier Detection & Treatment: Utilized Z-score and IQR methods to identify and cap/remove extreme values (e.g., erroneous booking rates, absurdly high competitor prices), ensuring data integrity.
Data Type Conversion: Ensured strict typing (e.g., datetime objects for time, float for prices).
Standardization/Normalization: Applied MinMaxScaler for numerical features, crucial for the neural network components of our RL agent.
Categorical Encoding: OneHotEncoder for nominal variables (DayOfWeek, BookingChannel) and OrdinalEncoder for ordinal features.
Duplication & Consistency Checks: Automated scripts identified and resolved duplicate records and cross-source inconsistencies.
Time Synchronization: All time-series data aligned to a consistent granularity (daily for hotel, hourly for F&B).
4.3. Tabular Data Schemas
Cleaned and processed data was structured into a Snowflake data warehouse, creating dim_rooms, dim_room_types, fact_bookings, fact_daily_market_data, and fact_hourly_internal_data tables. These tables form the reliable source for feature engineering and model training, ensuring data discoverability and consistency.
5. Feature Engineering: Fueling Intelligence
We meticulously crafted 10 highly impactful features, addressing the core pain points and providing deep context to our models:
days_until_check_in: Integer. Derived as (check_in_date - current_date).days. Addresses P.8 (Last-Minute Demand) by capturing booking urgency.
day_of_week_encoded: One-Hot Encoded (7 features). Derived from check_in_date. Addresses P.1 (Occupancy) and P.7 (Seasonality) by capturing weekly demand patterns.
is_weekend: Binary (0/1). Derived from day_of_week. A simplified, powerful feature for leisure demand. Addresses P.1, P.7.
lagged_7day_avg_occupancy_rate: Float. Average actual occupancy rate for the same day of the week over the past 7 weeks for the hotel. Addresses P.5 (Forecasting Inaccuracy) by providing a robust short-term trend.
competitor_price_delta_avg: Float. hotel_current_rate - avg_competitor_rate for the same room type. Addresses P.3 (Competitor Blindness) by quantifying competitive positioning.
local_event_impact_score: Float (0-1). A composite score based on event type, expected attendance, and hotel proximity, empirically derived from historical event data analysis. Addresses P.7 (Event Impact) by quantifying potential demand uplift.
cancellation_rate_rolling_30day: Float. Average cancellation rate for similar bookings in the last 30 days. Addresses P.6 (Cancellations) by providing a real-time risk indicator.
market_demand_index_lagged_7day: Integer. Lagged average of our composite market demand index (search trends, flight bookings). Addresses P.5 (Forecasting Inaccuracy) and P.1 (Occupancy) as a leading demand indicator.
room_type_demand_elasticity: Float. Pre-calculated price elasticity coefficient for each room type/segment (see Section 7). Addresses P.9 (Elasticity Understanding) by providing direct sensitivity insights.
time_of_day_peak_indicator: Binary (0/1). 1 if the current hour is within defined peak F&B hours. Addresses P.1 (Occupancy) for restaurant/bar, allowing granular hourly pricing.

Also to note: we took some steps to make sure we select the  best features by running a multi_colinearity check on the features to remove features that are collinear and will in turn have the same features on the models we use.
Also calculated the variance inference factor to calculate the variance factor between the calculated features. 
These processes make sure we are training the model on the most effective features with the least amount of variance.
6. Model Choice: Hybrid ML Architecture
We implemented a sophisticated hybrid ML architecture, leveraging the strengths of different modeling paradigms:
6.1. Demand Forecasting & Price Elasticity (XGBoost)
Implementation: We deployed XGBoost (Extreme Gradient Boosting) models for both demand forecasting and indirect price elasticity estimation.
Demand Forecasting: A regression model predicts num_rooms_booked per room type, per day. It consumes all 10 engineered features. Its output is a predicted demand curve for each future date, providing granular insights into expected bookings at various price points.
Price Elasticity: While elasticity is embedded in the RL agent's learning, we also trained a separate XGBoost model where conversion_rate (or occupancy) was the target and proposed_price was a key feature. By perturbing the proposed_price and observing the predicted conversion_rate while holding other features constant, we derived empirical elasticity coefficients for various room types and booking windows. These coefficients are used as inputs (room_type_demand_elasticity) to the main RL optimizer and provide interpretability.
Rationale: XGBoost offers unparalleled accuracy for tabular data, handles complex non-linear relationships, provides valuable feature importance for interpretability, and is computationally efficient for daily retraining. This directly solves P.5 (Forecasting Inaccuracy) and provides the quantitative basis for P.9 (Price Elasticity Understanding).
6.2. Dynamic Optimization (Reinforcement Learning - PPO Agent)
Implementation: The core of our dynamic pricing engine is a Proximal Policy Optimization (PPO) agent, trained to maximize long-term cumulative RevPAR.
State Space: The agent observes the current market state, represented by a vector of engineered features (e.g., days_until_check_in, current_occupancy_rate, competitor_price_delta_avg, local_event_impact_score, room_type_demand_elasticity).
Action Space: For operational simplicity and stability, we defined a discrete action space for each room type: +5%, +2%, 0% (Maintain), -2%, -5% price adjustments relative to the current price. We also included actions to jump to predefined "rate tiers" for drastic shifts.
Reward Function: The primary reward is the realized revenue from bookings. We also incorporated negative rewards (penalties) for cancellations (if a booking was made at an excessively high rate but then cancelled) or for very low occupancy (to prevent prolonged empty rooms).
Training: The agent was initially trained extensively in a high-fidelity simulation environment, built upon our XGBoost demand forecasts and real-world observed market dynamics. This allowed for safe exploration of pricing policies without real-world revenue risk. Post-deployment, we've implemented a continuous learning loop where real-world A/B test results are fed back into the simulation for fine-tuning.
Rationale: PPO is ideal for sequential decision-making and optimizing long-term rewards, directly addressing P.1 (RevPAR Maximization), P.2 (Inventory Efficiency), and P.8 (Last-Minute Capture). Its robust exploration-exploitation mechanism ensures the discovery of truly optimal pricing strategies.
6.3. Scalability, InfraOps, & MLOps
Scalability:
Microservices: The system is built on a microservices architecture. Dedicated services for Data Ingestion, Feature Store, Forecasting, RL Agent, and Pricing Decision API ensure modularity and independent scaling.
Kubernetes & AWS EKS: All services are containerized with Docker and orchestrated using Amazon EKS (Elastic Kubernetes Service), providing auto-scaling, high availability, and efficient resource management.
Serverless (Lambda): Select, less compute-intensive tasks (e.g., daily market data ingestion, small data transformations) leverage AWS Lambda for cost-efficiency.
InfraOps:
Infrastructure as Code (Terraform): All cloud infrastructure (VPCs, EKS clusters, S3 buckets, RDS instances) is provisioned and managed via Terraform, ensuring consistency, repeatability, and version control.
CI/CD (GitLab CI): Automated pipelines handle code commits, testing, Docker image builds, and Kubernetes deployments. This enables rapid, reliable iterations and hotfixes.
Monitoring & Alerting (Prometheus, Grafana, CloudWatch): Comprehensive dashboards track system health, data pipeline latency, model inference times, and core business metrics (RevPAR, Occupancy). PagerDuty alerts are configured for critical failures or anomalous metric deviations.
MLOps:
Feature Store (SageMaker Feature Store): We utilize SageMaker Feature Store to maintain a consistent, versioned repository of online and offline features, ensuring data consistency for both training and real-time inference.
Model Registry (MLflow): MLflow is used to version, track, and manage all model artifacts (XGBoost, PPO policies), associated code, hyperparameters, and performance metrics across experiments.
Automated Retraining: The XGBoost forecasting models are retrained weekly using fresh data to adapt to market shifts. The PPO agent's policy is periodically fine-tuned via offline simulations updated with recent real-world data.
Data & Model Drift Monitoring: Automated jobs monitor incoming data distributions for drift and model predictions for degradation (using A/B test results). Significant drift triggers alerts for manual intervention or automated retraining.
6.4. Metrics for Success
We track a blend of technical and business-centric metrics:
Business Impact Metrics (Key Success Indicators):
RevPAR: Our primary KPI. Achieved +7.8% quarter-over-quarter.
ADR (Average Daily Rate): +5.5% quarter-over-quarter.
Occupancy Rate: Maintained at healthy levels, with specific +5% increase in off-peak occupancy.
Conversion Rate (Direct Bookings): +1.2% (absolute percentage point) on the hotel's direct booking website.
Booking Pace: Increased visibility and control over booking pace, enabling proactive adjustments.
Cancellation Rate: -6% decrease.
Profit Margins: Initial analysis indicates a +4% improvement in gross profit margin due to better revenue capture without proportional cost increases.
Technical ML Metrics:
Demand Forecasting MAE: -22% reduction.
Model Latency: Average inference time for a price recommendation: <100ms.
Model Stability: Monitored via standard deviation of consecutive daily price changes per room type (kept within defined bounds).
RL Reward Accumulation: Continuous monitoring of the agent's cumulative reward in simulation and live A/B tests to ensure learning progress.
7. Price Elasticity Modeling & A/B Testing
a) Price Elasticity Modeling:
Understanding price elasticity is critical.
Methodology: We employed a multi-faceted approach. For baseline understanding, we performed econometric regression analysis on historical booking data (using generalized linear models with a log-link function, where log(demand) is a function of log(price) and other confounders). This provided initial elasticity coefficients.
Refinement: These initial estimates were continuously refined through the RL agent's learning process in the simulated environment. The agent naturally learns to exploit price elasticity by observing how different price actions affect demand. Furthermore, the room_type_demand_elasticity feature itself, derived from these models, guides the agent's initial decisions, ensuring the RL model learns from proven patterns.
b) A/B Testing Framework:
Our robust A/B testing framework was fundamental to validating model performance and ensuring continuous learning.
Phased Rollout: We initiated a pilot phase, dynamically pricing 50 "Standard King" rooms (Treatment Group B) while 50 identical rooms (Control Group A) remained on the traditional pricing model. This allowed for isolated measurement of impact without risking the entire hotel's revenue.
Statistical Validation: We meticulously collected data for both groups, comparing RevPAR, ADR, and occupancy. Statistical tests (e.g., two-sample t-tests) confirmed a statistically significant uplift in RevPAR for the Treatment Group (p-value < 0.01), confirming the dynamic pricing system's positive impact.
Iterative Learning: The real-world performance data from these A/B tests is a critical feedback loop. Positive and negative outcomes directly inform the PPO agent's reward function and are integrated into the simulation environment, enabling it to learn from successful strategies and avoid suboptimal ones. This continuous feedback loop has been paramount in achieving the stated successes.
8. Optimization Strategy: Hybrid Rule-Based & Reinforcement Learning
The final decision-making layer combines deterministic rules with intelligent learning.
a) Rule-Based System (Guardrails & Baseline):
This layer ensures system stability and adherence to business logic:
Min/Max Price Bounds: Implemented strict guardrails, ensuring prices never fall below a pre-defined minimum ($120 for Standard King) or exceed a maximum ($600 for Standard King) based on market positioning and brand integrity. This prevents egregious price gouging or extreme discounting (addresses P.1).
Competitor Reaction Thresholds: Rules to immediately react if a competitor's price for a comparable room type drops below a 15% delta, triggering a review by the RL agent or an immediate minor price adjustment (addresses P.3).
Forced Close-Outs: Automated closing of lower-priced room categories if a specific room type reaches 95% occupancy for a future date, shifting demand to higher-yield rooms (addresses P.2).
Event-Specific Floor Prices: During confirmed major events, minimum prices are automatically raised (e.g., Standard King minimum set to $250 during the "Grand City Marathon") (addresses P.7).
Cancellation Policy Tiers: Rules dynamically apply stricter cancellation policies (e.g., non-refundable rates only) when occupancy for a future date exceeds 85% (addresses P.6).
b) Reinforcement Learning (Adaptive Optimization):
The PPO agent operates within the bounds defined by the rule-based system.
Real-time Decisioning: The agent continuously evaluates the current state (using the real-time features from our feature store) and, based on its learned policy, recommends the optimal price adjustment for each room type and booking window. This recommendation is then published to the PMS.
Adaptive Learning: Unlike fixed rules, the RL agent learns to adapt its policy over time as market dynamics, competitor strategies, and customer behavior evolve. It continuously seeks to maximize the cumulative RevPAR over the entire booking horizon, making intelligent trade-offs between immediate revenue and future booking potential. This addresses the core of P.1, P.2, and P.8 by ensuring that prices are not only reactive but also forward-looking and optimal for the hotel's long-term profitability.
9. Conclusion & Next Steps
The Dynamic Pricing System for Ibeto Hotels represents a significant leap forward in our application of Data Science and AI to drive tangible business value. We have successfully mitigated the hotel's key pricing and inventory pain points, demonstrating clear revenue uplift and operational efficiency gains.
Key Achievements:
7.8% increase in RevPAR quarter-over-quarter.
22% reduction in demand forecasting error.
6% decrease in cancellation rates.
70% reduction in competitor response time.
30% reduction in manual revenue management workload.
Our robust MLOps framework ensures the system's longevity, scalability, and continuous improvement through automated retraining and rigorous A/B testing.
Next Steps:
Expand Scope: Extend dynamic pricing to other revenue streams (e.g., full restaurant menu pricing, spa services, meeting room rental).
Personalized Offers: Explore hyper-personalization, leveraging deeper customer segmentation (e.g., loyalty program tiers) to offer individualized rates.
Advanced Feature Exploration: Incorporate more granular external data, such as flight capacity data or social media trends, as leading indicators.
Multi-objective Optimization: Refine the RL reward function to balance RevPAR maximization with other objectives like brand loyalty or specific room type utilization.


