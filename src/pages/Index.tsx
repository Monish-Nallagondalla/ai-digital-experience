
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronRight, MessageSquare, Star, Users } from "lucide-react";
import Hero from "../components/Hero";

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    clients: false,
    services: false,
    testimonials: false,
    callToAction: false
  });
  
  const clientsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
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
          if (target === clientsRef.current) {
            setIsVisible((prev) => ({ ...prev, clients: true }));
          } else if (target === servicesRef.current) {
            setIsVisible((prev) => ({ ...prev, services: true }));
          } else if (target === testimonialsRef.current) {
            setIsVisible((prev) => ({ ...prev, testimonials: true }));
          } else if (target === ctaRef.current) {
            setIsVisible((prev) => ({ ...prev, callToAction: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (clientsRef.current) observer.observe(clientsRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Mock client logos - in a real app these would be images
  const clients = ["Tesla", "Amazon", "Google", "Microsoft", "Airbnb", "Uber"];
  
  // Featured services
  const featuredServices = [
    {
      title: "AI Consultation & Strategy",
      description: "Strategic guidance on implementing AI solutions to achieve your business goals",
      icon: <Check className="h-6 w-6 text-neon-orange" />,
      color: "orange"
    },
    {
      title: "AI Agent Development",
      description: "Custom AI agents designed to automate tasks and enhance productivity",
      icon: <Users className="h-6 w-6 text-neon-blue" />,
      color: "blue"
    },
    {
      title: "Predictive Analytics",
      description: "Advanced data analysis to forecast trends and make data-driven decisions",
      icon: <Star className="h-6 w-6 text-neon-green" />,
      color: "green"
    },
    {
      title: "AI-Powered Customer Support",
      description: "Intelligent solutions to enhance customer experiences and satisfaction",
      icon: <MessageSquare className="h-6 w-6 text-neon-orange" />,
      color: "orange"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "ApplyAi.today transformed our customer service operations. Their AI solution reduced response times by 60% and improved customer satisfaction scores dramatically.",
      author: "Jane Smith",
      position: "CTO, TechCorp Inc."
    },
    {
      quote: "The predictive analytics system developed by ApplyAi.today helped us anticipate market trends with remarkable accuracy, giving us a significant competitive advantage.",
      author: "Michael Johnson",
      position: "CEO, Innovate Solutions"
    },
    {
      quote: "Working with ApplyAi.today was seamless. Their team's expertise in AI integration helped us modernize our legacy systems without disrupting our operations.",
      author: "Sarah Williams",
      position: "COO, Global Enterprises"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Trusted By Section */}
      <section 
        ref={clientsRef}
        className="py-20 bg-black grid-bg"
      >
        <div className="container mx-auto px-4">
          <div 
            className={`text-center mb-12 transition-all duration-700 ${isVisible.clients ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-2xl font-semibold text-white mb-3">Trusted by Industry Leaders</h2>
            <p className="text-gray-400">Empowering businesses across various sectors with intelligent AI solutions</p>
          </div>
          
          <div 
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-center transition-all duration-700 ${isVisible.clients ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
          >
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="glass-card px-6 py-4 rounded-lg flex items-center justify-center w-full h-20"
                style={{ transitionDelay: `${200 + (index * 100)}ms` }}
              >
                <span className="text-xl font-semibold text-gray-300">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section 
        ref={servicesRef}
        className="py-24 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container mx-auto px-4">
          <div 
            className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Innovative AI Solutions for Your Business</h2>
            <p className="text-gray-400 text-lg">
              We offer a comprehensive suite of AI services designed to address your specific business challenges and unlock new opportunities for growth.
            </p>
          </div>
          
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 transition-all duration-700 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
          >
            {featuredServices.map((service, index) => (
              <div 
                key={index} 
                className={`glass-card p-8 rounded-xl hover:border-neon-${service.color}/30 transition-all duration-300 hover:translate-y-[-5px] flex flex-col h-full`}
                style={{ transitionDelay: `${200 + (index * 100)}ms` }}
              >
                <div className={`bg-neon-${service.color}/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-5">{service.description}</p>
                <Link 
                  to="/services" 
                  className={`inline-flex items-center text-neon-${service.color} hover:text-neon-${service.color} transition-colors mt-auto`}
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div 
            className={`text-center transition-all duration-700 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "600ms" }}
          >
            <Link to="/services" className="neon-button-green px-8 py-3">
              <span className="relative z-10 flex items-center justify-center">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className="py-24 bg-black grid-bg"
      >
        <div className="container mx-auto px-4">
          <div 
            className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 text-lg">
              Discover how our AI solutions have helped businesses achieve their goals
            </p>
          </div>
          
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-xl relative flex flex-col h-full"
                style={{ transitionDelay: `${200 + (index * 100)}ms` }}
              >
                <div className="absolute -top-4 -left-2 text-5xl text-neon-orange opacity-20">"</div>
                <div className="mb-8 relative z-10">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-neon-orange fill-neon-orange" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">{testimonial.quote}</p>
                </div>
                <div className="border-t border-gray-700 pt-4 mt-auto">
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call To Action Section */}
      <section 
        ref={ctaRef}
        className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-glow-conic filter blur-3xl opacity-20 animate-gradient-x"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className={`max-w-4xl mx-auto glass-card p-10 md:p-16 rounded-2xl text-center border border-white/10 transition-all duration-700 ${isVisible.callToAction ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Schedule a consultation with our AI experts today and discover how our solutions can drive innovation and growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link to="/contact" className="neon-button-orange px-8 py-3">
                <span className="relative z-10 flex items-center justify-center">
                  Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
              <Link to="/services" className="neon-button-blue px-8 py-3">
                <span className="relative z-10 flex items-center justify-center">
                  Explore Our Services
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
