
import React, { useState, useEffect, useRef } from 'react';
import ServicesHeader from '../components/ServicesHeader';
import ServiceList from '../components/ServiceList';
import { services } from '../data/services';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Group services by category
const serviceCategories = {
  "AI Strategy": services.filter(s => 
    ["AI Strategy", "AI Consultation", "AI Roadmapping", "Digital Transformation"].includes(s.title)),
  "AI Development": services.filter(s => 
    ["AI Development", "Machine Learning", "Computer Vision", "Natural Language Processing", "Predictive Analytics"].includes(s.title)),
  "AI Integration": services.filter(s => 
    ["AI Integration", "Data Pipeline Development", "API Development", "Custom AI Solutions"].includes(s.title)),
  "Specialized Solutions": services.filter(s => 
    ["Conversational AI", "AI-Powered Customer Support", "Process Automation", "AI for Healthcare", "AI for Finance"].includes(s.title)),
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const displayedServices = activeTab === "all" 
    ? services 
    : serviceCategories[activeTab as keyof typeof serviceCategories];

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-black min-h-screen">
      {/* Enhanced Grid Background with increased visibility */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-50"></div>
      
      {/* Enhanced Gradient Overlay with smooth transitions */}
      <div className="absolute inset-0 bg-gradient-radial from-black/60 via-black/80 to-black opacity-90"></div>
      
      {/* Interactive Floating Elements */}
      <div 
        className="absolute w-96 h-96 rounded-full bg-neon-orange/10 blur-3xl"
        style={{ 
          top: `calc(20% + ${mousePosition.y * 30}px)`, 
          right: `calc(20% + ${mousePosition.x * -30}px)`,
          transition: 'top 0.5s ease-out, right 0.5s ease-out'
        }}
      ></div>
      <div 
        className="absolute w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl" 
        style={{ 
          bottom: `calc(30% + ${mousePosition.y * -30}px)`, 
          left: `calc(25% + ${mousePosition.x * 30}px)`,
          transition: 'bottom 0.5s ease-out, left 0.5s ease-out'
        }}
      ></div>
      <div 
        className="absolute w-72 h-72 rounded-full bg-neon-green/10 blur-3xl"
        style={{ 
          top: `calc(60% + ${mousePosition.y * 30}px)`, 
          left: `calc(15% + ${mousePosition.x * -30}px)`,
          transition: 'top 0.5s ease-out, left 0.5s ease-out'
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <ServicesHeader />
        
        {/* Service Category Tabs with proper content */}
        <div className={`transition-all duration-700 mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="glass-card bg-black/40 border border-white/20 p-1.5 backdrop-blur-md shadow-xl rounded-xl overflow-x-auto flex-wrap justify-center">
                <TabsTrigger 
                  value="all" 
                  className="px-4 py-2.5 text-lg data-[state=active]:bg-neon-blue/20 data-[state=active]:text-white rounded-lg"
                >
                  All Services
                </TabsTrigger>
                {Object.keys(serviceCategories).map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="px-4 py-2.5 text-lg data-[state=active]:bg-neon-blue/20 data-[state=active]:text-white rounded-lg"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <ServiceList services={services} />
            </TabsContent>
            
            {Object.entries(serviceCategories).map(([category, categoryServices]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <ServiceList services={categoryServices} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
