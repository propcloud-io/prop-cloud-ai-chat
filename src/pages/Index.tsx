
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Zap, Shield, Users, Star, Sparkles, Clock } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [properties, setProperties] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Waitlist signup:', { email, city, properties });
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
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-teal-600/30 to-teal-800/20 transform rotate-45 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-20 h-20 bg-gradient-to-br from-teal-600/25 to-teal-800/15 transform rotate-12 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-br from-teal-600/35 to-teal-800/25 transform rotate-45 animate-pulse"></div>
        
        {/* Floating Orbs with Glow */}
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-radial from-teal-600/20 to-transparent rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-gradient-radial from-teal-600/25 to-transparent rounded-full animate-pulse"></div>
        
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
              <img src="/lovable-uploads/08a4f4ba-9ef9-40ea-862d-d241858358af.png" alt="PropCloud" className="h-16 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#features" className="text-white hover:text-teal-600 transition-colors duration-300">Features</a>
              <a href="#demo" className="text-white hover:text-teal-600 transition-colors duration-300">Demo</a>
              <a href="#waitlist" className="text-white hover:text-teal-600 transition-colors duration-300">Join Waitlist</a>
              <a href="/auth" className="text-white hover:text-teal-600 transition-colors duration-300">Login</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-teal-600 mr-3 animate-pulse" />
                <span className="text-lg text-gray-300 font-medium">The Future of Property Management</span>
                <Sparkles className="h-8 w-8 text-teal-600 ml-3 animate-pulse" />
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-teal-600">The AI Co-Host</span>
                <br />
                <span className="text-white">for Short-Term Rentals</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto">
                Skip the complex dashboards and overwhelming interfaces. Manage your Airbnb empire with simple, 
                intelligent conversations. Built for the 80% of STR owners who want enterprise-grade power 
                without the complexity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-6 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-600/25"
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join the Revolution
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-10 py-6 text-lg font-medium transform hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Experience the Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">
                <span className="text-teal-600">Why Choose</span> <span className="text-white">PropCloud?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the next generation of property management. Our AI doesn't just automate - it understands, learns, and evolves with your business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-lg shadow-2xl hover:shadow-teal-600/20">
                <CardContent className="p-8 text-center">
                  <div className="bg-teal-600/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <MessageCircle className="h-10 w-10 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Conversational Management</h3>
                  <p className="text-gray-300 leading-relaxed">
                    No more clicking through endless dashboards. Simply chat with PropCore about your properties, bookings, and guest needs. It's like having a seasoned property manager who never sleeps.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-lg shadow-2xl hover:shadow-teal-600/20">
                <CardContent className="p-8 text-center">
                  <div className="bg-teal-600/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <Zap className="h-10 w-10 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Lightning-Fast Responses</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Your guests get instant, personalized responses 24/7. PropCore learns your communication style and handles everything from check-in instructions to local recommendations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-lg shadow-2xl hover:shadow-teal-600/20">
                <CardContent className="p-8 text-center">
                  <div className="bg-teal-600/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <Shield className="h-10 w-10 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Intelligent Monitoring</h3>
                  <p className="text-gray-300 leading-relaxed">
                    PropCore continuously monitors your listings, pricing, reviews, and market trends. Get intelligent insights and proactive recommendations to maximize your revenue.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-20 px-4 bg-gray-900/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">
                <span className="text-teal-600">Experience</span> <span className="text-white">PropCloud Live</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how PropCore transforms complex property management into simple conversations. This is real AI in action.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900/80 rounded-2xl p-8 border border-gray-800/50 backdrop-blur-xl shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-600 rounded-full p-3 flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-gray-800/70 rounded-2xl p-4 max-w-md backdrop-blur-sm">
                      <p className="text-sm text-white leading-relaxed">
                        Hi! I'm PropCore, your AI co-host. Share your Airbnb listing link and I'll analyze your property, 
                        understand your guest patterns, and set up intelligent monitoring in under 60 seconds.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 justify-end">
                    <div className="bg-teal-600 rounded-2xl p-4 max-w-md">
                      <p className="text-sm text-white">https://airbnb.com/rooms/downtown-loft-2024</p>
                    </div>
                    <div className="bg-gray-600 rounded-full p-3 flex-shrink-0">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-600 rounded-full p-3 flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-gray-800/70 rounded-2xl p-4 max-w-md backdrop-blur-sm">
                      <p className="text-sm text-white leading-relaxed">
                        Perfect! I've analyzed your Downtown Loft - 2BR, 4.9★ rating, $180/night average. 
                        I can see your peak season is summer with 85% occupancy. I'm now monitoring for bookings, 
                        messages, and market changes. You're all set!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="bg-teal-600/30 border border-teal-600/50 rounded-2xl px-6 py-3 backdrop-blur-sm">
                      <p className="text-teal-400 text-sm font-medium flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        🔔 New message from Sarah (Premium Guest, arriving today)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 rounded-full p-3 flex-shrink-0">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-gray-800/70 rounded-2xl p-4 max-w-md backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-orange-400 font-medium text-sm">Sarah Mitchell</span>
                        <span className="text-gray-400 text-xs">• Premium Guest</span>
                      </div>
                      <p className="text-sm text-white leading-relaxed">
                        Hi! I'll be arriving 30 minutes early at 2:30 PM. Is early check-in possible? 
                        Also, what's the WiFi password? I have an important video call at 3 PM. Thanks!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-600 rounded-full p-3 flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-gray-800/70 rounded-2xl p-4 max-w-md backdrop-blur-sm">
                      <p className="text-sm text-white leading-relaxed">
                        I've crafted a personalized response for Sarah based on her premium guest status and urgency. 
                        You can send it instantly or edit it to match your style.
                      </p>
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
            <div className="max-w-lg mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold mb-4">
                  <span className="text-teal-600">Join the</span> <span className="text-white">Future</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Be among the first to experience the future of short-term rental management. 
                  Join thousands of forward-thinking STR owners who are ready to revolutionize their operations.
                </p>
              </div>
              
              {isSubmitted ? (
                <Card className="bg-gray-900/80 border-teal-600/50 backdrop-blur-xl shadow-2xl shadow-teal-600/20">
                  <CardContent className="p-8 text-center">
                    <div className="text-teal-600 mb-6">
                      <div className="bg-teal-600/20 rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center">
                        <MessageCircle className="h-10 w-10" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">Welcome to the Future!</h3>
                    <p className="text-gray-300 leading-relaxed">
                      You're now part of an exclusive group of innovators. We'll notify you the moment 
                      PropCloud is ready to transform your STR business. Get ready for the revolution.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-gray-900/80 border-gray-800/50 backdrop-blur-xl shadow-2xl">
                  <CardContent className="p-8">
                    <form onSubmit={handleWaitlistSubmit} className="space-y-6">
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
                        <Label htmlFor="city" className="text-white text-lg font-medium">City (Optional)</Label>
                        <Input
                          id="city"
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="mt-2 bg-gray-800/70 border-gray-700 text-white focus:border-teal-600 h-12 text-lg"
                          placeholder="Your city"
                        />
                      </div>
                      <div>
                        <Label htmlFor="properties" className="text-white text-lg font-medium">Number of Properties (Optional)</Label>
                        <Input
                          id="properties"
                          type="number"
                          value={properties}
                          onChange={(e) => setProperties(e.target.value)}
                          className="mt-2 bg-gray-800/70 border-gray-700 text-white focus:border-teal-600 h-12 text-lg"
                          placeholder="e.g., 3"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white h-12 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-600/25"
                        disabled={!email}
                      >
                        Secure Your Spot
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-gray-800/50">
          <div className="container mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <img src="/lovable-uploads/08a4f4ba-9ef9-40ea-862d-d241858358af.png" alt="PropCloud" className="h-16 w-auto" />
            </div>
            <div className="mb-6">
              <p className="text-lg mb-2">
                <a href="mailto:contact@propcloud.io" className="text-teal-600 hover:text-teal-400 transition-colors">
                  contact@propcloud.io
                </a>
                {" • "}
                <a href="tel:+13022133107" className="text-teal-600 hover:text-teal-400 transition-colors">
                  (302) 213-3107
                </a>
              </p>
            </div>
            <p className="text-gray-400">&copy; 2025 PropCloud Inc. The AI Co-Host for Short-Term Rentals.</p>
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
