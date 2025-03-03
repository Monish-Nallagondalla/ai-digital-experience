
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
    <div className="glass-card rounded-xl overflow-hidden flex flex-col h-full">
      <div className="p-6 pb-2">
        <ServiceCard
          title={service.title}
          description={service.description}
          icon={service.icon}
          color={service.color}
          index={index}
          isVisible={true}
        />
      </div>
      <div className="p-6 pt-0 flex-grow">
        <ServiceExamples examples={service.examples} />
      </div>
    </div>
  );
};

export default ServiceItem;
