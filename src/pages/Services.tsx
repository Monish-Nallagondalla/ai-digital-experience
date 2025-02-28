
import React, { useState, useEffect, useRef } from "react";
import ServiceCard from "../components/ServiceCard";
import { Code, Brain, GraduationCap, LineChart, Globe, Database, BarChart3, Layers, Share2, Lock, FileText, Radio, Smartphone, Zap, CloudCog } from "lucide-react";

const Services = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      title: "Machine Learning Development",
      description: "Custom ML models designed for your specific business needs",
      icon: <Brain className="w-6 h-6 text-neon-orange" />,
      color: "orange"
    },
    {
      title: "Natural Language Processing",
      description: "Extract insights from text with advanced NLP solutions",
      icon: <FileText className="w-6 h-6 text-neon-blue" />,
      color: "blue"
    },
    {
      title: "Computer Vision Systems",
      description: "Implement visual intelligence into your applications",
      icon: <Radio className="w-6 h-6 text-neon-green" />,
      color: "green"
    },
    {
      title: "Data Analytics & Insights",
      description: "Transform raw data into actionable business intelligence",
      icon: <BarChart3 className="w-6 h-6 text-neon-orange" />,
      color: "orange"
    },
    {
      title: "AI Strategy Consulting",
      description: "Strategic guidance on implementing AI in your business",
      icon: <LineChart className="w-6 h-6 text-neon-blue" />,
      color: "blue"
    },
    {
      title: "Chatbot Development",
      description: "Intelligent conversational interfaces for customer support",
      icon: <Smartphone className="w-6 h-6 text-neon-green" />,
      color: "green"
    },
    {
      title: "Deep Learning Solutions",
      description: "Neural networks for complex problem-solving",
      icon: <Layers className="w-6 h-6 text-neon-orange" />,
      color: "orange"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and behaviors with predictive models",
      icon: <Code className="w-6 h-6 text-neon-blue" />,
      color: "blue"
    },
    {
      title: "AI Education & Training",
      description: "Customized AI training programs for your team",
      icon: <GraduationCap className="w-6 h-6 text-neon-green" />,
      color: "green"
    },
    {
      title: "Computer Vision Systems",
      description: "Visual recognition and processing solutions",
      icon: <Zap className="w-6 h-6 text-neon-orange" />,
      color: "orange"
    },
    {
      title: "Cloud AI Integration",
      description: "Seamlessly integrate AI with your cloud infrastructure",
      icon: <CloudCog className="w-6 h-6 text-neon-blue" />,
      color: "blue"
    },
    {
      title: "Recommender Systems",
      description: "Personalized recommendation engines for your platform",
      icon: <Share2 className="w-6 h-6 text-neon-green" />,
      color: "green"
    },
    {
      title: "AI Security & Ethics",
      description: "Ensure your AI systems are secure, fair, and ethical",
      icon: <Lock className="w-6 h-6 text-neon-orange" />,
      color: "orange"
    },
    {
      title: "Global AI Solutions",
      description: "Multilingual and multicultural AI applications",
      icon: <Globe className="w-6 h-6 text-neon-blue" />,
      color: "blue"
    },
    {
      title: "Big Data Processing",
      description: "Handle and analyze massive datasets with AI",
      icon: <Database className="w-6 h-6 text-neon-green" />,
      color: "green"
    }
  ];

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, services.length);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.findIndex(
              ref => ref === entry.target
            );
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach(ref => {
      if (ref) observerRef.current?.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [cardsRef.current.length]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We offer a comprehensive range of AI solutions tailored to meet your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            ref={el => (cardsRef.current[index] = el)}
          >
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color as "orange" | "blue" | "green"}
              index={index}
              isVisible={visibleItems.includes(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
