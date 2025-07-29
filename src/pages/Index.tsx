
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Zap, Shield, Users } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [properties, setProperties] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success message
    setIsSubmitted(true);
    console.log('Waitlist signup:', { email, city, properties });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/2c4d779f-1c7c-4027-b6c6-a3cf1362deef.png" alt="PropCloud" className="h-8 w-8" />
            <span className="text-2xl font-bold text-teal-400">PropCloud</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-300 hover:text-teal-400 transition-colors">Features</a>
            <a href="#demo" className="text-gray-300 hover:text-teal-400 transition-colors">Demo</a>
            <a href="#waitlist" className="text-gray-300 hover:text-teal-400 transition-colors">Join Waitlist</a>
            <a href="/auth" className="text-gray-300 hover:text-teal-400 transition-colors">Login</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              The AI Co-Host for Short-Term Rentals
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Skip the complex dashboards. Manage your properties with simple conversations. 
              Built for the 80% of STR owners who want powerful management without the complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Waitlist
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 px-8 py-6 text-lg"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-teal-400">Why PropCloud?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 hover:border-teal-400 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Chat-Based Management</h3>
                <p className="text-gray-300">No complex dashboards. Just chat with your AI co-host to manage everything.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 hover:border-teal-400 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Instant Responses</h3>
                <p className="text-gray-300">AI handles guest messages instantly, with your approval or automatically.</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 hover:border-teal-400 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Smart Monitoring</h3>
                <p className="text-gray-300">Continuously monitors bookings, messages, and property needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-teal-400">See PropCloud in Action</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 rounded-lg p-8 border border-slate-700">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-teal-600 rounded-full p-2">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4 max-w-md">
                    <p className="text-sm text-gray-300">Hi! I'm PropCore, your AI co-host. Share your Airbnb listing link and I'll analyze it to get you set up.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 justify-end">
                  <div className="bg-teal-600 rounded-lg p-4 max-w-md">
                    <p className="text-sm text-white">https://airbnb.com/rooms/12345</p>
                  </div>
                  <div className="bg-gray-600 rounded-full p-2">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-teal-600 rounded-full p-2">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-slate-700 rounded-lg p-4 max-w-md">
                    <p className="text-sm text-gray-300">Perfect! I've analyzed your Downtown Loft. I'll now monitor for bookings and guest messages. You're all set!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-teal-400">Join the Waitlist</h2>
            <p className="text-center text-gray-300 mb-8">
              Be among the first to experience the future of short-term rental management.
            </p>
            
            {isSubmitted ? (
              <Card className="bg-slate-800 border-teal-400">
                <CardContent className="p-6 text-center">
                  <div className="text-teal-400 mb-4">
                    <MessageCircle className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">You're on the list!</h3>
                  <p className="text-gray-300">We'll notify you when PropCloud is ready for you.</p>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-white">Email Address *</Label>
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
                      <Label htmlFor="city" className="text-white">City (Optional)</Label>
                      <Input
                        id="city"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="Your city"
                      />
                    </div>
                    <div>
                      <Label htmlFor="properties" className="text-white">Number of Properties (Optional)</Label>
                      <Input
                        id="properties"
                        type="number"
                        value={properties}
                        onChange={(e) => setProperties(e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                        placeholder="e.g., 3"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                      disabled={!email}
                    >
                      Join Waitlist
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 PropCloud. The AI Co-Host for Short-Term Rentals.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
