
import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const displayedServices = activeTab === "all" 
    ? services 
    : serviceCategories[activeTab as keyof typeof serviceCategories];

  return (
    <div className="relative overflow-hidden bg-black min-h-screen">
      {/* Enhanced Grid Background with increased visibility */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-25"></div>
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-black/70 via-black/90 to-black opacity-95"></div>
      
      {/* Floating Elements */}
      <div className="absolute w-96 h-96 rounded-full bg-neon-orange/10 blur-3xl animate-float top-20 right-[20%]"></div>
      <div className="absolute w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl animate-float bottom-40 left-[30%]" style={{ animationDelay: "-3s" }}></div>
      <div className="absolute w-72 h-72 rounded-full bg-neon-green/10 blur-3xl animate-float top-1/3 left-[15%]" style={{ animationDelay: "-1.5s" }}></div>
      
      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <ServicesHeader />
        
        {/* Service Category Tabs */}
        <div className={`transition-all duration-700 mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="glass-card bg-black/30 border border-white/10 p-1">
                <TabsTrigger 
                  value="all" 
                  className="px-4 py-2 text-lg data-[state=active]:bg-neon-blue/20 data-[state=active]:text-white"
                >
                  All Services
                </TabsTrigger>
                {Object.keys(serviceCategories).map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="px-4 py-2 text-lg data-[state=active]:bg-neon-blue/20 data-[state=active]:text-white"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 text-white">All AI Services</h2>
                <p className="text-gray-400">Explore our complete range of AI services designed to transform your business</p>
                <Separator className="my-4 bg-white/10" />
              </div>
              <ServiceList services={services} />
            </TabsContent>
            
            {Object.entries(serviceCategories).map(([category, categoryServices]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2 text-white">{category}</h2>
                  <p className="text-gray-400">
                    {category === "AI Strategy" && "Strategic AI planning and consultation to guide your digital transformation"}
                    {category === "AI Development" && "Custom AI development solutions to solve your specific business challenges"}
                    {category === "AI Integration" && "Seamless integration of AI technologies into your existing systems"}
                    {category === "Specialized Solutions" && "Industry-specific AI applications tailored to your unique needs"}
                  </p>
                  <Separator className="my-4 bg-white/10" />
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
