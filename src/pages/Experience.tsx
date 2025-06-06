
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ExperiencePage = () => {
  const experiences = [
    {
      company: "Briech Intelligence Fusion Center",
      position: "Senior Machine Learning Scientist",
      period: "Aug 2023 – Present",
      location: "London, United Kingdom",
      achievements: [
        "Led design, development, and deployment of advanced ML models spanning fraud detection, dynamic pricing, and smart city analytics, with a strong emphasis on integrating these models into production-level software systems.",
        "Developed models using XGBoost, Isolation Forest, and Linear Regression that improved fraud detection rates by 40% and delivered real-time anomaly detection via Kafka and PyTorch Forecasting, generating over £5M in cost savings.",
        "Architected scalable MLOps pipelines on AWS SageMaker and Kubernetes with MLflow integration, reducing model deployment time by 65% while seamlessly integrating AI components into existing software architectures.",
        "Incorporated blockchain analytics and graph-based risk scoring to detect synthetic identities and illicit financial transactions, ensuring robust software solutions for complex data challenges.",
        "Mentored a multidisciplinary team of data scientists and engineers, championing continuous learning and the professional use of AI tools (ChatGPT, Gemini, Grok) for enhanced software engineering practices."
      ],
    },
    {
      company: "Fosterfield Griffin Technologies",
      position: "Data Scientist – AI & Revenue Optimization",
      period: "Mar 2020 – Jul 2023",
      location: "London, United Kingdom",
      achievements: [
        "Developed predictive pricing models using Random Forest, Gradient Boosting, and time-series forecasting, achieving a 20% revenue uplift for hospitality clients through dynamic pricing solutions.",
        "Engineered machine learning systems for credit risk scoring and transaction monitoring, reducing false positives by 35% while achieving 92% detection accuracy in high-risk transactions.",
        "Designed and automated ETL processes with Apache Airflow and Spark, integrating AI modules to deliver real-time analytics and actionable insights via interactive dashboards built with Plotly Dash.",
        "Worked closely with product and engineering teams to integrate ML solutions into client-facing platforms, enhancing both software robustness and user experience."
      ],
    },
    {
      company: "Regtag Innovations",
      position: "Junior Data Analyst – Financial Compliance & Analytics",
      period: "Aug 2017 – Feb 2020",
      location: "London, United Kingdom",
      achievements: [
        "Conducted exploratory data analysis on financial transactions to identify fraudulent behaviors, forming the basis for subsequent advanced ML models.",
        "Developed real-time analytics dashboards that improved reporting efficiency by 35% and optimized SQL queries, reducing data retrieval times by 40%.",
        "Supported data pipeline development and ensured high-quality, structured data for downstream machine learning applications while collaborating on software projects that enhanced system integration."
      ],
    }
  ];
    

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="mb-4">Professional Experience</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A chronological record of my professional journey in data science
            and machine learning.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="ml-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h2 className="text-2xl font-semibold">{exp.position}</h2>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-4">
                  <h3 className="text-lg font-medium text-primary">{exp.company}</h3>
                  <span className="text-sm text-muted-foreground">{exp.location}</span>
                </div>
                <ul className="space-y-3 list-disc pl-5">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-foreground/80">{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t text-center">
          <h3 className="text-2xl font-medium mb-4">Looking for my complete work history?</h3>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" asChild>
              <a href="/CV.md" className="flex items-center gap-2" download="Victor_Oluwagbamila_CV.md">
                Download CV
              </a>
            </Button>
            <Button asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
