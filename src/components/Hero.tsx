
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Cpu, Zap } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Apply AI, Amplify Results.Today";
  const [typingComplete, setTypingComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });
  
  // CTA button refs for magnetic effect
  const primaryButtonRef = useRef<HTMLAnchorElement>(null);
  const secondaryButtonRef = useRef<HTMLAnchorElement>(null);
  
  // Heading ref for 3D effect
  const headingRef = useRef<HTMLHeadingElement>(null);

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

  // Mouse move effect for floating elements and 3D headings
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      
      // 3D effect for heading
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const moveX = (e.clientX - centerX) / 30;
        const moveY = (e.clientY - centerY) / 30;
        
        headingRef.current.style.transform = `perspective(1000px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Enhanced magnetic button effect
  const handleButtonMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Create a stronger magnetic pull effect (max 35px movement - increased from 25px)
    const strength = 35;
    const magneticX = (x / rect.width) * strength;
    const magneticY = (y / rect.height) * strength;
    
    button.style.transform = `translate(${magneticX}px, ${magneticY}px)`;
  };

  const handleButtonMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = e.currentTarget;
    button.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div className="relative overflow-hidden bg-black text-white min-h-screen grid-bg flex items-center justify-center">
      {/* Enhanced Background Gradient - More vibrant and visible */}
      <div className="absolute inset-0 bg-gradient-radial from-black/60 via-black/80 to-black opacity-90"></div>
      
      {/* Enhanced Grid Pattern - More visible */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      {/* Floating Elements with enhanced glow effect */}
      <div 
        className="absolute w-64 h-64 rounded-full bg-neon-orange/10 blur-3xl animate-float"
        style={{ 
          top: `calc(25% + ${mousePosition.y * 0.02}px)`, 
          left: `calc(25% + ${mousePosition.x * 0.02}px)` 
        }}
      ></div>
      <div 
        className="absolute w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl animate-float" 
        style={{ 
          bottom: `calc(33% + ${mousePosition.y * -0.01}px)`, 
          right: `calc(25% + ${mousePosition.x * -0.01}px)`,
          animationDelay: "-3s"
        }}
      ></div>
      <div 
        className="absolute w-72 h-72 rounded-full bg-neon-green/10 blur-3xl animate-float"
        style={{ 
          top: `calc(50% + ${mousePosition.y * 0.015}px)`, 
          right: `calc(33% + ${mousePosition.x * 0.015}px)`,
          animationDelay: "-1.5s"
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - Improved vertical spacing */}
          <div 
            className={`inline-block px-4 py-1.5 mb-6 md:mb-8 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="text-sm font-medium text-gray-300">
              <span className="text-neon-orange">Next-Generation</span> AI Solutions for Business Growth
            </p>
          </div>
          
          {/* Main Heading - Fixed "g" cutoff and added 3D effect */}
          <h1 
            ref={headingRef}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 transition-all duration-700 transform-gpu ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ 
              transitionDelay: "200ms",
              transformStyle: "preserve-3d",
              perspective: "1000px",
              paddingBottom: "8px", // Added padding to prevent text cutoff
              paddingTop: "8px"     // Added padding to prevent text cutoff
            }}
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
          
          {/* Enhanced Description - Improved "what we can do" perspective & spacing */}
          <p 
            className={`text-gray-400 text-lg max-w-2xl mx-auto mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "600ms" }}
          >
            We can help your business unlock the full potential of AI. From intelligent automation to predictive analytics, we deliver cutting-edge AI solutions that transform how you operate, innovate, and compete in today's market.
          </p>
          
          {/* CTA Buttons with enhanced magnetic effect */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "800ms" }}
          >
            <Link 
              to="/contact" 
              ref={primaryButtonRef}
              className="magnetic-button neon-button-orange w-full sm:w-auto px-8 py-3 shadow-neon-orange"
              onMouseMove={handleButtonMouseMove}
              onMouseLeave={handleButtonMouseLeave}
            >
              <span className="relative z-10 flex items-center justify-center">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
            <Link 
              to="/services" 
              ref={secondaryButtonRef}
              className="magnetic-button neon-button-blue w-full sm:w-auto px-8 py-3 shadow-neon-blue"
              onMouseMove={handleButtonMouseMove}
              onMouseLeave={handleButtonMouseLeave}
            >
              <span className="relative z-10 flex items-center justify-center">
                Explore Our Solutions
              </span>
            </Link>
          </div>
        </div>
        
        {/* Feature Cards with improved spacing, grid visibility and consistent "what we can do" language */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-20 md:mt-28 max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: "1000ms" }}
        >
          {/* Card 1 - Enhanced with 3D hover effect */}
          <div className="glass-card p-6 md:p-8 rounded-xl backdrop-blur-md border border-white/20 hover:border-neon-orange/40 transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col group transform-gpu" 
               style={{ transformStyle: "preserve-3d" }}>
            <div className="bg-neon-orange/15 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-neon-orange/25 transition-all duration-300">
              <Brain className="text-neon-orange h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Strategy</h3>
            <p className="text-gray-400">We can develop a comprehensive AI roadmap tailored to your specific business challenges and growth objectives.</p>
          </div>
          
          {/* Card 2 - Enhanced with 3D hover effect */}
          <div className="glass-card p-6 md:p-8 rounded-xl backdrop-blur-md border border-white/20 hover:border-neon-blue/40 transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col group transform-gpu"
               style={{ transformStyle: "preserve-3d" }}>
            <div className="bg-neon-blue/15 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-neon-blue/25 transition-all duration-300">
              <Cpu className="text-neon-blue h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Development</h3>
            <p className="text-gray-400">We can create custom AI solutions that automate complex processes, enhance decision-making, and drive measurable efficiency gains.</p>
          </div>
          
          {/* Card 3 - Enhanced with 3D hover effect */}
          <div className="glass-card p-6 md:p-8 rounded-xl backdrop-blur-md border border-white/20 hover:border-neon-green/40 transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col group transform-gpu"
               style={{ transformStyle: "preserve-3d" }}>
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
