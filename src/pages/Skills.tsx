
import { Progress } from "@/components/ui/progress";
import { Database, BarChart3, FileText, Code, Server, LineChart } from "lucide-react";

const SkillsPage = () => {
  const skillCategories = [
    {
      name: "Machine Learning & Deep Learning",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Fraud Detection & Anomaly Detection (XGBoost, Isolation Forest, Logistic Regression)", level: 90 },
        { name: "Predictive Modeling & Dynamic Pricing (Random Forest, Linear Regression, Time-Series Forecasting)", level: 90 },
        { name: "LLM Fine-Tuning & NLP (GPT-4, T5-small, LLaMA 2)", level: 90 },
        { name: "Synthetic Data Generation (GANs, Diffusion Models)", level: 90 },
        { name: "Graph Neural Networks", level: 90 },
        { name: "Deep Architectures (Transformers, CNNs, LSTMs, ARIMA)", level: 90 }
      ]
    },
    {
      name: "MLOps & AI Infrastructure",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Cloud Deployment (AWS SageMaker, GCP Vertex AI)", level: 90 },
        { name: "Containerization (Kubernetes, Docker)", level: 90 },
        { name: "CI/CD & Pipeline Orchestration (MLflow, TFX, Apache Airflow, GitHub Actions)", level: 90 },
        { name: "Data Pipelines & Big Data (Apache Spark, Kafka, Snowflake, Ray)", level: 90 }
      ]
    },
    {
      name: "Software Engineering & AI Integration",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "API Development (FastAPI, Flask, gRPC)", level: 90 },
        { name: "ETL/ELT Processes", level: 90 },
        { name: "SQL & NoSQL (PostgreSQL, MongoDB, Google BigQuery)", level: 90 },
        { name: "AI Tool Integration (ChatGPT, Gemini, Grok)", level: 90 },
        { name: "Hugging Face Transformers", level: 90 },
        { name: "LangChain", level: 90 }
      ]
    },
    {
      name: "Data Visualization",
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Plotly Dash", level: 90 },
        { name: "Streamlit", level: 90 },
        { name: "Power BI", level: 90 }
      ]
    },
    {
      name: "Domain Expertise",
      icon: <LineChart className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Financial Crime Prevention & Credit Risk Scoring", level: 90 },
        { name: "Revenue Optimization & Dynamic Pricing (Hospitality)", level: 90 },
        { name: "Smart City Analytics (Traffic Flow, Energy Demand Forecasting)", level: 90 }
      ]
    }
  ];
    

  const getExperienceLabel = (level: number): string => {
    if (level >= 95) return "Expert";
    if (level >= 85) return "Advanced";
    if (level >= 75) return "Proficient";
    return "Intermediate";
  };

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="mb-4">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive breakdown of my technical skills and experience
            across data science, machine learning, and related fields.
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-semibold">{category.name}</h2>
              </div>
              
              <div className="grid gap-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="rounded-lg border bg-card p-4 transition-all">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span className="text-sm text-muted-foreground">
                        {getExperienceLabel(skill.level)}
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t">
          <h2 className="text-2xl font-semibold mb-6">Certifications & Education</h2>
          
          <div className="space-y-4">
            {/* Education */}
            <div className="rounded-lg border bg-card p-4">
              <div className="flex justify-between">
                <h3 className="font-medium">Master of Science in Artificial Intelligence</h3>
                <span className="text-sm text-muted-foreground">2023 – 2024</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">University of Wolverhampton, United Kingdom</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="flex justify-between">
                <h3 className="font-medium">Bachelor of Science in Computer Science</h3>
                <span className="text-sm text-muted-foreground">2015 – 2019</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Babcock University, Nigeria</p>
            </div>

            {/* Certifications */}
            <div className="rounded-lg border bg-card p-4">
              <div className="flex justify-between">
                <h3 className="font-medium">AWS Certified Machine Learning – Specialty</h3>
                <span className="text-sm text-muted-foreground">2023</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Amazon Web Services</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="flex justify-between">
                <h3 className="font-medium">Google Generative AI Certification</h3>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Google</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
  
              {/* <p className="text-sm text-muted-foreground mt-1">Association of Certified Fraud Examiners</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
