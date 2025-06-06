
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, FileText } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      id: "ai-fraud-detection",
      title: "AI-Driven Fraud Detection & Risk Scoring",
      description: "Developed an XGBoost-based model that reduced fraud rates by 42% and integrated unsupervised learning (Isolation Forest, Autoencoders) for robust anomaly detection, with emphasis on integrating these solutions into scalable software systems.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", // Placeholder image
      tags: ["Fraud Detection", "XGBoost", "Risk Scoring", "Unsupervised Learning"],
      tagColors: ["yellow", "green", "blue", "purple"]
    },
    {
      id: "dynamic-pricing-hospitality",
      title: "Dynamic Pricing for Hospitality",
      description: "Engineered predictive pricing models leveraging demand forecasting and price elasticity analyses, increasing hotel revenue by 15–20% through optimized dynamic pricing strategies, coupled with robust API development for seamless integration into client systems.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4", // Placeholder image for hospitality/business
      tags: ["Dynamic Pricing", "Predictive Modeling", "Hospitality", "API Development"],
      tagColors: ["blue", "green", "orange", "red"]
    },
    {
      id: "smart-city-analytics",
      title: "Smart City Analytics",
      description: "Created an AI platform for real-time traffic flow optimization and energy demand forecasting, reducing congestion errors by 30% and power grid failures by 25%, incorporating innovative software engineering practices to integrate data streams and visualization dashboards.",
      image: "https://images.unsplash.com/photo-1503236795479-95186d4f0c15", // Placeholder image for city/tech
      tags: ["Smart City", "AI Platform", "Traffic Optimization", "Energy Forecasting"],
      tagColors: ["green", "blue", "yellow", "purple"]
    },
    {
      id: "synthetic-data-llm",
      title: "Synthetic Data & LLM Fine-Tuning",
      description: "Implemented GAN-based synthetic data generation to enhance training datasets and fine-tuned LLMs (GPT-4, T5-small, LLaMA 2), improving model performance by up to 40% on task-specific benchmarks and integrating AI solutions into broader educational initiatives.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81", // Placeholder image for AI/LLM
      tags: ["Synthetic Data", "GANs", "LLM Fine-Tuning", "GPT-4"],
      tagColors: ["purple", "red", "blue", "green"]
    },
    {
      id: "ai-legal-automation",
      title: "AI-Powered Automation for Legal Practices",
      description: "Transforming legal practices with intelligent automation. We offer a suite of AI-powered agents designed to enhance efficiency, streamline workflows, and reduce administrative burdens for law firms. Our solutions cover client-facing interactions (intake, automated updates, FAQs), internal operations (document automation & review, e-discovery triage, legal research assistance, task & deadline management, billing), and specialized legal practice areas (contract analysis, due diligence, IP management). All solutions are developed with a strong emphasis on human oversight, data security, ethical considerations, and integration with existing legal software. Empower your firm to focus on high-value legal work by leveraging cutting-edge AI.",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646",
      tags: ["Legal Tech", "AI Automation", "Law Firm Efficiency", "Case Management", "Document Automation", "Legal AI"],
      tagColors: ["blue", "purple", "green", "yellow", "orange", "red"]
    },
    {
      id: "ai-entrepreneur-engine",
      title: "The Entrepreneur's AI-Powered Growth Engine",
      description: "Supercharge your business with our integrated suite of AI agents, orchestrated by a central Managing Director Agent. This ecosystem automates key entrepreneurial tasks from idea validation and market analysis to lead generation, multi-channel marketing, customer service, and data-driven insights. Empowering entrepreneurs to save time, make smarter decisions, and focus on strategic growth.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
      tags: ["Entrepreneur AI", "Startup Automation", "Business Growth", "Multi-Agent Systems", "Lead Generation", "AI Strategy"],
      tagColors: ["green", "blue", "purple", "red", "yellow", "orange"]
    }
  ];
    

  const getTagClassName = (color: string) => {
    switch (color) {
      case 'blue':
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case 'purple':
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      case 'green':
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case 'red':
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      case 'yellow':
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case 'orange':
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
      case 'indigo':
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300";
      case 'gray':
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };
  
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="mb-4">Projects & Case Studies</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my most impactful data science, machine learning, 
            and artificial intelligence projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden aspect-video rounded-t-lg bg-secondary">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getTagClassName(project.tagColors[index])}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="p-0" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="mr-1 h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="p-0" asChild>
                    <Link to={`/projects/${project.id}`} className="flex items-center">
                      <FileText className="mr-1 h-4 w-4" />
                      <span>View Details</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
