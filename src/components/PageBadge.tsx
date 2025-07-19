
import React from 'react';
import { BadgeCheck, Sparkles, BookOpen, Tag, Brain, Cpu, BarChart3 } from 'lucide-react';

type BadgeProps = {
  text: string;
  icon?: 'check' | 'sparkles' | 'book' | 'tag' | 'brain' | 'cpu' | 'chart';
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
      case 'brain':
        return <Brain {...iconProps} />;
      case 'cpu':
        return <Cpu {...iconProps} />;
      case 'chart':
        return <BarChart3 {...iconProps} />;
      default:
        return <Sparkles {...iconProps} />;
    }
  };

  return (
    <div className="w-full flex justify-center container-padding pt-24 md:pt-28 pb-8">
      <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
        <div className="text-primary group-hover:text-secondary transition-colors duration-300 pulse-glow">
          {getIcon()}
        </div>
        <span className="text-sm md:text-base font-semibold text-foreground whitespace-nowrap">{text}</span>
      </div>
    </div>
  );
};

export default PageBadge;
