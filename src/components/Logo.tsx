
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Official PropCloud Logo with subtle glow */}
      <div className="relative group">
        <img 
          src="/lovable-uploads/62fd04d0-dfd6-44f2-835f-ed02f0fc1751.png" 
          alt="PropCloud" 
          className="h-12 w-12 transition-all duration-300 group-hover:scale-110" 
        />
        {/* Subtle glow effect */}
        <div className="absolute inset-0 h-12 w-12 bg-teal-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            PropCloud
          </h1>
          <p className="text-sm text-teal-400 font-medium -mt-1">
            AI Property Intelligence
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;
