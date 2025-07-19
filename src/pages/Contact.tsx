
import React from 'react';
import ContactForm from '../components/ContactForm';
import PageBadge from '../components/PageBadge';
import { Phone, Mail, MapPin, Clock, Users, Zap } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      description: "+1 (555) 123-4567",
      detail: "Available Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "hello@applyai.today",
      detail: "We typically respond within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      description: "San Francisco, CA",
      detail: "Remote-first with global presence"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Expert Team",
      description: "Seasoned AI professionals with proven track records"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Rapid Implementation",
      description: "Fast deployment with minimal business disruption"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "24/7 Support",
      description: "Continuous monitoring and support for your AI systems"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <PageBadge text="Let's Build Something Amazing Together" icon="check" />
      
      <div className="container mx-auto container-padding relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text text-balance">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Ready to transform your business with AI? Let's start a conversation about your goals and how we can help you achieve them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 max-w-7xl mx-auto mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">How to Reach Us</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Whether you have questions about our AI solutions or want to discuss your specific needs, we're here to help. Choose the method that works best for you.
              </p>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/30 transition-colors">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <div className="text-primary">
                        {method.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground">{method.title}</h3>
                      <p className="text-foreground font-medium">{method.description}</p>
                      <p className="text-sm text-muted-foreground mt-1">{method.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Why Choose ApplyAI.today?</h3>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg mt-1">
                      <div className="text-primary">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card rounded-xl overflow-hidden">
            <ContactForm />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Quick answers to common questions about our AI solutions and process.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How long does AI implementation take?",
                answer: "Implementation timelines vary based on complexity, but most projects are completed within 4-12 weeks from initial consultation to deployment."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive 24/7 support and monitoring to ensure your AI systems continue performing optimally after deployment."
              },
              {
                question: "What industries do you serve?",
                answer: "We work with businesses across all industries, from startups to Fortune 500 companies, adapting our solutions to each sector's unique needs."
              },
              {
                question: "How do you ensure data security?",
                answer: "We follow enterprise-grade security protocols, including encryption, access controls, and compliance with industry standards like GDPR and SOC 2."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
