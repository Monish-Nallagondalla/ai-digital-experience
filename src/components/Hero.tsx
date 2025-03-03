
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Cpu, Zap } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Apply AI, Amplify Results.Today";
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
    <div className="relative overflow-hidden bg-black text-white min-h-screen flex items-center justify-center">
      {/* Clean Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-black via-black/90 to-black opacity-90"></div>
      
      {/* Clean Grid Pattern with better visibility */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      {/* Simple Accent Orbs */}
      <div className="absolute w-64 h-64 rounded-full bg-neon-orange/10 blur-3xl top-1/4 left-1/4"></div>
      <div className="absolute w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl bottom-1/3 right-1/4"></div>
      <div className="absolute w-72 h-72 rounded-full bg-neon-green/10 blur-3xl top-1/2 right-1/3"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className={`inline-block px-4 py-1.5 mb-6 md:mb-8 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="text-sm font-medium text-gray-300">
              <span className="text-neon-orange">Next-Generation</span> AI Solutions for Business Growth
            </p>
          </div>
          
          {/* Main Heading - No 3D effect */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="block shimmer-text mb-4 md:mb-6 bg-gradient-to-r from-neon-orange via-neon-blue to-neon-green bg-clip-text text-transparent">
              Transforming Industries
            </div>
            <div className="block">
              Through <span className="text-neon-blue text-glow">Artificial Intelligence</span>
            </div>
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
          
          {/* Enhanced Description */}
          <p 
            className={`text-gray-400 text-lg max-w-2xl mx-auto mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "600ms" }}
          >
            We can help your business unlock the full potential of AI. From intelligent automation to predictive analytics, we deliver cutting-edge AI solutions that transform how you operate, innovate, and compete in today's market.
          </p>
          
          {/* CTA Buttons - No magnetic effect */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "800ms" }}
          >
            <Link 
              to="/contact" 
              className="neon-button-orange w-full sm:w-auto px-8 py-3 shadow-neon-orange"
            >
              <span className="relative z-10 flex items-center justify-center">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
            <Link 
              to="/services" 
              className="neon-button-blue w-full sm:w-auto px-8 py-3 shadow-neon-blue"
            >
              <span className="relative z-10 flex items-center justify-center">
                Explore Our Solutions
              </span>
            </Link>
          </div>
        </div>
        
        {/* Feature Cards - simple hover effect, no 3D */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-20 md:mt-28 max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: "1000ms" }}
        >
          {/* Card 1 */}
          <div className="glass-card p-6 md:p-8 rounded-xl backdrop-blur-md border border-white/20 hover:border-neon-orange/40 transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col group">
            <div className="bg-neon-orange/15 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-neon-orange/25 transition-all duration-300">
              <Brain className="text-neon-orange h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Strategy</h3>
            <p className="text-gray-400">We can develop a comprehensive AI roadmap tailored to your specific business challenges and growth objectives.</p>
          </div>
          
          {/* Card 2 */}
          <div className="glass-card p-6 md:p-8 rounded-xl backdrop-blur-md border border-white/20 hover:border-neon-blue/40 transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col group">
            <div className="bg-neon-blue/15 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-neon-blue/25 transition-all duration-300">
              <Cpu className="text-neon-blue h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Development</h3>
            <p className="text-gray-400">We can create custom AI solutions that automate complex processes, enhance decision-making, and drive measurable efficiency gains.</p>
          </div>
          
          {/* Card 3 */}
          <div className="glass-card p-6 md:p-8 rounded-xl backdrop-blur-md border border-white/20 hover:border-neon-green/40 transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col group">
            <div className="bg-neon-green/15 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-neon-green/25 transition-all duration-300">
              <Zap className="text-neon-green h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Integration</h3>
            <p className="text-gray-400">We can seamlessly integrate AI solutions into your existing technology infrastructure with minimal disruption and maximum impact.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
