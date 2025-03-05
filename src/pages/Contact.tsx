
import React, { useRef, useState } from 'react';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, BadgeCheck } from 'lucide-react';

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
    
    const strength = 15;
    const magneticX = (x / rect.width) * strength;
    const magneticY = (y / rect.height) * strength;
    
    setInfoCardPosition({ x: magneticX, y: magneticY });
  };
  
  const handleFormCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!formCardRef.current) return;
    
    const rect = formCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const strength = 15;
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
    <div className="bg-black min-h-screen relative corner-glow">
      {/* Background elements for consistency with other pages */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-radial from-black/70 via-black/90 to-black opacity-95 pointer-events-none"></div>
      
      {/* Floating orbs for visual consistency */}
      <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-neon-blue/5 filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-neon-orange/5 filter blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 mt-8">
          <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-6 flex items-center">
            <BadgeCheck className="w-4 h-4 mr-2 text-neon-blue" />
            <p className="text-sm font-medium text-gray-300">Reach Out To Us</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 shimmer-text bg-gradient-to-r from-neon-orange via-neon-blue to-neon-green py-2">
            Contact Us
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div 
              ref={infoCardRef}
              className="glass-card p-8 rounded-xl contact-card"
              style={{ 
                transform: isInfoCardHovered ? `translate3d(${infoCardPosition.x}px, ${infoCardPosition.y}px, 0)` : 'translate3d(0, 0, 0)',
                transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease',
                boxShadow: isInfoCardHovered ? '0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 95, 31, 0.2)' : ''
              }}
              onMouseMove={handleInfoCardMouseMove}
              onMouseEnter={() => setIsInfoCardHovered(true)}
              onMouseLeave={handleInfoCardMouseLeave}
            >
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Have a question about how we can transform your business with AI? We're here to help.
                Fill out the form and our team will get back to you shortly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-neon-orange/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-neon-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-gray-400">+91 80-4123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-neon-blue/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-gray-400">info@applyai.today</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-neon-green/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-neon-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Address</h3>
                    <p className="text-gray-400">42, Whitefield Main Road, EPIP Zone, Whitefield, Bangalore, Karnataka 560066, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={formCardRef}
            className="glass-card rounded-xl overflow-hidden shadow-lg"
            style={{ 
              transform: isFormCardHovered ? `translate3d(${formCardPosition.x}px, ${formCardPosition.y}px, 0)` : 'translate3d(0, 0, 0)',
              transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease',
              boxShadow: isFormCardHovered ? '0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 255, 255, 0.2)' : ''
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
