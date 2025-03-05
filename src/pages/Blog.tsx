
import React, { useRef, useState } from 'react';
import { BadgeCheck, ArrowRight, BookOpen, Calendar, Tag } from 'lucide-react';

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
    
    // Enhanced magnetic pull effect
    const strength = 15;
    const magneticX = (x / rect.width) * strength;
    const magneticY = (y / rect.height) * strength;
    
    setMagneticPosition({ x: magneticX, y: magneticY });
  };

  const handleMouseLeave = () => {
    setMagneticPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Determine color based on index
  const getThemeColor = () => {
    if (index % 3 === 0) return "neon-orange";
    if (index % 3 === 1) return "neon-blue";
    return "neon-green";
  };

  const colorClass = getThemeColor();
  const boxShadowColor = 
    index % 3 === 0 ? 'rgba(255, 95, 31, 0.2)' : 
    index % 3 === 1 ? 'rgba(0, 255, 255, 0.2)' : 
    'rgba(0, 255, 127, 0.2)';

  return (
    <div 
      ref={cardRef}
      className="glass-card rounded-xl overflow-hidden transition-all duration-300 blog-card border border-white/10 hover:border-white/20"
      style={{ 
        transform: isHovered ? `translate3d(${magneticPosition.x}px, ${magneticPosition.y - 5}px, 0)` : 'translate3d(0, 0, 0)',
        transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease',
        boxShadow: isHovered ? `0 15px 40px rgba(0, 0, 0, 0.2), 0 0 20px ${boxShadowColor}` : ''
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <Tag className={`mr-2 h-4 w-4 text-${colorClass}`} />
            <span className={`text-xs text-${colorClass} bg-${colorClass}/10 px-3 py-1 rounded-full`}>
              {category}
            </span>
          </div>
          <div className="flex items-center text-xs text-gray-400">
            <Calendar className="h-3 w-3 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{excerpt}</p>
        <button className={`text-${colorClass} hover:text-${colorClass}/80 transition-colors flex items-center text-sm font-medium`}>
          Read More
          <ArrowRight className="h-4 w-4 ml-1" />
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
    <div className="bg-black min-h-screen relative pt-32 pb-20">
      {/* Background elements - made consistent with other pages */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-radial from-black/70 via-black/90 to-black opacity-95 pointer-events-none"></div>
      
      {/* Corner glows for visual consistency */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-neon-blue/5 filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-neon-orange/5 filter blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-6">
            <BookOpen className="w-4 h-4 mr-2 text-neon-blue" />
            <p className="text-sm font-medium text-gray-300">Latest Insights</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 shimmer-text bg-gradient-to-r from-neon-orange via-neon-blue to-neon-green py-2">
            Our Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our latest thoughts on AI innovation, industry trends, and digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
};

export default Blog;
