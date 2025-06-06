
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const blogPosts = [
    {
      id: "keynote-mlconf-2024",
      title: "AI for Fraud Prevention & Revenue Optimization",
      excerpt: "Keynote presentation at MLConf 2024 discussing AI strategies for fraud prevention and revenue optimization.",
      date: "2024",
      readTime: "Presentation",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284", // Placeholder for conference/presentation
      categories: ["Keynote", "AI", "Fraud Prevention", "Revenue Optimization", "MLConf 2024"]
    },
    {
      id: "research-kdd-2023",
      title: "Graph-Based Anomaly Detection in Financial Transactions",
      excerpt: "Research paper published at KDD 2023 on using graph-based methods for anomaly detection in financial data.",
      date: "2023",
      readTime: "Paper",
      image: "https://images.unsplash.com/photo-1581091226809-1f07f1aa49a3", // Placeholder for research/technical paper
      categories: ["Research Paper", "KDD 2023", "Anomaly Detection", "Graph Neural Networks", "Finance"]
    },
    {
      id: "tech-blog-fraud-detection",
      title: "Scalable Fraud Detection Systems in Financial Services",
      excerpt: "Technical blog series with 5,000+ monthly readers on building scalable fraud detection systems.",
      date: "Ongoing",
      readTime: "Blog Series",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", // Placeholder for blog/article
      categories: ["Technical Blog", "Fraud Detection", "Financial Services", "Scalability"]
    },
    {
      id: "insights-ai-tools-integration",
      title: "Integrating AI Tools (ChatGPT, Gemini, Grok) into Software Development",
      excerpt: "Regularly sharing insights on integrating AI tools like ChatGPT, Gemini, and Grok into software development at industry conferences and technical meetups.",
      date: "Ongoing",
      readTime: "Talk Series",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81", // Placeholder for talks/community
      categories: ["AI Integration", "Software Development", "ChatGPT", "Gemini", "Grok", "Conferences"]
    }
  ];
    

  // Filter blog posts based on search query
  const filteredPosts = searchQuery.trim() === '' 
    ? blogPosts 
    : blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.categories.some(category => 
          category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );

  // All unique categories
  const allCategories = [...new Set(blogPosts.flatMap(post => post.categories))].sort();

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="mb-4">Blog & Articles</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and technical deep-dives on data science, 
            machine learning, and AI engineering.
          </p>
        </div>
        
        {/* Search and filters */}
        <div className="mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              variant={searchQuery === "" ? "default" : "outline"}
              size="sm"
              onClick={() => setSearchQuery("")}
            >
              All
            </Button>
            {allCategories.map((category) => (
              <Button
                key={category}
                variant={searchQuery === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSearchQuery(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog posts */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="project-card group block"
              >
                <div className="relative overflow-hidden aspect-video rounded-t-lg bg-secondary">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center text-xs text-muted-foreground">
                      {post.date}
                    </span>
                    <span className="inline-flex items-center text-xs text-muted-foreground">
                      •
                    </span>
                    <span className="inline-flex items-center text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((category, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
                    <span>Read Article</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setSearchQuery("")}
            >
              Clear Search
            </Button>
          </div>
        )}
        
        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t">
          <div className="bg-accent/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold mb-3">Subscribe to My Newsletter</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Get notified about new articles and insights on data science, ML, and AI.
              No spam, just quality content delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
