
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
        return <BadgeCheck className="w-4 h-4 text-neon-blue mr-1.5" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-neon-orange mr-1.5" />;
      case 'book':
        return <BookOpen className="w-4 h-4 text-neon-green mr-1.5" />;
      case 'tag':
        return <Tag className="w-4 h-4 text-neon-blue mr-1.5" />;
      default:
        return <Sparkles className="w-4 h-4 text-neon-orange mr-1.5" />;
    }
  };

  return (
    <div className="flex justify-center mt-24 sm:mt-28 md:mt-32 mb-4 sm:mb-6">
      <div className="inline-flex items-center px-4 py-2 bg-black/80 border border-white/10 rounded-full backdrop-blur-sm hover:border-white/20 transition-all duration-300">
        {renderIcon()}
        <p className="text-sm font-medium text-gray-300">{text}</p>
      </div>
    </div>
  );
};

export default PageBadge;
