
import { Link } from "react-router-dom";
import { Code, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <Code className="h-5 w-5 text-primary" />
              <span>Victor Oluwagbamila</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Machine Learning Scientist & Engineer | AI-Driven Revenue Optimization, Smart City Solutions & Software Engineering.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <a 
                href="https://github.com/gbamilavictor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              
              <a 
                href="mailto:gbamilavictor@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium text-lg mb-4">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="/experience" className="text-muted-foreground hover:text-primary transition-colors">
                    Experience
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/playground" className="text-muted-foreground hover:text-primary transition-colors">
                    AI Playground
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4">Contact</h4>
              <address className="not-italic text-muted-foreground">
                <p className="mb-2">gbamilavictor@gmail.com</p>
                <p>London, United Kingdom</p>
              </address>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {currentYear} Victor Oluwagbamila. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
