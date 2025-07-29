import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced 3D Space Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Stars */}
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `twinkle ${Math.random() * 4 + 2}s infinite`
            }}
          />
        ))}
        
        {/* Animated 3D Geometric Shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-teal-600/30 to-teal-800/20 transform rotate-45 animate-pulse shadow-2xl shadow-teal-600/20"></div>
        <div className="absolute top-60 right-20 w-20 h-20 bg-gradient-to-br from-teal-600/25 to-teal-800/15 transform rotate-12 animate-bounce shadow-2xl shadow-teal-600/15"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-br from-teal-600/35 to-teal-800/25 transform rotate-45 animate-pulse shadow-lg shadow-teal-600/25"></div>
        
        {/* Floating Orbs with Glow */}
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-radial from-teal-600/20 to-transparent rounded-full animate-ping shadow-2xl shadow-teal-600/30"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-gradient-radial from-teal-600/25 to-transparent rounded-full animate-pulse shadow-xl shadow-teal-600/20"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 gap-2 h-full">
            {Array.from({ length: 400 }, (_, i) => (
              <div key={i} className="border border-teal-600/30 rounded-sm"></div>
            ))}
          </div>
        </div>
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-teal-600/40 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
        
        {/* Deep Space Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/95 to-black opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/08a4f4ba-9ef9-40ea-862d-d241858358af.png" alt="PropCloud" className="h-12 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-white hover:text-teal-600 transition-colors duration-300">Home</a>
              <a href="/#features" className="text-white hover:text-teal-600 transition-colors duration-300">Features</a>
              <a href="/#demo" className="text-white hover:text-teal-600 transition-colors duration-300">Demo</a>
            </nav>
          </div>
        </header>

        {/* Login Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-lg mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold mb-4">
                  <span className="text-teal-600">Login to</span> <span className="text-white">PropCloud</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Access the future of short-term rental management.
                </p>
              </div>
              
              <Card className="bg-gray-900/80 border-gray-800/50 backdrop-blur-xl shadow-2xl">
                <CardContent className="p-8">
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                      <Label htmlFor="email" className="text-white text-lg font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-2 bg-gray-800/70 border-gray-700 text-white focus:border-teal-600 h-12 text-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="password" className="text-white text-lg font-medium">Password *</Label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-2 bg-gray-800/70 border-gray-700 text-white focus:border-teal-600 h-12 text-lg"
                        placeholder="Your secure password"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white h-12 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-600/25"
                    >
                      Login
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-8 text-center">
                <p className="text-gray-400">
                  Don't have an account? <a href="/" className="text-teal-600 hover:text-teal-400 transition-colors">Join the waitlist</a>
                </p>
                <Button 
                  variant="outline"
                  className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-800"
                  onClick={() => navigate('/app')}
                >
                  Demo Access <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Auth;
