import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Cpu, Zap, Sparkles, Target, BarChart3 } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Apply AI, Amplify Results.Today";
  const [typingComplete, setTypingComplete] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTypingComplete(true);
    }
  }, [typedText, fullText]);
  

  return (
    <div className="relative overflow-hidden hero-section min-h-screen flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-xl floating-element"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-secondary/20 rounded-full blur-xl floating-element" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/10 rounded-full blur-2xl floating-element" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto container-padding py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 mb-8 glass-card rounded-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <p className="text-sm font-medium text-foreground">
              <span className="text-primary">Next-Generation</span> AI Solutions for Business Excellence
            </p>
          </div>
          
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="gradient-text mb-4">
              Transform Your Business
            </div>
            <div className="text-foreground">
              with Intelligent AI
            </div>
          </h1>
          
          <div 
            className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "400ms" }}
          >
            <h2 className="text-2xl md:text-3xl text-muted-foreground relative">
              <span className="mr-1">{typedText}</span>
              <span className={`inline-block w-1 h-8 bg-primary pulse-glow ${typingComplete ? 'opacity-0' : 'opacity-100'}`}></span>
            </h2>
          </div>
          
          <p 
            className={`text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "600ms" }}
          >
            Unlock the full potential of artificial intelligence for your business. From intelligent automation to predictive analytics, we deliver cutting-edge AI solutions that drive innovation, efficiency, and sustainable growth.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "800ms" }}
          >
            <Link 
              to="/contact" 
              className="btn-primary px-8 py-4 text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                Start Your AI Journey <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>
            
            <Link 
              to="/services" 
              className="btn-ghost px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                Explore Solutions
              </span>
            </Link>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: "1000ms" }}
        >
          <div className="glass-card p-8 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
              <Brain className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">AI Strategy & Consulting</h3>
            <p className="text-muted-foreground leading-relaxed">Develop comprehensive AI roadmaps tailored to your business objectives and market opportunities.</p>
          </div>
          
          <div className="glass-card p-8 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-all duration-300">
              <Cpu className="text-secondary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Custom AI Development</h3>
            <p className="text-muted-foreground leading-relaxed">Build intelligent solutions that automate processes and enhance decision-making capabilities.</p>
          </div>
          
          <div className="glass-card p-8 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300">
              <BarChart3 className="text-accent h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Predictive Analytics</h3>
            <p className="text-muted-foreground leading-relaxed">Transform data into actionable insights with advanced machine learning and analytics.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
