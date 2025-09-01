import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  className?: string;
}

export function SkillBar({ name, percentage, color, className }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>();

  // Calculate blue color based on percentage with higher contrast
  const getBlueShade = () => {
    // Base blue color: #007AFF
    // We'll adjust the darkness based on percentage with more contrast
    const baseHue = 210; // Blue hue
    const baseSaturation = 100; // Full saturation
    
    // Create higher contrast by making high percentages much darker
    // and low percentages lighter
    const lightness = Math.max(20, 80 - (percentage * 0.7)); 
    
    return `hsl(${baseHue}, ${baseSaturation}%, ${lightness}%)`;
  };

  // Always use blue shades based on percentage, ignore any provided color
  const barColor = getBlueShade();

  useEffect(() => {
    if (isIntersecting) {
      setWidth(percentage);
    }
  }, [isIntersecting, percentage]);

  return (
    <div className={cn("mb-6", className)} ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-800">{name}</span>
        <span className="text-gray-600">{percentage}%</span>
      </div>
      <div className="relative h-3 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${width}%`,
            backgroundColor: barColor, 
            boxShadow: `0 0 10px ${barColor}40`
          }}
        ></div>
      </div>
    </div>
  );
}
