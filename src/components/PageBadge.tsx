
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
    <div className="w-full flex justify-center container-padding pt-20 md:pt-24 pb-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 glass-card rounded-full hover:bg-background/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
        <div className="text-primary group-hover:text-accent transition-colors">
          {getIcon()}
        </div>
        <span className="text-sm md:text-base font-medium text-foreground whitespace-nowrap">{text}</span>
      </div>
    </div>
  );
};

export default PageBadge;
