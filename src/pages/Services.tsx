
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Brain, Cpu, Upload, Zap, BarChart2, PieChart, Users, 
  MessageCircle, Code, Graduation, Cloud, Lock, FileText, 
  Scale, HelpCircle, ArrowRight 
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const [isVisible, setIsVisible] = useState({
    heading: false,
    services: false,
    cta: false
  });
  
  const headingRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          if (target === headingRef.current) {
            setIsVisible((prev) => ({ ...prev, heading: true }));
          } else if (target === servicesRef.current) {
            setIsVisible((prev) => ({ ...prev, services: true }));
          } else if (target === ctaRef.current) {
            setIsVisible((prev) => ({ ...prev, cta: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (headingRef.current) observer.observe(headingRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Services data
  const servicesData = [
    {
      id: 1,
      title: "AI Consultation & Strategy",
      description: "Strategic guidance on implementing AI solutions tailored to your business goals and challenges.",
      icon: <Brain className="h-6 w-6 text-neon-orange" />,
      color: "orange" as const
    },
    {
      id: 2,
      title: "AI Technology Integration",
      description: "Seamless integration of AI technologies into your existing systems and workflows.",
      icon: <Upload className="h-6 w-6 text-neon-blue" />,
      color: "blue" as const
    },
    {
      id: 3,
      title: "AI Agent Development",
      description: "Creation of custom AI agents designed to automate tasks and enhance productivity.",
      icon: <Cpu className="h-6 w-6 text-neon-green" />,
      color: "green" as const
    },
    {
      id: 4,
      title: "AI-Powered Automation",
      description: "Streamline operations and reduce manual tasks through intelligent automation solutions.",
      icon: <Zap className="h-6 w-6 text-neon-orange" />,
      color: "orange" as const
    },
    {
      id: 5,
      title: "Predictive Analytics",
      description: "Advanced data analysis to forecast trends and make data-driven decisions.",
      icon: <BarChart2 className="h-6 w-6 text-neon-blue" />,
      color: "blue" as const
    },
    {
      id: 6,
      title: "Business Intelligence",
      description: "Comprehensive BI solutions that transform raw data into actionable insights.",
      icon: <PieChart className="h-6 w-6 text-neon-green" />,
      color: "green" as const
    },
    {
      id: 7,
      title: "AI-Powered Personalization",
      description: "Create personalized experiences for customers based on their preferences and behaviors.",
      icon: <Users className="h-6 w-6 text-neon-orange" />,
      color: "orange" as const
    },
    {
      id: 8,
      title: "AI-Driven Customer Support",
      description: "Enhance customer experiences with intelligent support solutions and chatbots.",
      icon: <MessageCircle className="h-6 w-6 text-neon-blue" />,
      color: "blue" as const
    },
    {
      id: 9,
      title: "Custom AI Models & Solutions",
      description: "Develop tailored AI models and solutions designed to address your specific business needs.",
      icon: <Code className="h-6 w-6 text-neon-green" />,
      color: "green" as const
    },
    {
      id: 10,
      title: "AI Training & Upskilling",
      description: "Comprehensive training programs to enhance your team's AI capabilities and knowledge.",
      icon: <Graduation className="h-6 w-6 text-neon-orange" />,
      color: "orange" as const
    },
    {
      id: 11,
      title: "AI Cloud Infrastructure",
      description: "Design and management of scalable cloud infrastructure optimized for AI workloads.",
      icon: <Cloud className="h-6 w-6 text-neon-blue" />,
      color: "blue" as const
    },
    {
      id: 12,
      title: "AI-driven Security Solutions",
      description: "Advanced security measures powered by artificial intelligence to protect your assets.",
      icon: <Lock className="h-6 w-6 text-neon-green" />,
      color: "green" as const
    },
    {
      id: 13,
      title: "AI-Based Content Creation",
      description: "Generate high-quality content efficiently using state-of-the-art AI technologies.",
      icon: <FileText className="h-6 w-6 text-neon-orange" />,
      color: "orange" as const
    },
    {
      id: 14,
      title: "AI Ethical Compliance",
      description: "Ensure your AI implementations adhere to ethical standards and regulatory requirements.",
      icon: <Scale className="h-6 w-6 text-neon-blue" />,
      color: "blue" as const
    },
    {
      id: 15,
      title: "Post-Implementation Support",
      description: "Ongoing support and maintenance to ensure your AI solutions continue to deliver value.",
      icon: <HelpCircle className="h-6 w-6 text-neon-green" />,
      color: "green" as const
    }
  ];

  return (
    <div className="pt-20 bg-black grid-bg">
      {/* Hero Section */}
      <section className="py-20">
        <div 
          ref={headingRef}
          className="container mx-auto px-4 text-center"
        >
          <div 
            className={`inline-block px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm transition-all duration-700 ${isVisible.heading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="text-sm font-medium text-gray-300">
              <span className="text-neon-blue">Comprehensive</span> AI Services
            </p>
          </div>
          
          <h1 
            className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 ${isVisible.heading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
          >
            Innovative AI Solutions for <br />
            <span className="shimmer-text">Every Business Need</span>
          </h1>
          
          <p 
            className={`text-gray-400 text-lg max-w-3xl mx-auto mb-10 transition-all duration-700 ${isVisible.heading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "400ms" }}
          >
            We offer a comprehensive suite of AI services designed to help businesses harness the power of artificial intelligence. From strategic consulting to implementation and support, our solutions are tailored to address your specific challenges.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section 
        ref={servicesRef}
        className="pb-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
                index={index}
                isVisible={isVisible.services}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section 
        ref={ctaRef}
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div 
          className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="glass-card p-10 md:p-16 rounded-2xl text-center border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 text-lg mb-10">
              Contact our team of AI experts today to discuss how our services can help you achieve your business goals.
            </p>
            <Link to="/contact" className="neon-button-green">
              <span className="relative z-10 flex items-center justify-center">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
