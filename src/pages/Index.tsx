import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setIsSubmitted(true);
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
        <header className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-gray-800/30">
          <div className="container mx-auto px-4 py-6 flex items-center justify-between">
            <div className="flex items-center">
              <img src="/lovable-uploads/08a4f4ba-9ef9-40ea-862d-d241858358af.png" alt="PropCloud" className="h-16 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-white hover:text-teal-600 transition-colors duration-300 text-lg">Features</a>
              <a href="#demo" className="text-white hover:text-teal-600 transition-colors duration-300 text-lg">Demo</a>
              <a href="/auth" className="text-white hover:text-teal-600 transition-colors duration-300 text-lg">Login</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-24 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-6xl font-bold mb-8">
              <span className="text-teal-600">Unlock</span> <span className="text-white">the Potential</span><br />
              of Your Short-Term Rentals
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed mb-12">
              Maximize occupancy, optimize pricing, and deliver exceptional guest experiences with our AI-powered platform.
            </p>

            {/* Waitlist Form */}
            <Card className="max-w-lg mx-auto bg-gray-900/80 border-gray-800/50 backdrop-blur-xl shadow-2xl">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center">
                    <h3 className="text-3xl font-semibold mb-4">Thank You!</h3>
                    <p className="text-gray-400">We'll be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="email" className="text-white text-lg font-medium">Join Our Waitlist</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-2 bg-gray-800/70 border-gray-700 text-white focus:border-teal-600 h-12 text-lg"
                        placeholder="Enter your email"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white h-12 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-600/25"
                    >
                      Get Early Access
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-teal-600">PropCloud</span> Features
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Explore the powerful features designed to streamline your short-term rental management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="bg-gray-900/80 border-gray-800/50 backdrop-blur-xl shadow-2xl">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">AI-Powered Automation</h3>
                  <p className="text-gray-400">Automate tasks like guest communication, pricing adjustments, and booking management.</p>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="bg-gray-900/80 border-gray-800/50 backdrop-blur-xl shadow-2xl">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Dynamic Pricing Optimization</h3>
                  <p className="text-gray-400">Maximize revenue with real-time pricing adjustments based on market demand and competitor analysis.</p>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="bg-gray-900/80 border-gray-800/50 backdrop-blur-xl shadow-2xl">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Personalized Guest Experiences</h3>
                  <p className="text-gray-400">Enhance guest satisfaction with tailored communication and proactive support.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-teal-600">Experience</span> the Future
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed mb-12">
              Try our demo and see how PropCloud can transform your short-term rental business.
            </p>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white h-14 text-lg font-medium px-8 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-600/25">
              Explore the Demo
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-gray-800/50">
          <div className="container mx-auto text-center">
            <img src="/lovable-uploads/08a4f4ba-9ef9-40ea-862d-d241858358af.png" alt="PropCloud" className="h-12 w-auto mx-auto mb-6" />
            <p className="text-gray-400">© 2024 PropCloud. All rights reserved.</p>
          </div>
        </footer>
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

export default Index;
