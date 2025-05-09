
import React, { useRef, useState } from 'react';
import ServiceCard from './ServiceCard';
import ServiceExamples from './ServiceExamples';
import { Service } from '@/data/services';

interface ServiceItemProps {
  service: Service;
  index: number;
}

const ServiceItem = ({ service, index }: ServiceItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    
    const rect = itemRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Enhanced consistent magnetic pull effect
    const strength = 20;
    const magneticX = (x / rect.width) * strength;
    const magneticY = (y / rect.height) * strength;
    
    setMagneticPosition({ x: magneticX, y: magneticY });
  };

  const handleMouseLeave = () => {
    setMagneticPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const getColorShadow = () => {
    switch(service.color) {
      case 'orange': return 'rgba(255, 95, 31, 0.35)';
      case 'blue': return 'rgba(0, 255, 255, 0.35)';
      case 'green': return 'rgba(0, 255, 127, 0.35)';
      default: return 'rgba(255, 255, 255, 0.35)';
    }
  };

  return (
    <div 
      ref={itemRef}
      className="glass-card rounded-xl overflow-hidden flex flex-col h-full shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300 magnetic-button-enhanced"
      style={{ 
        transform: isHovered ? `translate3d(${magneticPosition.x}px, ${magneticPosition.y}px, 0)` : 'translate3d(0, 0, 0)',
        transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease',
        boxShadow: isHovered ? `0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px ${getColorShadow()}` : ''
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-6 pb-0">
        <ServiceCard
          title={service.title}
          description={service.description}
          icon={service.icon}
          color={service.color}
          index={index}
          isVisible={true}
        />
      </div>
      <div className="p-6 pt-2 flex-grow">
        <ServiceExamples examples={service.examples} />
      </div>
    </div>
  );
};

export default ServiceItem;
