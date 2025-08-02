
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
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-500 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Glow effect */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="50%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1f2937" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
          </defs>
          
          {/* Speech bubble P shape - exact replica of your logo */}
          <path
            d="M20 25 C20 15, 30 10, 45 10 C65 10, 75 20, 75 35 C75 50, 65 60, 45 60 L35 60 L35 70 C35 75, 30 80, 25 80 C20 80, 15 75, 15 70 L15 35 C15 30, 17.5 27.5, 20 25 Z"
            fill="url(#logoGradient)"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDuration: '3s' }}
          />
          
          {/* Inner circle - the "P" hole */}
          <circle
            cx="45"
            cy="35"
            r="15"
            fill="url(#innerGradient)"
            className="animate-pulse"
            style={{ animationDelay: '0.5s', animationDuration: '3s' }}
          />
          
          {/* Chat bubble tail pointer */}
          <path
            d="M25 75 L35 60 L35 70 C35 72.5, 27.5 75, 25 75 Z"
            fill="url(#logoGradient)"
            filter="url(#glow)"
          />
          
          {/* Subtle AI spark effects around logo */}
          <circle cx="65" cy="25" r="1" fill="#14b8a6" className="animate-ping" style={{ animationDelay: '1s' }} />
          <circle cx="25" cy="50" r="0.8" fill="#06b6d4" className="animate-ping" style={{ animationDelay: '1.8s' }} />
          <circle cx="70" cy="45" r="0.6" fill="#0d9488" className="animate-ping" style={{ animationDelay: '2.5s' }} />
        </svg>
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
