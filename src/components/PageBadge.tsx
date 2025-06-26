
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
        return <BadgeCheck {...iconProps} className="w-4 h-4 mr-2 text-orange-400" />;
      case 'sparkles':
        return <Sparkles {...iconProps} className="w-4 h-4 mr-2 text-orange-400" />;
      case 'book':
        return <BookOpen {...iconProps} className="w-4 h-4 mr-2 text-orange-400" />;
      case 'tag':
        return <Tag {...iconProps} className="w-4 h-4 mr-2 text-orange-400" />;
      default:
        return <Sparkles {...iconProps} className="w-4 h-4 mr-2 text-orange-400" />;
    }
  };

  return (
    <div className="w-full flex justify-center px-4 pt-20 pb-6">
      <div className="inline-flex items-center px-6 py-3 bg-black/80 border border-orange-400/20 rounded-full backdrop-blur-sm hover:border-orange-400/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
        {getIcon()}
        <span className="text-sm font-medium text-gray-300 whitespace-nowrap">{text}</span>
      </div>
    </div>
  );
};

export default PageBadge;
