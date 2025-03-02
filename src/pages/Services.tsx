
import React from 'react';
import ServicesHeader from '../components/ServicesHeader';
import ServiceList from '../components/ServiceList';
import { services } from '../data/services';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <ServicesHeader />
      <ServiceList services={services} />
    </div>
  );
};

export default Services;
