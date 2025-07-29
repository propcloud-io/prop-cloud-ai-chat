import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, TrendingUp, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced 3D Space Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Stars */}
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `twinkle ${Math.random() * 4 + 2}s infinite`
            }}
          />
        ))}
        
        {/* 3D Geometric Elements */}
        <div className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-br from-teal-600/30 to-teal-800/20 opacity-20 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-12 h-12 bg-gradient-to-br from-teal-600/25 to-teal-800/15 opacity-15 transform rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-gradient-to-br from-teal-600/35 to-teal-800/25 opacity-25 rounded-full animate-ping"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/95 to-black opacity-90"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-transparent backdrop-blur-xl border-b border-gray-800/50 p-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/08a4f4ba-9ef9-40ea-862d-d241858358af.png" alt="PropCloud" className="h-16 w-auto" />
            </div>
            <Button 
              onClick={() => navigate('/auth')}
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Get Started
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
              PropCore
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              AI-powered co-host that monitors your Airbnb 24/7, handles guest communications, and optimizes your revenue automatically.
            </p>
            <Button 
              onClick={() => navigate('/auth')}
              className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-200"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-gray-800/80 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800 transition-colors">
              <CardContent className="p-6">
                <MessageCircle className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Smart Guest Communication</h3>
                <p className="text-gray-400">AI analyzes guest messages and crafts personalized responses based on their profile and history.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/80 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800 transition-colors">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Revenue Optimization</h3>
                <p className="text-gray-400">Continuously monitors market trends and automatically adjusts your pricing for maximum revenue.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/80 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800 transition-colors">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">24/7 Monitoring</h3>
                <p className="text-gray-400">Never miss a booking or guest message. PropCore works around the clock to manage your property.</p>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-teal-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Connect Your Listing</h3>
                <p className="text-gray-400">Simply provide your Airbnb listing URL and PropCore analyzes your property.</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">AI Takes Over</h3>
                <p className="text-gray-400">Our AI monitors bookings, handles guest communications, and tracks market trends.</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Maximize Revenue</h3>
                <p className="text-gray-400">Enjoy increased bookings, happy guests, and optimized pricing while you focus on other things.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Airbnb?</h2>
            <p className="text-xl text-gray-300 mb-8">Join thousands of hosts who've increased their revenue by 40% with PropCore.</p>
            <Button 
              onClick={() => navigate('/auth')}
              className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-200"
            >
              Get Started Free
            </Button>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900/80 border-t border-gray-800/50 p-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/lovable-uploads/08a4f4ba-9ef9-40ea-862d-d241858358af.png" alt="PropCloud" className="h-16 w-auto" />
            </div>
            <p className="text-gray-400 text-sm">© 2024 PropCore. All rights reserved.</p>
          </div>
        </footer>
      </div>

      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.8; }
          }
        `}
      </style>
    </div>
  );
};

export default Index;
