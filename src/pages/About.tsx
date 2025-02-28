
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">About Our Agency</h1>
      
      <div className="max-w-4xl mx-auto glass-card p-8 rounded-xl mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-300 mb-6">
          At our AI agency, we're dedicated to transforming businesses through cutting-edge artificial intelligence solutions. 
          We bridge the gap between complex technology and practical business applications, making AI accessible and beneficial for organizations of all sizes.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-300">
          We envision a future where AI enhances human potential rather than replacing it. Our goal is to create intelligent systems that augment human capabilities,
          automate routine tasks, and provide insights that drive better decision-making across industries.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Our Expertise</h3>
          <p className="text-gray-400">
            With specialists in machine learning, natural language processing, computer vision, and data science, our team brings diverse expertise to solve complex problems.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
          <p className="text-gray-400">
            We follow a collaborative, human-centered approach to AI development, ensuring our solutions align with your business goals and user needs.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Innovation</h3>
          <p className="text-gray-400">
            We stay at the forefront of AI research, constantly integrating the latest advancements into practical applications for our clients.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Ethical AI</h3>
          <p className="text-gray-400">
            We're committed to developing responsible AI systems that are fair, transparent, secure, and respect user privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
