
import React, { useRef, useState } from 'react';

interface BlogCardProps { 
  title: string; 
  date: string; 
  excerpt: string; 
  imageUrl: string;
  category: string;
  index: number;
}

const BlogCard = ({ title, date, excerpt, imageUrl, category, index }: BlogCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Magnetic pull effect
    const strength = 10;
    const magneticX = (x / rect.width) * strength;
    const magneticY = (y / rect.height) * strength;
    
    setMagneticPosition({ x: magneticX, y: magneticY });
  };

  const handleMouseLeave = () => {
    setMagneticPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div 
      ref={cardRef}
      className="glass-card rounded-xl overflow-hidden transition-all duration-300 blog-card"
      style={{ 
        transform: isHovered ? `translate3d(${magneticPosition.x}px, ${magneticPosition.y - 5}px, 0)` : 'translate3d(0, 0, 0)',
        transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease',
        boxShadow: isHovered ? `0 15px 40px rgba(0, 0, 0, 0.2), 0 0 20px rgba(${
          index % 3 === 0 ? '255, 95, 31' : index % 3 === 1 ? '0, 255, 255' : '0, 255, 127'
        }, 0.2)` : ''
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-primary">{category}</span>
          <span className="text-xs text-gray-400">{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{excerpt}</p>
        <button className="text-primary hover:text-primary/80 transition-colors flex items-center text-sm">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business",
      date: "June 15, 2023",
      category: "AI Trends",
      excerpt: "Discover how artificial intelligence is transforming business operations and creating new opportunities across industries.",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Machine Learning Best Practices",
      date: "May 28, 2023",
      category: "Machine Learning",
      excerpt: "Learn the essential best practices for implementing effective machine learning models in your organization.",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Understanding Natural Language Processing",
      date: "May 12, 2023",
      category: "NLP",
      excerpt: "A comprehensive guide to natural language processing and how it's enabling computers to understand human language.",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Ethical Considerations in AI Development",
      date: "April 30, 2023",
      category: "Ethics",
      excerpt: "Exploring the ethical challenges and responsibilities that come with developing advanced AI systems.",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Computer Vision Applications",
      date: "April 15, 2023",
      category: "Computer Vision",
      excerpt: "Discover the revolutionary applications of computer vision technology across different sectors.",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Getting Started with Reinforcement Learning",
      date: "March 27, 2023",
      category: "Reinforcement Learning",
      excerpt: "A beginner's guide to understanding and implementing reinforcement learning algorithms.",
      imageUrl: "/placeholder.svg"
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4 relative corner-glow">
      {/* Background elements for consistency */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-20 pointer-events-none"></div>
      
      {/* Floating orbs for visual consistency */}
      <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-neon-blue/5 filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-neon-orange/5 filter blur-3xl pointer-events-none"></div>
      
      <h1 className="text-4xl font-bold mb-12 text-center relative z-10">Our Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {blogPosts.map((post, index) => (
          <BlogCard 
            key={post.id}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            imageUrl={post.imageUrl}
            category={post.category}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
