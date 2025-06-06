
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NeuralNetwork from "@/components/home/NeuralNetwork";
import { ArrowDown, ArrowRight, Database, FileText, Github, BarChart3 } from "lucide-react";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-20">
        <NeuralNetwork />
        
        <div className="container relative">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 text-sm md:text-base rounded-full bg-accent px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Machine Learning Scientist & Engineer</span>
            </div>
            
            <h1 className="mb-6">
              Building Intelligent Systems:
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 animate-gradient-flow">
                From Data to Deployment
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              Innovative Machine Learning Scientist & Engineer with 8+ years of experience delivering end-to-end AI solutions across multiple domains, including financial fraud detection, revenue optimization in hospitality, smart city analytics, and robust software engineering. Also leveraging  years of dedicated software engineering experience focused on AI integration and implementation—leveraging tools like ChatGPT, Gemini, and Grok to create cutting-edge solutions. Adept at building scalable ML models, optimizing data pipelines, and deploying robust MLOps infrastructures on AWS and GCP. I excel in translating complex data and educational concepts into actionable, AI-driven solutions that drive operational efficiencies and transform learning experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-foreground/50" />
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-accent/30">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2>Featured Projects</h2>
            <Button variant="ghost" asChild>
              <Link to="/projects" className="flex items-center gap-2">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: AI-Driven Fraud Detection */}
            <div className="project-card group">
              <div className="relative overflow-hidden aspect-video rounded-t-lg bg-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="AI-Driven Fraud Detection & Risk Scoring"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                    Fraud Detection
                  </span>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    XGBoost
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                    Risk Scoring
                  </span>
                   <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                    Unsupervised Learning
                  </span>
                </div>
                <h3 className="text-xl mb-2">AI-Driven Fraud Detection & Risk Scoring</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  Developed an XGBoost-based model that reduced fraud rates by 42% and integrated unsupervised learning (Isolation Forest, Autoencoders) for robust anomaly detection, with emphasis on integrating these solutions into scalable software systems.
                </p>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="p-0" asChild>
                    <a href="https://github.com/gbamilavictor" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="mr-1 h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="p-0" asChild>
                    <Link to="/projects#ai-fraud-detection" className="flex items-center">
                      <FileText className="mr-1 h-4 w-4" />
                      <span>Read More</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Project 2: Dynamic Pricing for Hospitality */}
            <div className="project-card group">
              <div className="relative overflow-hidden aspect-video rounded-t-lg bg-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" 
                  alt="Dynamic Pricing for Hospitality"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                    Dynamic Pricing
                  </span>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    Predictive Modeling
                  </span>
                  <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                    Hospitality
                  </span>
                  <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-300">
                    API Development
                  </span>
                </div>
                <h3 className="text-xl mb-2">Dynamic Pricing for Hospitality</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  Engineered predictive pricing models leveraging demand forecasting and price elasticity analyses, increasing hotel revenue by 15–20% through optimized dynamic pricing strategies, coupled with robust API development for seamless integration into client systems.
                </p>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="p-0" asChild>
                    <a href="https://github.com/gbamilavictor" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="mr-1 h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="p-0" asChild>
                    <Link to="/projects#dynamic-pricing-hospitality" className="flex items-center">
                      <FileText className="mr-1 h-4 w-4" />
                      <span>Read More</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Project 3: Smart City Analytics */}
            <div className="project-card group">
              <div className="relative overflow-hidden aspect-video rounded-t-lg bg-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1503236795479-95186d4f0c15" 
                  alt="Smart City Analytics"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    Smart City
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                    AI Platform
                  </span>
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                    Traffic Optimization
                  </span>
                  <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                    Energy Forecasting
                  </span>
                </div>
                <h3 className="text-xl mb-2">Smart City Analytics</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  Created an AI platform for real-time traffic flow optimization and energy demand forecasting, reducing congestion errors by 30% and power grid failures by 25%, incorporating innovative software engineering practices to integrate data streams and visualization dashboards.
                </p>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="p-0" asChild>
                    <a href="https://github.com/gbamilavictor" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="mr-1 h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="p-0" asChild>
                    <Link to="/projects#smart-city-analytics" className="flex items-center">
                      <FileText className="mr-1 h-4 w-4" />
                      <span>Read More</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Highlight */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-16">Core Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Skill Category 1 */}
            <div className="bg-card rounded-lg border p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl mb-4">Data Science & ML</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span>Machine Learning</span>
                  <div className="w-24 skill-bar">
                    <div className="skill-progress" style={{ width: '95%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>Deep Learning</span>
                  <div className="w-24 skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>NLP</span>
                  <div className="w-24 skill-bar">
                    <div className="skill-progress" style={{ width: '95%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>Computer Vision</span>
                  <div className="w-24 skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>Statistical Analysis</span>
                  <div className="w-24 skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Skill Category 2 */}
            <div className="bg-card rounded-lg border p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl mb-4">Languages & Frameworks</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span>Python</span>
                  <div className="w-24 skill-bar">
                    <div className="skill-progress" style={{ width: '98%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>PyTorch</span>
                  <div className="w-24 skill-bar">
                    <div className="skill-progress" style={{ width: '95%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>TensorFlow</span>
                  <div className="w-24 skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>SQL</span>
                  <div className="w-24 skill-bar">
                    <div className="skill-progress" style={{ width: '92%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>R</span>
                  <div className="w-24 skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Skill Category 3 */}
            <div className="bg-card rounded-lg border p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl mb-4">MLOps & Deployment</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span>Docker</span>
                  <div className="w-24 skill-bar">
                    <div className="skill-progress" style={{ width: '95%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>Kubernetes</span>
                  <div className="w-24 skill-bar">
                    <div className="skill-progress" style={{ width: '88%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>AWS</span>
                  <div className="w-24 skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>CI/CD</span>
                  <div className="w-24 skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>MLflow</span>
                  <div className="w-24 skill-bar">
                    <div className="skill-progress" style={{ width: '92%' }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link to="/skills">View All Skills & Expertise</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Latest Blog Posts */}
      <section className="py-20 bg-accent/30">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2>Latest Articles</h2>
            <Button variant="ghost" asChild>
              <Link to="/blog" className="flex items-center gap-2">
                View All Posts
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="project-card group">
              <div className="relative overflow-hidden aspect-video rounded-t-lg bg-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Blog Post"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center text-xs text-muted-foreground">
                    May 12, 2023
                  </span>
                  <span className="inline-flex items-center text-xs text-muted-foreground">
                    •
                  </span>
                  <span className="inline-flex items-center text-xs text-muted-foreground">
                    8 min read
                  </span>
                </div>
                <h3 className="text-xl mb-2">The Future of Large Language Models in Enterprise</h3>
                <p className="text-muted-foreground mb-4">
                  An exploration of how LLMs are transforming enterprise operations and what to expect in the coming years.
                </p>
                <Button variant="ghost" size="sm" className="p-0" asChild>
                  <Link to="/blog/future-of-llm" className="flex items-center">
                    <span>Read Article</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Blog Post 2 */}
            <div className="project-card group">
              <div className="relative overflow-hidden aspect-video rounded-t-lg bg-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Blog Post"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center text-xs text-muted-foreground">
                    April 28, 2023
                  </span>
                  <span className="inline-flex items-center text-xs text-muted-foreground">
                    •
                  </span>
                  <span className="inline-flex items-center text-xs text-muted-foreground">
                    5 min read
                  </span>
                </div>
                <h3 className="text-xl mb-2">Optimizing MLOps Pipelines for Scale</h3>
                <p className="text-muted-foreground mb-4">
                  Best practices for building scalable, efficient machine learning operations pipelines in production environments.
                </p>
                <Button variant="ghost" size="sm" className="p-0" asChild>
                  <Link to="/blog/optimizing-mlops" className="flex items-center">
                    <span>Read Article</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Blog Post 3 */}
            <div className="project-card group">
              <div className="relative overflow-hidden aspect-video rounded-t-lg bg-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="Blog Post"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center text-xs text-muted-foreground">
                    April 3, 2023
                  </span>
                  <span className="inline-flex items-center text-xs text-muted-foreground">
                    •
                  </span>
                  <span className="inline-flex items-center text-xs text-muted-foreground">
                    10 min read
                  </span>
                </div>
                <h3 className="text-xl mb-2">From Research to Production: Bridging the ML Gap</h3>
                <p className="text-muted-foreground mb-4">
                  Strategies for effectively transitioning machine learning models from research environments to production systems.
                </p>
                <Button variant="ghost" size="sm" className="p-0" asChild>
                  <Link to="/blog/research-to-production" className="flex items-center">
                    <span>Read Article</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container text-center">
          <h2 className="mb-6">Ready to Collaborate?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-foreground/80">
            Let's discuss how my expertise in AI and ML can help solve your business challenges or contribute to your innovative projects.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
