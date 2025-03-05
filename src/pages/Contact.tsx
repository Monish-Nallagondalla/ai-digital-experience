
import React, { useRef, useState } from 'react';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const infoCardRef = useRef<HTMLDivElement>(null);
  const [infoCardPosition, setInfoCardPosition] = useState({ x: 0, y: 0 });
  const [isInfoCardHovered, setIsInfoCardHovered] = useState(false);
  
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
  
  const handleInfoCardMouseLeave = () => {
    setInfoCardPosition({ x: 0, y: 0 });
    setIsInfoCardHovered(false);
  };

  return (
    <div className="container mx-auto px-4 py-12 relative corner-glow">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      
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
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-gray-400">+91 80-4123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-gray-400">info@applyai.today</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Address</h3>
                  <p className="text-gray-400">42, Whitefield Main Road, EPIP Zone, Whitefield, Bangalore, Karnataka 560066, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="magnetic-client-block glass-card rounded-xl overflow-hidden shadow-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
