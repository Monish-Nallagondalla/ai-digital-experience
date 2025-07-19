
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronRight, MessageSquare, Star, Users, Zap, Target, Lightbulb } from "lucide-react";
import Hero from "../components/Hero";

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    clients: false,
    services: false,
    testimonials: false,
    callToAction: false
  });
  
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
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

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const clients = ["OpenAI", "NVIDIA", "Microsoft", "Google", "Meta", "Amazon"];
  
  const featuredServices = [
    {
      title: "AI Strategy & Implementation",
      description: "Develop comprehensive AI roadmaps aligned with your business goals. We identify high-impact use cases and create implementation strategies that deliver measurable ROI.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Machine Learning Solutions",
      description: "Build intelligent systems that learn and adapt. From predictive models to recommendation engines, we create ML solutions that drive decision-making and automation.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Data Science & Analytics",
      description: "Transform raw data into strategic insights. Our data scientists uncover patterns, trends, and opportunities hidden in your data to fuel business growth.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "AI-Powered Automation",
      description: "Streamline operations with intelligent automation. We implement AI solutions that reduce manual work, improve accuracy, and scale your business capabilities.",
      icon: <MessageSquare className="h-6 w-6" />,
    }
  ];

  const testimonials = [
    {
      quote: "ApplyAI.today delivered a machine learning solution that increased our sales forecasting accuracy by 85%. Their team understood our complex requirements and delivered results that exceeded expectations.",
      author: "Sarah Chen",
      position: "VP of Operations, TechVenture Inc.",
      rating: 5
    },
    {
      quote: "The AI-powered automation system reduced our data processing time from 8 hours to 15 minutes. This efficiency gain allowed us to reallocate resources to strategic initiatives and accelerate growth.",
      author: "Michael Rodriguez",
      position: "CTO, DataFlow Solutions",
      rating: 5
    },
    {
      quote: "Their expertise in AI strategy helped us identify new revenue opportunities worth $2.3M annually. The comprehensive roadmap they created guides our digital transformation journey.",
      author: "Emma Thompson",
      position: "CEO, Innovation Labs",
      rating: 5
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Trusted Partners Section */}
      <section 
        ref={clientsRef}
        className="section-padding bg-background"
      >
        <div className="container mx-auto container-padding">
          <div 
            className={`text-center mb-12 transition-all duration-700 ${isVisible.clients ? 'opacity-100 animate-fade-in' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Trusted by AI-Forward Organizations</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join leading companies leveraging our expertise to build intelligent systems and drive digital transformation.
            </p>
          </div>
          
          <div 
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center items-center transition-all duration-700 ${isVisible.clients ? 'opacity-100 animate-slide-up' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
          >
            {clients.map((client, index) => (
              <div 
                key={index}
                className="glass-card px-4 md:px-6 py-4 rounded-xl flex items-center justify-center w-full h-16 md:h-20 hover:bg-background/90 transition-all duration-300 hover:shadow-lg group hover:-translate-y-1"
                style={{ transitionDelay: `${200 + (index * 100)}ms` }}
              >
                <span className="text-lg md:text-xl font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section 
        ref={servicesRef}
        className="section-padding bg-muted/30"
      >
        <div className="container mx-auto container-padding">
          <div 
            className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible.services ? 'opacity-100 animate-fade-in' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              <span className="gradient-text">AI & Data Science</span> Solutions That Drive Results
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto text-balance">
              From machine learning models to intelligent automation, we create AI solutions that solve complex business challenges and unlock new opportunities for growth.
            </p>
          </div>
          
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 transition-all duration-700 ${isVisible.services ? 'opacity-100 animate-slide-up' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
          >
            {featuredServices.map((service, index) => (
              <div 
                key={index}
                className="glass-card p-6 md:p-8 rounded-xl hover:bg-background/90 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group hover:shadow-xl"
                style={{ transitionDelay: `${200 + (index * 100)}ms` }}
              >
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-primary hover:text-accent transition-colors mt-auto group/link"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
          
          <div 
            className={`text-center transition-all duration-700 ${isVisible.services ? 'opacity-100 animate-fade-in' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "600ms" }}
          >
            <Link 
              to="/services" 
              className="btn-primary px-8 py-3 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className="section-padding bg-background"
      >
        <div className="container mx-auto container-padding">
          <div 
            className={`max-w-4xl mx-auto text-center mb-12 transition-all duration-700 ${isVisible.testimonials ? 'opacity-100 animate-fade-in' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Real Impact, <span className="gradient-text">Real Results</span></h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto text-balance">
              See how our AI and data science expertise has transformed businesses across industries, delivering quantifiable ROI and competitive advantages.
            </p>
          </div>
          
          <div 
            className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible.testimonials ? 'opacity-100 animate-slide-up' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="relative">
              <div className="relative overflow-hidden glass-card rounded-xl p-8 md:p-12">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`transition-all duration-500 ease-in-out ${
                      index === activeTestimonial 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-full absolute inset-0 p-8 md:p-12'
                    }`}
                  >
                    <div className="flex mb-6 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-foreground text-lg md:text-xl mb-6 leading-relaxed text-center text-balance italic">"{testimonial.quote}"</p>
                    <div className="text-center">
                      <p className="font-semibold text-foreground text-lg md:text-xl">{testimonial.author}</p>
                      <p className="text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-primary w-8' 
                        : 'bg-muted hover:bg-muted-foreground'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section 
        ref={ctaRef}
        className="section-padding bg-muted/30"
      >
        <div className="container mx-auto container-padding">
          <div 
            className={`max-w-5xl mx-auto glass-card p-8 md:p-16 rounded-2xl text-center transition-all duration-700 ${isVisible.callToAction ? 'opacity-100 scale-100 animate-fade-in' : 'opacity-0 scale-95'}`}
          >
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-8">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Ready to <span className="gradient-text">Apply AI</span> to Your Business?</h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-3xl mx-auto text-balance">
              Let's discuss how AI and machine learning can solve your specific challenges. Our team of experts will help you identify opportunities, build solutions, and implement strategies that deliver measurable impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link 
                to="/contact" 
                className="btn-primary px-8 py-4 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  Book Your AI Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
              
              <Link 
                to="/services" 
                className="btn-secondary px-8 py-4 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  Explore Our Solutions
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
