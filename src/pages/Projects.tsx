
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck } from "lucide-react";
import PageBadge from "../components/PageBadge";

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Project examples showcasing what we CAN do (potential solutions)
  const projects = [
    {
      id: 1,
      title: "AI-Powered Customer Service Solution",
      industry: "Telecommunications",
      image: "/placeholder.svg", // Replace with actual project image
      description: "Implement a conversational AI system to handle customer inquiries automatically while maintaining high satisfaction scores.",
      potential: [
        "Reduce average response time from minutes to seconds",
        "Cut customer service operational costs by up to 40%",
        "Improve CSAT scores significantly",
        "Handle thousands of daily customer interactions seamlessly"
      ],
      technologies: ["Natural Language Processing", "Sentiment Analysis", "Knowledge Graph", "Multi-channel Integration"],
      category: "customer-service"
    },
    {
      id: 2,
      title: "Predictive Maintenance System",
      industry: "Manufacturing",
      image: "/placeholder.svg", // Replace with actual project image
      description: "Develop a comprehensive predictive maintenance system using IoT sensors and machine learning to predict equipment failures before they occur.",
      potential: [
        "Reduce unplanned downtime by up to 75%",
        "Increase equipment lifespan by 30%+",
        "Save millions in maintenance costs and productivity losses",
        "Optimize maintenance scheduling across facilities"
      ],
      technologies: ["Predictive Analytics", "IoT Integration", "Time Series Analysis", "Edge Computing"],
      category: "manufacturing"
    },
    {
      id: 3,
      title: "Retail Inventory Optimization System",
      industry: "Retail",
      image: "/placeholder.svg", // Replace with actual project image
      description: "Create an intelligent inventory management system that predicts demand patterns and optimizes stock levels across multiple store locations.",
      potential: [
        "Reduce excess inventory while maintaining high product availability",
        "Decrease logistics costs significantly",
        "Improve gross margin through optimized purchasing",
        "Cut waste of perishable goods in food departments"
      ],
      technologies: ["Demand Forecasting", "Supply Chain Optimization", "Deep Learning", "Real-time Analytics"],
      category: "retail"
    },
    {
      id: 4,
      title: "Financial Fraud Detection System",
      industry: "Banking",
      image: "/placeholder.svg", // Replace with actual project image
      description: "Implement an advanced fraud detection system that analyzes transaction patterns in real-time to identify suspicious activities with high accuracy.",
      potential: [
        "Detect 95%+ of fraudulent transactions",
        "Reduce false positive alerts significantly",
        "Save millions in potential fraud losses",
        "Decrease manual review requirements"
      ],
      technologies: ["Anomaly Detection", "Behavioral Analysis", "Graph Neural Networks", "Real-time Processing"],
      category: "finance"
    },
    {
      id: 5,
      title: "Healthcare Patient Outcome Prediction",
      industry: "Healthcare",
      image: "/placeholder.svg", // Replace with actual project image
      description: "Develop a predictive analytics platform that helps healthcare providers identify at-risk patients and optimize treatment plans based on comprehensive data analysis.",
      potential: [
        "Improve early intervention rates for high-risk patients",
        "Reduce 30-day readmission rates by up to 30%",
        "Increase preventative care appointment compliance",
        "Enhance resource allocation efficiency across facilities"
      ],
      technologies: ["Clinical Data Analysis", "Risk Stratification", "Medical Imaging Analysis", "Protected Health Information Security"],
      category: "healthcare"
    },
    {
      id: 6,
      title: "Supply Chain Optimization",
      industry: "E-commerce & Logistics",
      image: "/placeholder.svg", // Replace with actual project image
      description: "Create an end-to-end supply chain optimization solution that improves logistics efficiency, reduces delivery times, and minimizes costs through intelligent routing and inventory placement.",
      potential: [
        "Reduce average delivery time by up to 30%",
        "Optimize warehouse utilization, increasing capacity",
        "Decrease logistics costs while handling more volume",
        "Improve delivery time accuracy and customer satisfaction"
      ],
      technologies: ["Route Optimization", "Demand Forecasting", "Warehouse Management", "Last-mile Delivery Planning"],
      category: "logistics"
    }
  ];

  const categories = [
    { id: "all", name: "All Solutions" },
    { id: "customer-service", name: "Customer Service" },
    { id: "manufacturing", name: "Manufacturing" },
    { id: "retail", name: "Retail" },
    { id: "finance", name: "Finance" },
    { id: "healthcare", name: "Healthcare" },
    { id: "logistics", name: "Logistics" }
  ];

  // Filter projects based on selected category
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, filteredProjects.length);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = projectRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1 && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index]);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [filteredProjects.length]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="bg-black min-h-screen relative corner-glow">
      {/* Background elements for consistency with other pages */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-radial from-black/70 via-black/90 to-black opacity-95 pointer-events-none"></div>
      
      {/* Floating orbs for visual consistency */}
      <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-neon-blue/5 filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-neon-orange/5 filter blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto py-16 px-4 relative z-10">
        <PageBadge text="AI Implementation Possibilities" icon="check" />
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 shimmer-text bg-gradient-to-r from-neon-orange via-neon-blue to-neon-green py-2">
            Sample AI Solutions
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of possible AI implementations that can deliver
            measurable results and transform your business operations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveFilter(category.id);
                setVisibleItems([]);
              }}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-white/10 text-white font-medium border border-white/20'
                  : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`transition-all duration-700 ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="glass-card overflow-hidden rounded-xl border border-white/10 h-full flex flex-col">
                {/* Project Image/Video Thumbnail */}
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="text-white flex items-center gap-2 bg-neon-orange/80 px-4 py-2 rounded-full hover:bg-neon-orange transition-colors duration-300">
                      <ArrowRight className="h-5 w-5" />
                      Learn More
                    </button>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-5">{project.description}</p>
                  
                  {/* Potential Benefits */}
                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Potential Benefits</h4>
                    <ul className="space-y-2">
                      {project.potential.map((result, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="inline-flex items-center justify-center w-5 h-5 bg-neon-green/20 text-neon-green rounded-full flex-shrink-0 mt-0.5">✓</span>
                          <span className="text-gray-300 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies Used */}
                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-white/5 text-gray-300 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-auto pt-4">
                    <Link 
                      to={`/contact?solution=${project.id}`}
                      className="neon-button-blue w-full px-4 py-2 text-center"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Discuss This Solution <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Explore AI Possibilities?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let's discuss how we can apply our expertise to your unique business challenges and create measurable results.
          </p>
          <Link to="/contact" className="neon-button-orange px-8 py-3 inline-flex items-center">
            <span className="relative z-10 flex items-center justify-center">
              Start Your AI Journey <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
