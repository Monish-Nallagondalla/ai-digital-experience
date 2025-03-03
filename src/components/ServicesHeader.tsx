
import React from 'react';
import { Sparkles, Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesHeader = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
        <Sparkles className="w-4 h-4 text-neon-orange mr-2" />
        <p className="text-sm font-medium text-gray-300">Enterprise-Grade AI Solutions</p>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-6 shimmer-text bg-gradient-to-r from-neon-orange via-neon-blue to-neon-green">Our AI Services</h1>
      
      <div className="mx-auto max-w-3xl relative">
        <p className="text-xl text-muted-foreground mb-8">
          We offer a comprehensive range of AI services designed to help businesses like yours leverage the power of artificial intelligence. Explore our categories below to find the right solution for your needs.
        </p>
        
        <Link 
          to="/contact" 
          className="magnetic-button-enhanced neon-button-orange px-8 py-3 shadow-neon-orange inline-flex items-center"
        >
          <span className="relative z-10 flex items-center justify-center font-medium">
            Get a Custom AI Solution <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServicesHeader;
