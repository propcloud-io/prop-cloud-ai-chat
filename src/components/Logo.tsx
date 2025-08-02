
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
      {/* PropCloud Official Logo - Exact Teal P */}
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
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="50%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>
          </defs>
          
          {/* Speech Bubble Shape - Exact replica of your teal P logo */}
          <path
            d="M25 15 C25 10, 30 5, 45 5 C70 5, 80 15, 80 35 C80 55, 70 65, 45 65 L30 65 L30 75 C30 80, 25 85, 20 85 C15 85, 10 80, 10 75 L10 25 C10 20, 15 15, 25 15 Z"
            fill="url(#logoGradient)"
            filter="url(#glow)"
            className="animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          
          {/* Inner Circle - The "P" hole */}
          <circle
            cx="50"
            cy="35"
            r="18"
            fill="transparent"
            stroke="transparent"
            strokeWidth="36"
            className="animate-pulse"
            style={{ animationDelay: '0.5s', animationDuration: '4s' }}
          />
          
          {/* Chat bubble tail */}
          <path
            d="M20 80 L30 65 L30 75 C30 77.5, 22.5 80, 20 80 Z"
            fill="url(#logoGradient)"
            filter="url(#glow)"
          />
          
          {/* AI spark effects around logo */}
          <circle cx="70" cy="20" r="1" fill="#14b8a6" className="animate-ping" style={{ animationDelay: '1s' }} />
          <circle cx="20" cy="45" r="0.8" fill="#0d9488" className="animate-ping" style={{ animationDelay: '1.8s' }} />
          <circle cx="75" cy="50" r="0.6" fill="#0f766e" className="animate-ping" style={{ animationDelay: '2.5s' }} />
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
