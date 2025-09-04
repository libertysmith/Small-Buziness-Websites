import { cn } from "@/lib/utils";

interface LogoSBWProps {
  variant?: 'default' | 'reverse';
  className?: string;
}

export function LogoSBW({ variant = 'default', className }: LogoSBWProps) {
  const isReverse = variant === 'reverse';
  
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="w-8 h-8 flex-shrink-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="w-full h-full"
          role="img" 
          aria-label="SBW shield logo"
        >
          <path 
            d="M12 2 L20 6 V13 C20 16.5 16.5 19.5 12 22 C7.5 19.5 4 16.5 4 13 V6 Z"
            fill={isReverse ? "#FFFFFF" : "#1F2937"} 
            stroke={isReverse ? "rgba(255,255,255,0.3)" : "#2B6CB0"} 
            strokeWidth="1.5"
          />
          <path 
            d="M7.6 12.6 L10.5 15.5 L16.4 9.6" 
            fill="none" 
            stroke={isReverse ? "#1F2937" : "#FFFFFF"} 
            strokeWidth="2.1"
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className={cn(
        "text-lg font-medium tracking-tight",
        isReverse ? "text-white" : "text-brand-ink"
      )}>
        Small Buziness Websites
      </span>
    </div>
  );
}