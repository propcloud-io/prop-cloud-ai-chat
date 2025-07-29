
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      if (email === 'contact@propcloud.io' && password === 'Admin123') {
        navigate('/app');
      } else {
        setError('Invalid credentials. Please check your email and password.');
      }
    } else {
      navigate('/?signup=true');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Enhanced 3D Space Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Stars */}
        {Array.from({ length: 80 }, (_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-50"
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
        
        {/* 3D Geometric Elements */}
        <div className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-br from-teal-600/30 to-teal-800/20 opacity-20 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-12 h-12 bg-gradient-to-br from-teal-600/25 to-teal-800/15 opacity-15 transform rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-gradient-to-br from-teal-600/35 to-teal-800/25 opacity-25 rounded-full animate-ping"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/95 to-black opacity-90"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <img src="/lovable-uploads/08a4f4ba-9ef9-40ea-862d-d241858358af.png" alt="PropCloud" className="h-12 w-auto mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">
            {isLogin ? (
              <>
                <span className="text-teal-600">Welcome</span> <span className="text-white">Back</span>
              </>
            ) : (
              <>
                <span className="text-teal-600">Join</span> <span className="text-white">PropCloud</span>
              </>
            )}
          </h1>
          <p className="text-gray-400 text-lg">
            {isLogin ? 'Access your AI co-host dashboard' : 'Start your journey with AI-powered management'}
          </p>
        </div>

        <Card className="bg-gray-900/90 border-gray-800/50 backdrop-blur-xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-white text-center text-xl">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-white text-lg">Email</Label>
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
                <Label htmlFor="password" className="text-white text-lg">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-2 bg-gray-800/70 border-gray-700 text-white focus:border-teal-600 h-12 text-lg"
                  placeholder="Enter your password"
                />
              </div>
              
              {error && (
                <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-3 backdrop-blur-sm">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-teal-600 hover:bg-teal-700 text-white h-12 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-600/25"
              >
                {isLogin ? 'Sign In' : 'Sign Up'}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-lg">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <Button
                  variant="link"
                  className="text-teal-600 hover:text-teal-400 ml-1 text-lg"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button
            variant="link"
            className="text-gray-400 hover:text-white text-lg"
            onClick={() => navigate('/')}
          >
            ← Back to Home
          </Button>
        </div>
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
