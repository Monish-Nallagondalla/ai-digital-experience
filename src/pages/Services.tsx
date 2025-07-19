
import React, { useState, useEffect } from 'react';
import ServicesHeader from '../components/ServicesHeader';
import ServiceList from '../components/ServiceList';
import { services } from '../data/services';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const serviceCategories = {
  "AI Strategy & Advisory": services.filter(s => 
    ["AI Strategy Consulting", "AI Ethics & Governance", "AI Education & Training", "Data Science Consulting"].includes(s.title)),
  
  "AI Development": services.filter(s => 
    ["Custom AI Application Development", "Natural Language Processing Solutions", "Computer Vision Implementation", "Predictive Analytics Implementation", "Generative AI Solutions"].includes(s.title)),
  
  "AI Operations": services.filter(s => 
    ["Machine Learning Operations (MLOps)", "AI Integration Services", "Data Engineering & Infrastructure", "AI Model Training & Fine-tuning"].includes(s.title)),
  
  "Business Solutions": services.filter(s => 
    ["AI-Enhanced Customer Experience", "AI-Powered Process Automation", "AI-Driven Business Intelligence", "Comprehensive Tech Solutions with AI"].includes(s.title)),
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
    <div className="bg-background min-h-screen">
      <div className="container mx-auto container-padding section-padding max-w-7xl">
        <ServicesHeader />
        
        <div 
          className={`transition-all duration-700 mb-12 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0 translate-y-10'}`}
        >
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="w-full mb-8 overflow-x-auto">
              <TabsList className="glass-card p-2 backdrop-blur-md shadow-xl rounded-xl w-full flex min-w-max">
                <TabsTrigger 
                  value="all" 
                  className="flex-1 px-4 py-3 text-sm md:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all duration-300"
                >
                  All Services
                </TabsTrigger>
                {Object.keys(serviceCategories).map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="flex-1 px-4 py-3 text-sm md:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg whitespace-nowrap transition-all duration-300"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-8">
              <ServiceList services={services} />
            </TabsContent>
            
            {Object.entries(serviceCategories).map(([category, categoryServices]) => (
              <TabsContent key={category} value={category} className="mt-8">
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
