
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Building, Clock, Users, CheckCircle, Sparkles } from 'lucide-react';
import TeamMember from '../components/TeamMember';

// Sample team members data
const teamMembers = [
  {
    name: "Dr. Alex Chen",
    position: "CEO & Chief AI Scientist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    bio: "Former AI Research Lead at Google with 15+ years of experience in machine learning and AI systems. PhD in Computer Science from Stanford University.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "alex@applyai.today"
  },
  {
    name: "Sarah Johnson",
    position: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    bio: "Expert in scalable AI infrastructure with previous leadership roles at Microsoft and Amazon. Master's in Computer Engineering from MIT.",
    linkedin: "https://linkedin.com",
    email: "sarah@applyai.today"
  },
  {
    name: "Michael Rodriguez",
    position: "Lead ML Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    bio: "Specialist in neural networks and deep learning models. Previously developed AI solutions at Tesla and NVIDIA. PhD in AI from UC Berkeley.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "michael@applyai.today"
  },
  {
    name: "Emily Zhang",
    position: "AI Product Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=922&q=80",
    bio: "Former Product Manager at Apple focusing on AI integrations. MBA from Harvard Business School with a focus on technology innovation.",
    linkedin: "https://linkedin.com",
    email: "emily@applyai.today"
  },
  {
    name: "David Williams",
    position: "Head of AI Ethics",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    bio: "Leading our efforts in responsible AI development and ethical considerations. Previously worked with the IEEE AI Ethics Initiative and OpenAI.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "david@applyai.today"
  },
  {
    name: "Sophia Lee",
    position: "AI Solutions Architect",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    bio: "Expert in designing custom AI implementations for enterprise clients. Previously led architecture teams at IBM Watson and Palantir.",
    linkedin: "https://linkedin.com",
    email: "sophia@applyai.today"
  }
];

const About = () => {
  const [isVisible, setIsVisible] = useState({
    header: false,
    about: false,
    timeline: false,
    stats: false,
    values: false,
    team: false,
    cta: false
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.current) {
            setIsVisible((prev) => ({ ...prev, header: true }));
          } else if (entry.target === aboutRef.current) {
            setIsVisible((prev) => ({ ...prev, about: true }));
          } else if (entry.target === timelineRef.current) {
            setIsVisible((prev) => ({ ...prev, timeline: true }));
          } else if (entry.target === statsRef.current) {
            setIsVisible((prev) => ({ ...prev, stats: true }));
          } else if (entry.target === valuesRef.current) {
            setIsVisible((prev) => ({ ...prev, values: true }));
          } else if (entry.target === teamRef.current) {
            setIsVisible((prev) => ({ ...prev, team: true }));
          } else if (entry.target === ctaRef.current) {
            setIsVisible((prev) => ({ ...prev, cta: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (headerRef.current) observer.observe(headerRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (timelineRef.current) observer.observe(timelineRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);
    if (teamRef.current) observer.observe(teamRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    // Background effect
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-black min-h-screen">
      {/* Enhanced Grid Background with improved visibility */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-40"></div>
      
      {/* Enhanced Gradient Overlay with smooth transitions */}
      <div className="absolute inset-0 bg-gradient-radial from-black/70 via-black/90 to-black opacity-95"></div>
      
      {/* Interactive Floating Elements */}
      <div 
        className="absolute w-96 h-96 rounded-full bg-neon-orange/10 blur-3xl"
        style={{ 
          top: `calc(20% + ${mousePosition.y * 40}px)`, 
          right: `calc(20% + ${mousePosition.x * -40}px)`,
          transition: 'top 0.3s ease-out, right 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl" 
        style={{ 
          bottom: `calc(30% + ${mousePosition.y * -40}px)`, 
          left: `calc(25% + ${mousePosition.x * 40}px)`,
          transition: 'bottom 0.3s ease-out, left 0.3s ease-out'
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Page Header */}
        <div 
          ref={headerRef}
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-6">
            <p className="text-sm font-medium text-gray-300">Our Story and Vision</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 shimmer-text bg-gradient-to-r from-neon-orange via-neon-blue to-neon-green py-2">
            About ApplyAI.today
          </h1>
          <p className="text-xl text-muted-foreground">
            We're pioneering AI innovations that transform businesses and redefine what's possible.
          </p>
        </div>
        
        {/* About Us Section */}
        <div 
          ref={aboutRef}
          className={`max-w-6xl mx-auto mb-24 glass-card p-8 rounded-xl backdrop-blur-md transition-all duration-700 border border-white/20 ${
            isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                At ApplyAI.today, we're on a mission to make cutting-edge artificial intelligence accessible, practical, and transformative for businesses of all sizes. We believe that AI should be a force multiplier for human potential, not a replacement for human ingenuity.
              </p>
              <p className="text-gray-300">
                Founded in 2019 by a team of AI specialists from leading tech companies and research institutions, we've grown into a global team of over 100 AI experts, developers, data scientists, and business strategists united by a common vision.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <p className="text-gray-300 mb-4">
                We combine deep technical expertise with a practical business mindset. Every AI solution we create is designed with real-world applications in mind, focused on delivering measurable results that impact your bottom line.
              </p>
              <p className="text-gray-300">
                What sets us apart is our commitment to ethical AI development. We believe that artificial intelligence should be built responsibly, with careful consideration of privacy, bias, transparency, and human oversight.
              </p>
            </div>
          </div>
        </div>
        
        {/* Key Stats */}
        <div 
          ref={statsRef}
          className={`max-w-6xl mx-auto mb-24 transition-all duration-700 ${
            isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/20 text-center">
              <div className="text-4xl font-bold mb-2 text-neon-orange">100+</div>
              <div className="text-gray-300">AI Specialists</div>
            </div>
            <div className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/20 text-center">
              <div className="text-4xl font-bold mb-2 text-neon-blue">250+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/20 text-center">
              <div className="text-4xl font-bold mb-2 text-neon-green">15+</div>
              <div className="text-gray-300">Industries Served</div>
            </div>
            <div className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/20 text-center">
              <div className="text-4xl font-bold mb-2 text-neon-orange">4 Years</div>
              <div className="text-gray-300">Of Innovation</div>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div 
          ref={valuesRef}
          className={`max-w-6xl mx-auto mb-24 transition-all duration-700 ${
            isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/20">
              <div className="bg-neon-orange/15 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Sparkles className="text-neon-orange h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-gray-300">We push the boundaries of what AI can achieve, constantly exploring new approaches and technologies.</p>
            </div>
            <div className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/20">
              <div className="bg-neon-blue/15 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-neon-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Human-Centered</h3>
              <p className="text-gray-300">We design AI that augments human capabilities, creating partnerships between people and technology.</p>
            </div>
            <div className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/20">
              <div className="bg-neon-green/15 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle className="text-neon-green h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ethical Excellence</h3>
              <p className="text-gray-300">We believe in building AI responsibly, with fairness, transparency, and privacy as core principles.</p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div 
          ref={teamRef}
          className={`max-w-6xl mx-auto mb-24 transition-all duration-700 ${
            isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Meet Our Expert Team</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our diverse team of AI specialists combines deep technical expertise with industry experience to deliver innovative solutions that drive real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
                bio={member.bio}
                linkedin={member.linkedin}
                twitter={member.twitter}
                email={member.email}
                index={index}
                isVisible={isVisible.team}
              />
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="glass-card p-10 rounded-2xl text-center border border-white/10 backdrop-blur-md shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Partner with ApplyAI.today and discover how our cutting-edge AI solutions can drive innovation, efficiency, and growth for your organization.
            </p>
            <Link to="/contact" className="neon-button-orange px-8 py-3 shadow-neon-orange">
              <span className="relative z-10 flex items-center justify-center">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
