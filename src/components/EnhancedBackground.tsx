import React, { useMemo, useEffect, useState, useRef } from 'react';

type EnhancedBackgroundProps = {
  seed?: string;           // default 'propcore-2025'
  density?: number;        // default 1 (scale for star/particle counts; 0.5 mobile, 1 desktop)
  parallax?: boolean;      // default true
  vignette?: boolean;      // default true
  className?: string;
};

// Seeded pseudo-random number generator for deterministic positions
const seededRandom = (seed: string) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  return () => {
    hash = (hash * 1103515245 + 12345) & 0x7fffffff;
    return hash / 0x7fffffff;
  };
};

const EnhancedBackground: React.FC<EnhancedBackgroundProps> = ({ 
  seed = 'propcore-2025',
  density = 1,
  parallax = true,
  vignette = true,
  className = ''
}) => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Mouse parallax effect (throttled)
  useEffect(() => {
    if (!parallax || reducedMotion) return;

    let animationFrameId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      animationFrameId = requestAnimationFrame(() => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
          const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
          setMousePosition({ x, y });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [parallax, reducedMotion]);

  // Generate deterministic elements based on seed and density
  const elements = useMemo(() => {
    const rng = seededRandom(`${seed}-${density}`);
    
    // Calculate counts based on density (limit total nodes < 250)
    const starCount = Math.min(Math.floor(density * 180), 220);
    const orbCount = Math.min(Math.floor(density * 8), 10);
    const particleCount = Math.min(Math.floor(density * 20), 25);
    const geometricCount = Math.min(Math.floor(density * 2) + 1, 3);
    const dustCount = Math.min(Math.floor(density * 30), 40);
    
    // Generate stars
    const stars = Array.from({ length: starCount }, (_, i) => ({
      id: `star-${i}`,
      x: rng() * 100,
      y: rng() * 100,
      size: rng() * 3 + 1,
      delay: rng() * 4,
      duration: rng() * 3 + 3
    }));

    // Generate floating orbs
    const orbs = Array.from({ length: orbCount }, (_, i) => ({
      id: `orb-${i}`,
      x: rng() * 100,
      y: rng() * 100,
      size: rng() * 20 + 80,
      delay: rng() * 6,
      type: rng() > 0.5 ? 'teal' : 'cyan'
    }));

    // Generate particles
    const particles = Array.from({ length: particleCount }, (_, i) => ({
      id: `particle-${i}`,
      x: rng() * 100,
      y: rng() * 100,
      delay: rng() * 8,
      duration: rng() * 8 + 8
    }));

    // Generate geometric shapes
    const geometric = Array.from({ length: geometricCount }, (_, i) => ({
      id: `geo-${i}`,
      x: rng() * 80 + 10, // Keep more centered
      y: rng() * 80 + 10,
      size: rng() * 20 + 60,
      rotation: rng() * 360,
      delay: rng() * 4,
      type: Math.floor(rng() * 3) // 0, 1, 2 for different shapes
    }));

    // Generate cosmic dust
    const dust = Array.from({ length: dustCount }, (_, i) => ({
      id: `dust-${i}`,
      x: rng() * 100,
      y: rng() * 100,
      delay: rng() * 20,
      duration: rng() * 8 + 4
    }));

    return { stars, orbs, particles, geometric, dust };
  }, [seed, density]);

  const parallaxTransform = !reducedMotion && parallax 
    ? `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)` 
    : 'none';

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 -z-10 pointer-events-none overflow-hidden ${className}`}
    >
      {/* Deep Space Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/98 to-black" />
      
      {/* Stars Field */}
      <div 
        className="absolute inset-0"
        style={{ 
          transform: parallaxTransform,
          willChange: parallax && !reducedMotion ? 'transform' : 'auto'
        }}
      >
        {elements.stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full opacity-80"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animation: reducedMotion 
                ? 'none' 
                : `twinkle ${star.duration}s infinite ease-in-out`,
              willChange: reducedMotion ? 'auto' : 'opacity'
            }}
          />
        ))}
      </div>

      {/* Flying Light Particles */}
      <div 
        className="absolute inset-0"
        style={{ 
          transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
          willChange: parallax && !reducedMotion ? 'transform' : 'auto'
        }}
      >
        {elements.particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-teal-400/70 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animation: reducedMotion 
                ? 'none' 
                : `float ${particle.duration}s infinite linear`,
              willChange: reducedMotion ? 'auto' : 'transform'
            }}
          />
        ))}
      </div>
      
      {/* Enhanced 3D Geometric Shapes */}
      <div 
        className="absolute inset-0"
        style={{ 
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
          willChange: parallax && !reducedMotion ? 'transform' : 'auto'
        }}
      >
        {elements.geometric.map((geo) => (
          <div 
            key={geo.id}
            className={`absolute shadow-lg ${
              geo.type === 0 
                ? 'bg-gradient-to-br from-teal-400/40 to-cyan-600/30 shadow-teal-400/20' 
                : geo.type === 1 
                ? 'bg-gradient-to-br from-cyan-400/35 to-teal-600/25 shadow-cyan-400/15' 
                : 'bg-gradient-to-br from-teal-500/45 to-cyan-700/35 shadow-teal-500/25'
            }`}
            style={{
              left: `${geo.x}%`,
              top: `${geo.y}%`,
              width: `${geo.size}px`,
              height: `${geo.size}px`,
              transform: `rotate(${geo.rotation}deg)`,
              animationDelay: `${geo.delay}s`,
              animation: reducedMotion 
                ? 'none' 
                : geo.type === 0 
                ? 'float 8s ease-in-out infinite' 
                : geo.type === 1 
                ? 'pulse 6s ease-in-out infinite' 
                : 'pulse 4s ease-in-out infinite',
              willChange: reducedMotion ? 'auto' : 'transform, opacity'
            }}
          />
        ))}
      </div>
      
      {/* Floating Orbs with Enhanced Glow */}
      <div 
        className="absolute inset-0"
        style={{ 
          transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8}px)`,
          willChange: parallax && !reducedMotion ? 'transform' : 'auto'
        }}
      >
        {elements.orbs.map((orb) => (
          <div 
            key={orb.id}
            className={`absolute rounded-full ${
              orb.type === 'teal' 
                ? 'bg-gradient-radial from-teal-400/30 to-transparent shadow-2xl shadow-teal-400/40'
                : 'bg-gradient-radial from-cyan-400/35 to-transparent shadow-xl shadow-cyan-400/30'
            }`}
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              animationDelay: `${orb.delay}s`,
              animation: reducedMotion 
                ? 'none' 
                : orb.type === 'teal' 
                ? 'ping 8s ease-in-out infinite' 
                : 'pulse 6s ease-in-out infinite',
              willChange: reducedMotion ? 'auto' : 'transform, opacity'
            }}
          />
        ))}
      </div>

      {/* Cosmic Dust Effect */}
      <div 
        className="absolute inset-0"
        style={{ 
          transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)`,
          willChange: parallax && !reducedMotion ? 'transform' : 'auto'
        }}
      >
        {elements.dust.map((dust) => (
          <div
            key={dust.id}
            className="absolute w-0.5 h-0.5 bg-teal-300/40 rounded-full"
            style={{
              left: `${dust.x}%`,
              top: `${dust.y}%`,
              animationDelay: `${dust.delay}s`,
              animation: reducedMotion 
                ? 'none' 
                : `twinkle ${dust.duration}s infinite ease-in-out`,
              willChange: reducedMotion ? 'auto' : 'opacity'
            }}
          />
        ))}
      </div>
      
      {/* Enhanced Grid Pattern */}
      {vignette && (
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
          />
        </div>
      )}
    </div>
  );
};

export default EnhancedBackground;