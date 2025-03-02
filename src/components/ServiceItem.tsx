
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
    <div className="flex flex-col h-full">
      <ServiceCard
        title={service.title}
        description={service.description}
        icon={service.icon}
        color={service.color}
        index={index}
        isVisible={true}
      />
      <ServiceExamples examples={service.examples} />
    </div>
  );
};

export default ServiceItem;
