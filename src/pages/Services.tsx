
import React, { useState, useEffect, useRef } from 'react';
import ServicesHeader from '../components/ServicesHeader';
import ServiceList from '../components/ServiceList';
import { services } from '../data/services';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from '@/components/ui/separator';

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
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-40"></div>
      
      {/* Enhanced Gradient Overlay with smooth transitions */}
      <div className="absolute inset-0 bg-gradient-radial from-black/70 via-black/90 to-black opacity-95"></div>
      
      {/* Interactive Floating Elements that follow cursor */}
      <div 
        className="absolute w-96 h-96 rounded-full bg-neon-orange/10 blur-3xl"
        style={{ 
          top: `calc(20% + ${mousePosition.y * 40}px)`, 
          right: `calc(20% + ${mousePosition.x * -40}px)`,
          transition: 'top 0.3s ease-out, right 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl" 
        style={{ 
          bottom: `calc(30% + ${mousePosition.y * -40}px)`, 
          left: `calc(25% + ${mousePosition.x * 40}px)`,
          transition: 'bottom 0.3s ease-out, left 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute w-72 h-72 rounded-full bg-neon-green/10 blur-3xl"
        style={{ 
          top: `calc(60% + ${mousePosition.y * 40}px)`, 
          left: `calc(15% + ${mousePosition.x * -40}px)`,
          transition: 'top 0.3s ease-out, left 0.3s ease-out'
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <ServicesHeader />
        
        {/* Service Category Tabs - Enhanced with 3D glass effect */}
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
              <div className="glass-card rounded-xl p-6 mb-8 border border-white/20 backdrop-blur-md animate-fade-in">
                <h2 className="text-2xl font-semibold mb-2 text-white">All AI Services</h2>
                <p className="text-gray-300">Explore our complete range of AI services designed to transform your business</p>
                <Separator className="my-4 bg-white/20" />
              </div>
              <ServiceList services={services} />
            </TabsContent>
            
            {Object.entries(serviceCategories).map(([category, categoryServices]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="glass-card rounded-xl p-6 mb-8 border border-white/20 backdrop-blur-md animate-fade-in">
                  <h2 className="text-2xl font-semibold mb-2 text-white">{category}</h2>
                  <p className="text-gray-300">
                    {category === "AI Strategy" && "Strategic AI planning and consultation to guide your digital transformation"}
                    {category === "AI Development" && "Custom AI development solutions to solve your specific business challenges"}
                    {category === "AI Integration" && "Seamless integration of AI technologies into your existing systems"}
                    {category === "Specialized Solutions" && "Industry-specific AI applications tailored to your unique needs"}
                  </p>
                  <Separator className="my-4 bg-white/20" />
                </div>
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
