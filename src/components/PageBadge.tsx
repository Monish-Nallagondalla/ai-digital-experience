
import React from 'react';
import { BadgeCheck, Sparkles, BookOpen, Tag } from 'lucide-react';

type BadgeProps = {
  text: string;
  icon?: 'check' | 'sparkles' | 'book' | 'tag';
};

const PageBadge = ({ text, icon = 'sparkles' }: BadgeProps) => {
  const getIcon = () => {
    const iconProps = { className: "w-4 h-4" };
    
    switch (icon) {
      case 'check':
        return <BadgeCheck {...iconProps} />;
      case 'sparkles':
        return <Sparkles {...iconProps} />;
      case 'book':
        return <BookOpen {...iconProps} />;
      case 'tag':
        return <Tag {...iconProps} />;
      default:
        return <Sparkles {...iconProps} />;
    }
  };

  return (
    <div className="w-full flex justify-center px-4 pt-16 md:pt-20 pb-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-black/60 backdrop-blur-md border border-orange-400/30 rounded-full hover:border-orange-400/50 hover:bg-black/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-400/20 hover:-translate-y-1">
        <div className="text-orange-400">
          {getIcon()}
        </div>
        <span className="text-sm md:text-base font-medium text-gray-200 whitespace-nowrap">{text}</span>
      </div>
    </div>
  );
};

export default PageBadge;
