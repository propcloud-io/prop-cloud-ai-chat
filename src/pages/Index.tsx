import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Shield, TrendingUp, Bot, Star, Users, DollarSign, Calendar, BarChart3, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// 3D Background Components
const StarField = () => {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; opacity: number }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

const NeuralNetwork = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Neural connections */}
        <g className="animate-pulse">
          <line x1="100" y1="200" x2="300" y2="150" stroke="url(#neuralGradient)" strokeWidth="1" />
          <line x1="300" y1="150" x2="500" y2="250" stroke="url(#neuralGradient)" strokeWidth="1" />
          <line x1="500" y1="250" x2="700" y2="200" stroke="url(#neuralGradient)" strokeWidth="1" />
          <line x1="200" y1="400" x2="400" y2="350" stroke="url(#neuralGradient)" strokeWidth="1" />
          <line x1="400" y1="350" x2="600" y2="450" stroke="url(#neuralGradient)" strokeWidth="1" />
          <line x1="600" y1="450" x2="800" y2="400" stroke="url(#neuralGradient)" strokeWidth="1" />
        </g>
        {/* Neural nodes */}
        <g>
          <circle cx="100" cy="200" r="4" fill="#14b8a6" className="animate-ping" />
          <circle cx="300" cy="150" r="3" fill="#06b6d4" className="animate-ping" style={{ animationDelay: '0.5s' }} />
          <circle cx="500" cy="250" r="5" fill="#14b8a6" className="animate-ping" style={{ animationDelay: '1s' }} />
          <circle cx="700" cy="200" r="3" fill="#06b6d4" className="animate-ping" style={{ animationDelay: '1.5s' }} />
        </g>
      </svg>
    </div>
  );
};

const DataNodes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <div className="absolute top-20 left-20 w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-40 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-20 w-4 h-4 bg-teal-300 rounded-full animate-bounce" style={{ animationDelay: '3s' }} />
    </div>
  );
};

const QuantumShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-teal-400 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-blue-400 rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-purple-400 transform -translate-x-1/2 -translate-y-1/2 animate-ping" />
    </div>
  );
};

const AIOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/3 left-1/6 w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full opacity-60 animate-float" />
      <div className="absolute top-2/3 right-1/6 w-6 h-6 bg-gradient-to-r from-purple-400 to-teal-500 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-3/4 w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-40 animate-float" style={{ animationDelay: '4s' }} />
    </div>
  );
};

const MatrixRain = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-5">
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-400 to-transparent animate-pulse" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

const CosmicWaves = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-teal-400/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-blue-400/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping" style={{ animationDuration: '2s', animationDelay: '2s' }} />
      </div>
    </div>
  );
};

const QuantumField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/10 to-transparent animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* 3D Animated Background */}
      <StarField />
      <NeuralNetwork />
      <DataNodes />
      <QuantumShapes />
      <AIOrbs />
      <MatrixRain />
      <CosmicWaves />
      <QuantumField />

      <Navigation />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <Logo size="lg" className="mx-auto mb-8" />
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-teal-200 to-teal-400 bg-clip-text text-transparent leading-tight">
            The Future of 
            <br />
            <span className="text-teal-400">Property Intelligence</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
            Harness the power of AI to optimize your property investments, 
            <br className="hidden sm:block" />
            maximize revenue, and automate operations effortlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/auth">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-teal-400 hover:from-teal-500 hover:to-teal-300 text-black font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/25"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="outline"
              size="lg"
              className="border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-black px-8 py-4 text-lg transition-all duration-300 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-gray-400">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <div className="w-3 h-3 bg-teal-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-1/3 right-16 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <div className="w-2 h-2 bg-blue-400 rounded-full opacity-50"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}>
          <div className="w-4 h-4 bg-purple-400 rounded-full opacity-40"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
