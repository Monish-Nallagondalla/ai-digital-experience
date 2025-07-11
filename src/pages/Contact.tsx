import React, { useRef, useState } from 'react';
import ContactForm from '../components/ContactForm';
import PageBadge from '../components/PageBadge';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const infoCardRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const [infoCardPosition, setInfoCardPosition] = useState({ x: 0, y: 0 });
  const [formCardPosition, setFormCardPosition] = useState({ x: 0, y: 0 });
  const [isInfoCardHovered, setIsInfoCardHovered] = useState(false);
  const [isFormCardHovered, setIsFormCardHovered] = useState(false);
  
  const handleInfoCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!infoCardRef.current) return;
    
    const rect = infoCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const strength = 10;
    const magneticX = (x / rect.width) * strength;
    const magneticY = (y / rect.height) * strength;
    
    setInfoCardPosition({ x: magneticX, y: magneticY });
  };
  
  const handleFormCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!formCardRef.current) return;
    
    const rect = formCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const strength = 10;
    const magneticX = (x / rect.width) * strength;
    const magneticY = (y / rect.height) * strength;
    
    setFormCardPosition({ x: magneticX, y: magneticY });
  };
  
  const handleInfoCardMouseLeave = () => {
    setInfoCardPosition({ x: 0, y: 0 });
    setIsInfoCardHovered(false);
  };

  const handleFormCardMouseLeave = () => {
    setFormCardPosition({ x: 0, y: 0 });
    setIsFormCardHovered(false);
  };

  return (
    <div className="bg-black min-h-screen relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/20 to-transparent"></div>
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-orange-500/10 filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-orange-500/10 filter blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-4 relative z-10">
        <PageBadge text="Reach Out To Us" icon="check" />
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent py-2">
            Contact Us
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div 
              ref={infoCardRef}
              className="bg-black/40 backdrop-blur-md border border-orange-400/20 p-8 rounded-xl hover:border-orange-400/40 transition-all duration-300"
              style={{ 
                transform: isInfoCardHovered ? `translate3d(${infoCardPosition.x}px, ${infoCardPosition.y}px, 0)` : 'translate3d(0, 0, 0)',
                transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease',
                boxShadow: isInfoCardHovered ? '0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 95, 31, 0.2)' : ''
              }}
              onMouseMove={handleInfoCardMouseMove}
              onMouseEnter={() => setIsInfoCardHovered(true)}
              onMouseLeave={handleInfoCardMouseLeave}
            >
              <h2 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Have a question about how we can transform your business with AI? We're here to help.
                Fill out the form and our team will get back to you shortly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-500/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <p className="text-gray-400">+91 80-4123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="text-gray-400">info@applyai.today</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500/20 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Address</h3>
                    <p className="text-gray-400">42, Whitefield Main Road, EPIP Zone, Whitefield, Bangalore, Karnataka 560066, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={formCardRef}
            className="bg-black/40 backdrop-blur-md border border-orange-400/20 rounded-xl overflow-hidden hover:border-orange-400/40 transition-all duration-300"
            style={{ 
              transform: isFormCardHovered ? `translate3d(${formCardPosition.x}px, ${formCardPosition.y}px, 0)` : 'translate3d(0, 0, 0)',
              transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease',
              boxShadow: isFormCardHovered ? '0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 95, 31, 0.2)' : ''
            }}
            onMouseMove={handleFormCardMouseMove}
            onMouseEnter={() => setIsFormCardHovered(true)}
            onMouseLeave={handleFormCardMouseLeave}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
