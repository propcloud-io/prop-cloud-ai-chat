
import React from 'react';

const EnhancedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep Space Gradient with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/98 to-black"></div>
      
      {/* Brighter Stars Field */}
      {Array.from({ length: 150 }, (_, i) => (
        <div
          key={`star-${i}`}
          className="absolute bg-white rounded-full opacity-80"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            animationDelay: `${Math.random() * 4}s`,
            animation: `twinkle ${Math.random() * 5 + 3}s infinite`
          }}
        />
      ))}
      
      {/* Flying Light Particles */}
      {Array.from({ length: 25 }, (_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-teal-400/70 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animation: `float ${Math.random() * 12 + 8}s infinite linear`
          }}
        />
      ))}
      
      {/* Enhanced 3D Geometric Shapes with vibrant colors */}
      <div 
        className="absolute w-20 h-20 bg-gradient-to-br from-teal-400/40 to-cyan-600/30 transform rotate-45 animate-pulse shadow-lg shadow-teal-400/20"
        style={{
          top: '15%',
          left: '8%',
          animation: 'float 8s ease-in-out infinite'
        }}
      ></div>
      
      <div 
        className="absolute w-24 h-24 bg-gradient-to-br from-cyan-400/35 to-teal-600/25 transform rotate-12 shadow-lg shadow-cyan-400/15"
        style={{
          top: '60%',
          right: '12%',
          animation: 'bounce 6s ease-in-out infinite'
        }}
      ></div>
      
      <div 
        className="absolute w-16 h-16 bg-gradient-to-br from-teal-500/45 to-cyan-700/35 transform rotate-45 shadow-lg shadow-teal-500/25"
        style={{
          bottom: '35%',
          left: '20%',
          animation: 'pulse 4s ease-in-out infinite'
        }}
      ></div>
      
      {/* Floating Orbs with Enhanced Glow */}
      <div 
        className="absolute w-32 h-32 bg-gradient-radial from-teal-400/30 to-transparent rounded-full shadow-2xl shadow-teal-400/40"
        style={{
          top: '30%',
          right: '25%',
          animation: 'ping 8s ease-in-out infinite'
        }}
      ></div>
      
      <div 
        className="absolute w-20 h-20 bg-gradient-radial from-cyan-400/35 to-transparent rounded-full shadow-xl shadow-cyan-400/30"
        style={{
          bottom: '40%',
          left: '35%',
          animation: 'pulse 6s ease-in-out infinite'
        }}
      ></div>
      
      {/* Subtle Moving Lights */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`light-${i}`}
          className="absolute w-3 h-3 bg-teal-500/50 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animation: `drift ${Math.random() * 15 + 10}s infinite ease-in-out`
          }}
        />
      ))}
      
      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div 
          className="grid grid-cols-12 gap-4 h-full"
          style={{
            background: `
              linear-gradient(rgba(20, 184, 166, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20, 184, 166, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        >
        </div>
      </div>
      
      {/* Cosmic Dust Effect */}
      {Array.from({ length: 40 }, (_, i) => (
        <div
          key={`dust-${i}`}
          className="absolute w-0.5 h-0.5 bg-teal-300/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animation: `twinkle ${Math.random() * 8 + 4}s infinite ease-in-out`
          }}
        />
      ))}
    </div>
  );
};

export default EnhancedBackground;
