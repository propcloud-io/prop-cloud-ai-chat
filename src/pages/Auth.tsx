
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ArrowLeft } from "lucide-react";
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
      // Check for admin credentials
      if (email === 'contact@propcloud.io' && password === 'Admin123') {
        navigate('/app');
      } else {
        setError('Invalid credentials. Please check your email and password.');
      }
    } else {
      // Signup - redirect to waitlist
      navigate('/?signup=true');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 text-teal-400 hover:text-teal-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src="/lovable-uploads/2c4d779f-1c7c-4027-b6c6-a3cf1362deef.png" alt="PropCloud" className="h-8 w-8" />
            <span className="text-2xl font-bold text-teal-400">PropCloud</span>
          </div>
        </div>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-center text-white">
              {isLogin ? 'Welcome Back' : 'Join PropCloud'}
            </CardTitle>
            <CardDescription className="text-center text-gray-300">
              {isLogin 
                ? 'Sign in to access your AI co-host' 
                : 'Sign up to join our waitlist'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-700 border-slate-600 text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-slate-700 border-slate-600 text-white"
                  placeholder="••••••••"
                />
              </div>
              
              {error && (
                <div className="p-3 bg-red-900/50 border border-red-700 rounded-md">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
              >
                {isLogin ? 'Sign In' : 'Join Waitlist'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-teal-400 hover:text-teal-300 text-sm"
              >
                {isLogin 
                  ? "Don't have access? Join the waitlist" 
                  : "Already have access? Sign in"
                }
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
