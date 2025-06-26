
import React from 'react';
import { BadgeCheck, Sparkles, BookOpen, Tag } from 'lucide-react';

type BadgeProps = {
  text: string;
  icon?: 'check' | 'sparkles' | 'book' | 'tag';
};

const PageBadge = ({ text, icon = 'sparkles' }: BadgeProps) => {
  const renderIcon = () => {
    switch (icon) {
      case 'check':
        return <BadgeCheck className="w-4 h-4 text-blue-400 mr-2" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-orange-400 mr-2" />;
      case 'book':
        return <BookOpen className="w-4 h-4 text-green-400 mr-2" />;
      case 'tag':
        return <Tag className="w-4 h-4 text-blue-400 mr-2" />;
      default:
        return <Sparkles className="w-4 h-4 text-orange-400 mr-2" />;
    }
  };

  return (
    <div className="w-full flex justify-center px-4 py-8 mt-16 md:mt-20">
      <div className="inline-flex items-center px-6 py-3 bg-black/80 border border-white/10 rounded-full backdrop-blur-sm hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
        {renderIcon()}
        <span className="text-sm font-medium text-gray-300 whitespace-nowrap">{text}</span>
      </div>
    </div>
  );
};

export default PageBadge;
