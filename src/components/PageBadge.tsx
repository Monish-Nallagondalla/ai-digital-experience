
import React from 'react';
import { BadgeCheck, Sparkles, BookOpen, Tag } from 'lucide-react';

type BadgeProps = {
  text: string;
  icon?: 'check' | 'sparkles' | 'book' | 'tag';
};

const PageBadge = ({ text, icon = 'sparkles' }: BadgeProps) => {
  const getIcon = () => {
    const iconProps = { className: "w-4 h-4 mr-2" };
    
    switch (icon) {
      case 'check':
        return <BadgeCheck {...iconProps} style={{ color: '#60a5fa' }} />;
      case 'sparkles':
        return <Sparkles {...iconProps} style={{ color: '#fb923c' }} />;
      case 'book':
        return <BookOpen {...iconProps} style={{ color: '#4ade80' }} />;
      case 'tag':
        return <Tag {...iconProps} style={{ color: '#60a5fa' }} />;
      default:
        return <Sparkles {...iconProps} style={{ color: '#fb923c' }} />;
    }
  };

  return (
    <div className="w-full flex justify-center px-4 py-6 mt-20">
      <div className="inline-flex items-center px-6 py-3 bg-black/80 border border-white/10 rounded-full backdrop-blur-sm hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 max-w-fit">
        {getIcon()}
        <span className="text-sm font-medium text-gray-300 whitespace-nowrap">{text}</span>
      </div>
    </div>
  );
};

export default PageBadge;
