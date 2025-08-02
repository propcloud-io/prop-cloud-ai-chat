
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
      {/* Logo Icon - Cloud with AI spark */}
      <div className={`${sizeClasses[size]} aspect-square relative group`}>
        <svg
          viewBox="0 0 64 64"
          className="w-full h-full filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Glow effect */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
          
          {/* Cloud shape */}
          <path
            d="M48 28c0-8.837-7.163-16-16-16s-16 7.163-16 16c0 1.333.166 2.626.477 3.857C12.596 32.97 10 36.15 10 40c0 5.523 4.477 10 10 10h28c5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10z"
            fill="url(#cloudGradient)"
            filter="url(#glow)"
            className="animate-pulse"
          />
          
          {/* AI Spark/Lightning */}
          <path
            d="M32 20l-4 8h6l-4 8"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
          
          {/* Small particles around the cloud */}
          <circle cx="18" cy="25" r="1" fill="#14b8a6" className="animate-ping" style={{ animationDelay: '1s' }} />
          <circle cx="46" cy="35" r="1" fill="#14b8a6" className="animate-ping" style={{ animationDelay: '1.5s' }} />
          <circle cx="52" cy="22" r="1" fill="#14b8a6" className="animate-ping" style={{ animationDelay: '2s' }} />
        </svg>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <h1 className={`font-bold text-white leading-none tracking-tight ${
          size === 'sm' ? 'text-lg' : size === 'md' ? 'text-2xl' : 'text-3xl'
        }`}>
          Prop<span className="text-teal-500">Core</span>
        </h1>
        {size !== 'sm' && (
          <p className="text-xs text-gray-400 leading-none mt-0.5 tracking-wide">
            AI Property Assistant
          </p>
        )}
      </div>
    </div>
  );
};

export default Logo;
