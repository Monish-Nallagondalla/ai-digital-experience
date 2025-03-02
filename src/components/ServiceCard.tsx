
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: "orange" | "blue" | "green";
  index: number;
  isVisible: boolean;
}

const ServiceCard = ({ icon, title, description, color, index, isVisible }: ServiceCardProps) => {
  const colorMap = {
    orange: "neon-orange",
    blue: "neon-blue",
    green: "neon-green"
  };

  const neonColor = colorMap[color];

  return (
    <div 
      className={cn(
        "glass-card p-8 rounded-xl transition-all duration-500",
        `hover:border-${neonColor}/30`,
        "hover:translate-y-[-5px]",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={cn(
        "p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4", 
        `bg-${neonColor}/10`
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-5">{description}</p>
      <Link 
        to="/contact" 
        className={cn(
          "inline-flex items-center transition-colors", 
          `text-${neonColor}`,
          `hover:text-${neonColor}`
        )}
      >
        Learn more <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;
