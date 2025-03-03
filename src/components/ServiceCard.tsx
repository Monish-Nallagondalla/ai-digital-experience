
import { ReactNode, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: "orange" | "blue" | "green";
  index: number;
  isVisible: boolean;
}

const ServiceCard = ({ icon, title, description, color, index, isVisible }: ServiceCardProps) => {
  const colorMap = {
    orange: "neon-orange",
    blue: "neon-blue",
    green: "neon-green"
  };
  
  const cardRef = useRef<HTMLDivElement>(null);
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const neonColor = colorMap[color];
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Enhanced magnetic pull effect (max 35px movement - increased from 25px)
    const strength = 35;
    const magneticX = (x / rect.width) * strength;
    const magneticY = (y / rect.height) * strength;
    
    setMagneticPosition({ x: magneticX, y: magneticY });
  };

  const handleMouseLeave = () => {
    setMagneticPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div 
      ref={cardRef}
      className={cn(
        "glass-card p-8 rounded-xl transition-all duration-500",
        `hover:border-${neonColor}/30`,
        "hover:translate-y-[-5px]",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        transform: isHovered ? `translate3d(${magneticPosition.x}px, ${magneticPosition.y}px, 0) scale(1.02)` : 'translate3d(0, 0, 0)',
        transformStyle: "preserve-3d", // Added for 3D effect
        perspective: "1000px", // Added for 3D effect
        boxShadow: isHovered ? `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(${color === 'orange' ? '255, 95, 31' : color === 'blue' ? '0, 255, 255' : '0, 255, 127'}, 0.3)` : ''
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cn(
        "p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4", 
        `bg-${neonColor}/10 group-hover:bg-${neonColor}/25 transition-all duration-300`
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-5">{description}</p>
      <Link 
        to="/contact" 
        className={cn(
          "magnetic-button-enhanced inline-flex items-center transition-colors", 
          `text-${neonColor}`,
          `hover:text-${neonColor}`
        )}
        style={{
          transform: isHovered ? `translateZ(20px)` : 'translateZ(0px)',
          transition: 'transform 0.3s ease-out'
        }}
      >
        Learn more <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;
