
import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBadge from './PageBadge';

const ServicesHeader = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Enhanced magnetic button effect with stronger pull
  const handleButtonMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia('(hover: hover)').matches) {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Stronger magnetic pull effect (50px movement for enhanced effect)
      const strength = 50;
      const magneticX = (x / rect.width) * strength;
      const magneticY = (y / rect.height) * strength;
      
      setMagneticPosition({ x: magneticX, y: magneticY });
    }
  };

  const handleButtonMouseLeave = () => {
    setMagneticPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
      <PageBadge text="Enterprise-Grade AI Solutions" icon="sparkles" />
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 shimmer-text bg-gradient-to-r from-neon-orange via-neon-blue to-neon-green py-2">Our AI Services</h1>
      
      <div className="mx-auto max-w-3xl relative">
        <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
          We offer a comprehensive range of AI services designed to help businesses like yours leverage the power of artificial intelligence. Explore our categories below to find the right solution for your needs.
        </p>
        
        <Link 
          to="/contact" 
          ref={buttonRef}
          className="magnetic-button-enhanced neon-button-orange px-4 sm:px-6 py-2 sm:py-2.5 shadow-neon-orange inline-flex items-center"
          onMouseMove={handleButtonMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleButtonMouseLeave}
          style={{ 
            transform: isHovered && window.matchMedia('(hover: hover)').matches ? 
              `translate(${magneticPosition.x}px, ${magneticPosition.y}px)` : 
              'translate(0px, 0px)',
          }}
        >
          <span className="relative z-10 flex items-center justify-center font-medium text-sm sm:text-base">
            Get a Custom AI Solution <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServicesHeader;
