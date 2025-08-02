
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* PropCloud Official Logo */}
      <div className={`${sizeClasses[size]} aspect-square relative group`}>
        <img
          src="/lovable-uploads/2c4d779f-1c7c-4027-b6c6-a3cf1362deef.png"
          alt="PropCloud Logo"
          className="w-full h-full object-contain filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-500 group-hover:scale-105"
        />
        
        {/* AI spark effects around logo */}
        <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-teal-400 animate-ping opacity-75" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-teal-500 animate-ping opacity-60" style={{ animationDelay: '1.8s' }} />
        <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-teal-600 animate-ping opacity-50" style={{ animationDelay: '2.5s' }} />
      </div>
      
      {/* PropCloud Text */}
      <div className="flex flex-col">
        <h1 className={`font-bold text-white leading-none tracking-tight ${
          size === 'sm' ? 'text-lg' : size === 'md' ? 'text-2xl' : 'text-3xl'
        }`}>
          Prop<span className="text-teal-400">Cloud</span>
        </h1>
        {size !== 'sm' && (
          <p className="text-xs text-gray-400 leading-none mt-0.5 tracking-wide">
            AI Property Intelligence
          </p>
        )}
      </div>
    </div>
  );
};

export default Logo;
