
import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  animate?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, animate = true }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12', 
    lg: 'h-16 w-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className="flex items-center space-x-3 group">
      {/* Logo Icon with Glow Effect */}
      <div className="relative">
        <div className={`${sizeClasses[size]} bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-600/30 ${animate ? 'group-hover:shadow-teal-600/50 transition-all duration-300 group-hover:scale-110' : ''}`}>
          <Bot className={`${size === 'sm' ? 'h-4 w-4' : size === 'md' ? 'h-6 w-6' : 'h-8 w-8'} text-white`} />
        </div>
        
        {/* Animated Sparkles */}
        {animate && (
          <>
            <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-teal-300 animate-ping" />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-transparent rounded-xl animate-pulse"></div>
          </>
        )}
        
        {/* Glow Ring */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-teal-400/30 to-teal-600/30 blur-md -z-10 ${animate ? 'group-hover:from-teal-400/50 group-hover:to-teal-600/50 transition-all duration-300' : ''}`}></div>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <h1 className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent ${animate ? 'group-hover:from-teal-100 group-hover:to-teal-300 transition-all duration-300' : ''}`}>
            PropCore
          </h1>
          <p className={`${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'} text-teal-400 font-medium -mt-1`}>
            AI Assistant
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;
