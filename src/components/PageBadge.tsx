
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
        return <BadgeCheck className="w-4 h-4 text-neon-blue mr-2" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-neon-orange mr-2" />;
      case 'book':
        return <BookOpen className="w-4 h-4 text-neon-green mr-2" />;
      case 'tag':
        return <Tag className="w-4 h-4 text-neon-blue mr-2" />;
      default:
        return <Sparkles className="w-4 h-4 text-neon-orange mr-2" />;
    }
  };

  return (
    <div className="flex justify-center mt-24 mb-6">
      <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
        {renderIcon()}
        <p className="text-sm font-medium text-gray-300">{text}</p>
      </div>
    </div>
  );
};

export default PageBadge;
