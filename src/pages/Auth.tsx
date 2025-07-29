import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AuthProps {
  // Define any props here
}

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false);
      navigate('/app');
    }, 2000);
  };

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
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/08a4f4ba-9ef9-40ea-862d-d241858358af.png" alt="PropCloud" className="h-16 w-auto" />
            </div>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-white hover:text-teal-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
        </header>

        {/* Auth Form */}
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
          <Card className="w-full max-w-md bg-gray-900/90 border-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
                  {isLogin ? 'Welcome Back' : 'Get Started'}
                </h1>
                <p className="text-gray-400">
                  {isLogin ? 'Sign in to your PropCore account' : 'Create your PropCore account'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      className="bg-gray-800/70 border-gray-600 text-white focus:border-teal-600"
                      placeholder="Enter your full name"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-gray-800/70 border-gray-600 text-white focus:border-teal-600"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    required
                    className="bg-gray-800/70 border-gray-600 text-white focus:border-teal-600"
                    placeholder="Enter your password"
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                      Confirm Password
                    </label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      required
                      className="bg-gray-800/70 border-gray-600 text-white focus:border-teal-600"
                      placeholder="Confirm your password"
                    />
                  </div>
                )}

                <Button 
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Loading...
                    </div>
                  ) : (
                    isLogin ? 'Sign In' : 'Create Account'
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-teal-600 hover:text-teal-500 ml-1 font-medium"
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
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

export default Auth;
