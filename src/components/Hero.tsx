
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Cpu, Zap } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Empowering Businesses with AI-Driven Solutions";
  const [typingComplete, setTypingComplete] = useState(false);

  // Animation for fade-in
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing animation
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
    <div className="relative overflow-hidden bg-black text-white h-screen-minus-nav grid-bg">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-orange/5 animate-float blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-neon-blue/5 animate-float blur-3xl" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-neon-green/5 animate-float blur-3xl" style={{ animationDelay: "4s" }}></div>
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className={`inline-block px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="text-sm font-medium text-gray-300">
              <span className="text-neon-orange">Next-Generation</span> AI Solutions for Business Growth
            </p>
          </div>
          
          {/* Main Heading */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="block shimmer-text mb-2">
              Transforming Industries
            </span>
            <span className="block">
              Through <span className="text-neon-blue text-glow">Artificial Intelligence</span>
            </span>
          </h1>
          
          {/* Animated Tagline */}
          <div 
            className={`h-12 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "400ms" }}
          >
            <h2 className="text-xl md:text-2xl text-gray-300 relative">
              <span className="mr-1">{typedText}</span>
              <span className={`inline-block w-0.5 h-5 bg-neon-orange animate-pulse-glow ${typingComplete ? 'opacity-0' : 'opacity-100'}`}></span>
            </h2>
          </div>
          
          {/* Description */}
          <p 
            className={`text-gray-400 text-lg max-w-2xl mx-auto mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "600ms" }}
          >
            We leverage cutting-edge AI technologies to create innovative solutions that help businesses automate processes, gain valuable insights, and achieve digital transformation.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "800ms" }}
          >
            <Link to="/contact" className="neon-button-orange w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
            <Link to="/services" className="neon-button-blue w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center">
                Explore Our Services
              </span>
            </Link>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: "1000ms" }}
        >
          {/* Card 1 */}
          <div className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/10 hover:border-neon-orange/30 transition-all duration-300 hover:translate-y-[-5px]">
            <div className="bg-neon-orange/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Brain className="text-neon-orange" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Strategy</h3>
            <p className="text-gray-400">Develop a comprehensive AI roadmap tailored to your business needs and goals.</p>
          </div>
          
          {/* Card 2 */}
          <div className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/10 hover:border-neon-blue/30 transition-all duration-300 hover:translate-y-[-5px]">
            <div className="bg-neon-blue/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Cpu className="text-neon-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Development</h3>
            <p className="text-gray-400">Create custom AI solutions that automate processes and drive efficiency.</p>
          </div>
          
          {/* Card 3 */}
          <div className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/10 hover:border-neon-green/30 transition-all duration-300 hover:translate-y-[-5px]">
            <div className="bg-neon-green/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Zap className="text-neon-green" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
            <p className="text-gray-400">Seamlessly integrate AI solutions into your existing technology infrastructure.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
