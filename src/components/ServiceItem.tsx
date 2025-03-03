
import React from 'react';
import ServiceCard from './ServiceCard';
import ServiceExamples from './ServiceExamples';
import { Service } from '@/data/services';

interface ServiceItemProps {
  service: Service;
  index: number;
}

const ServiceItem = ({ service, index }: ServiceItemProps) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden flex flex-col h-full shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300">
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
