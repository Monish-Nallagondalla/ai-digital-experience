
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { ServiceExample } from '@/data/services';

interface ServiceExamplesProps {
  examples: ServiceExample[];
}

const ServiceExamples = ({ examples }: ServiceExamplesProps) => {
  return (
    <div className="mt-4 space-y-4 flex-grow bg-card rounded-lg p-4 shadow-sm">
      <h3 className="font-medium text-lg">Example Applications:</h3>
      <div className="space-y-4">
        {examples.map((example, index) => (
          <div key={index} className="space-y-1">
            <div className="font-medium text-primary">{example.sector}</div>
            <p className="text-sm text-muted-foreground">{example.description}</p>
            {index < examples.length - 1 && <Separator className="my-2" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceExamples;
