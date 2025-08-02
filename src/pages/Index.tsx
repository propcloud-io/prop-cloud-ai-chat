import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Zap, Shield, Users, Star, Sparkles, Clock, ArrowRight, CheckCircle, AlertCircle, TrendingUp, Calendar } from "lucide-react";

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
              <a href="#problem" className="text-white hover:text-teal-600 transition-colors duration-300">The Problem</a>
              <a href="#solution" className="text-white hover:text-teal-600 transition-colors duration-300">Our Solution</a>
              <a href="#demo" className="text-white hover:text-teal-600 transition-colors duration-300">See It In Action</a>
              <a href="#waitlist" className="text-white hover:text-teal-600 transition-colors duration-300">Join Waitlist</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <AlertCircle className="h-8 w-8 text-red-500 mr-3 animate-pulse" />
                <span className="text-lg text-gray-300 font-medium">STR Owners Are Drowning in Daily Management</span>
                <AlertCircle className="h-8 w-8 text-red-500 ml-3 animate-pulse" />
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white">Stop Losing</span>
                <br />
                <span className="text-red-500">$2,000+ Monthly</span>
                <br />
                <span className="text-teal-600">to Poor Guest Communication</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                You didn't buy rental properties to become a 24/7 customer service agent. Yet here you are, 
                losing bookings because you missed that 11 PM check-in question, getting 3-star reviews because 
                guests couldn't find the WiFi password, and burning out from managing the same repetitive conversations.
              </p>

              <div className="bg-gray-900/80 rounded-2xl p-6 mb-10 backdrop-blur-sm border border-red-500/30">
                <h3 className="text-2xl font-semibold mb-4 text-red-400">The Hidden Cost of Manual Management</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-red-500 mb-2">$2,247</div>
                    <p className="text-gray-300 text-sm">Average monthly revenue lost per property from delayed responses</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-500 mb-2">4.2 hrs</div>
                    <p className="text-gray-300 text-sm">Daily time spent on guest communication and coordination</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-500 mb-2">23%</div>
                    <p className="text-gray-300 text-sm">Booking conversion loss from slow or missed responses</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-6 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-600/25 group"
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See How We Fix This
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-10 py-6 text-lg font-medium transform hover:scale-105 transition-all duration-300 group"
                  onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="py-20 px-4 bg-gray-900/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">
                <span className="text-red-500">The Reality</span> <span className="text-white">of STR Management</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Most STR owners started with 1-2 properties, thinking it would be passive income. 
                Here's what actually happens when you scale...
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gray-900/60 border-red-500/30 hover:border-red-500/50 transition-all duration-500 backdrop-blur-lg shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="bg-red-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Message Overload</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    50+ messages daily across Airbnb, VRBO, direct bookings. Same questions asked repeatedly.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/60 border-red-500/30 hover:border-red-500/50 transition-all duration-500 backdrop-blur-lg shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="bg-red-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">24/7 Availability</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Guests expect instant responses. Miss a message at 11 PM? Lost booking by morning.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/60 border-red-500/30 hover:border-red-500/50 transition-all duration-500 backdrop-blur-lg shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="bg-red-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Revenue Leakage</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Delayed responses = lower conversion rates = thousands lost monthly per property.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/60 border-red-500/30 hover:border-red-500/50 transition-all duration-500 backdrop-blur-lg shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="bg-red-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Scaling Nightmare</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Each new property multiplies the chaos. Your "passive income" becomes a full-time job.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-2xl p-8 border border-red-500/30">
              <h3 className="text-3xl font-bold mb-6 text-center text-white">Sound Familiar?</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-500 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-300">"I check my phone constantly, even on vacation, afraid I'll miss an important guest message."</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-500 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-300">"I've typed 'The WiFi password is...' literally 847 times this year."</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-500 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-300">"My family complains I'm always on my phone dealing with 'Airbnb stuff.'"</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-500 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-300">"I wanted to buy more properties but can't handle the workload I have now."</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-500 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-300">"Every guest emergency feels like MY emergency at 2 AM."</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-500 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-300">"I'm spending more time managing properties than I did at my day job."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">
                <span className="text-teal-600">Meet PropCore:</span> <span className="text-white">Your AI Co-Host</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Instead of another complicated dashboard, we built an AI that works like your best employee. 
                One who never sleeps, never forgets, and gets smarter every day.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-lg shadow-2xl hover:shadow-teal-600/20">
                <CardContent className="p-8 text-center">
                  <div className="bg-teal-600/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <MessageCircle className="h-10 w-10 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Instant Guest Responses</h3>
                  <p className="text-gray-300 leading-relaxed">
                    PropCore responds to 95% of guest messages within 30 seconds. Check-in instructions, 
                    WiFi passwords, local recommendations - all handled instantly in your voice and style.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-lg shadow-2xl hover:shadow-teal-600/20">
                <CardContent className="p-8 text-center">
                  <div className="bg-teal-600/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <Zap className="h-10 w-10 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Proactive Property Management</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Beyond responding, PropCore monitors your listings 24/7. Price changes, booking issues, 
                    maintenance needs - you get intelligent alerts with suggested actions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-lg shadow-2xl hover:shadow-teal-600/20">
                <CardContent className="p-8 text-center">
                  <div className="bg-teal-600/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <TrendingUp className="h-10 w-10 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Revenue Optimization</h3>
                  <p className="text-gray-300 leading-relaxed">
                    PropCore learns your market patterns and guest preferences. Automatic pricing suggestions, 
                    upselling opportunities, and conversion optimization that adds $1,500+ monthly per property.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 bg-gradient-to-r from-teal-900/40 to-blue-900/40 rounded-2xl p-8 border border-teal-500/30">
              <h3 className="text-3xl font-bold mb-6 text-center text-white">The Result? Your Life Back.</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">95%</div>
                  <p className="text-white font-medium mb-2">Reduction in Daily Messages</p>
                  <p className="text-gray-300 text-sm">From 50+ messages to 2-3 that actually need your attention</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">4.8★</div>
                  <p className="text-white font-medium mb-2">Average Guest Rating</p>
                  <p className="text-gray-300 text-sm">Instant, personalized responses lead to higher satisfaction</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">3x</div>
                  <p className="text-white font-medium mb-2">Property Scaling Capacity</p>
                  <p className="text-gray-300 text-sm">Manage 15 properties with less effort than you managed 5</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-20 px-4 bg-gray-900/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">
                <span className="text-teal-600">See PropCore</span> <span className="text-white">In Action</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Watch how a real guest interaction gets handled. This is exactly what happens 
                when PropCore takes over your guest communication.
              </p>
              
              {/* Progress Indicators */}
              <div className="flex items-center justify-center space-x-4 mb-12">
                <div className="flex items-center space-x-2">
                  <div className="bg-teal-600 rounded-full p-2">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-teal-400 font-medium">Share Link</span>
                </div>
                <div className="h-0.5 w-8 bg-teal-600"></div>
                <div className="flex items-center space-x-2">
                  <div className="bg-teal-600 rounded-full p-2">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-teal-400 font-medium">AI Analysis</span>
                </div>
                <div className="h-0.5 w-8 bg-teal-600"></div>
                <div className="flex items-center space-x-2">
                  <div className="bg-teal-600 rounded-full p-2">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-teal-400 font-medium">Setup Complete</span>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900/80 rounded-2xl p-8 border border-gray-800/50 backdrop-blur-xl shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group cursor-pointer hover:bg-gray-800/30 rounded-lg p-2 transition-all duration-300">
                    <div className="bg-teal-600 rounded-full p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-gray-800/70 rounded-2xl p-4 max-w-md backdrop-blur-sm group-hover:bg-gray-800/90 group-hover:scale-105 transition-all duration-300">
                      <p className="text-sm text-white leading-relaxed">
                        Hi! I'm PropCore, your AI co-host. Share your Airbnb listing link and I'll analyze your property, 
                        understand your guest patterns, and set up intelligent monitoring in under 60 seconds.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 justify-end group cursor-pointer hover:bg-gray-800/30 rounded-lg p-2 transition-all duration-300">
                    <div className="bg-teal-600 rounded-2xl p-4 max-w-md group-hover:bg-teal-700 group-hover:scale-105 transition-all duration-300">
                      <p className="text-sm text-white">https://airbnb.com/rooms/downtown-loft-2024</p>
                    </div>
                    <div className="bg-gray-600 rounded-full p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group cursor-pointer hover:bg-gray-800/30 rounded-lg p-2 transition-all duration-300">
                    <div className="bg-teal-600 rounded-full p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-gray-800/70 rounded-2xl p-4 max-w-md backdrop-blur-sm group-hover:bg-gray-800/90 group-hover:scale-105 transition-all duration-300">
                      <p className="text-sm text-white leading-relaxed">
                        Perfect! I've analyzed your Downtown Loft - 2BR, 4.9★ rating, $180/night average. 
                        I can see your peak season is summer with 85% occupancy. I'm now monitoring for bookings, 
                        messages, and market changes. You're all set!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="bg-teal-600/30 border border-teal-600/50 rounded-2xl px-6 py-3 backdrop-blur-sm hover:bg-teal-600/40 transition-colors duration-300 cursor-pointer">
                      <p className="text-teal-400 text-sm font-medium flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        🔔 New message from Sarah (Premium Guest, arriving today)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group cursor-pointer hover:bg-gray-800/30 rounded-lg p-2 transition-all duration-300">
                    <div className="bg-orange-500 rounded-full p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-gray-800/70 rounded-2xl p-4 max-w-md backdrop-blur-sm group-hover:bg-gray-800/90 group-hover:scale-105 transition-all duration-300">
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
                  
                  <div className="flex items-start space-x-4 group cursor-pointer hover:bg-gray-800/30 rounded-lg p-2 transition-all duration-300">
                    <div className="bg-teal-600 rounded-full p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-gray-800/70 rounded-2xl p-4 max-w-md backdrop-blur-sm group-hover:bg-gray-800/90 group-hover:scale-105 transition-all duration-300">
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

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-white">STR Owners Are</span> <span className="text-teal-600">Getting Their Lives Back</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Real results from property owners who stopped drowning in daily management tasks.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/30 transition-all duration-500 backdrop-blur-lg shadow-xl hover:shadow-teal-600/20 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-teal-600">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-teal-400 text-sm font-medium">Verified Owner</span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "PropCore handles my 12 properties like a seasoned co-host. I went from spending 3 hours daily 
                    on guest messages to just 15 minutes reviewing suggestions. My revenue is up 23% and I actually 
                    took a vacation without checking my phone every 5 minutes."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">MR</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Marcus Rodriguez</p>
                      <p className="text-gray-400 text-sm">12 Properties • Austin, TX • $47K monthly revenue</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/30 transition-all duration-500 backdrop-blur-lg shadow-xl hover:shadow-teal-600/20 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-teal-600">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-teal-400 text-sm font-medium">Verified Owner</span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "The AI understands context like a human. When a guest mentioned they're celebrating an anniversary, 
                    it suggested local romantic restaurants and even offered a welcome bottle of wine. My 5-star reviews 
                    doubled and guests specifically mention the 'exceptional hospitality.'"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">SC</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Sarah Chen</p>
                      <p className="text-gray-400 text-sm">7 Properties • San Diego, CA • $31K monthly revenue</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/30 transition-all duration-500 backdrop-blur-lg shadow-xl hover:shadow-teal-600/20 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-teal-600">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-teal-400 text-sm font-medium">Verified Owner</span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "PropCore caught pricing inefficiencies I missed for months. It noticed my competitor dropped 
                    prices and automatically suggested adjustments. Revenue up 28% in two months. It's like having 
                    a revenue manager, guest relations expert, and assistant all in one - but smarter."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">DJ</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">David Kim</p>
                      <p className="text-gray-400 text-sm">5 Properties • Miami, FL • $22K monthly revenue</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-lg mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold mb-4">
                  <span className="text-white">Stop the</span> <span className="text-red-500">Revenue Bleeding</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Every day you wait is another $75+ lost per property in missed opportunities and poor guest experiences.
                </p>
                <div className="bg-red-900/40 border border-red-500/30 rounded-lg p-4 mb-8">
                  <p className="text-red-300 font-medium">⚠️ Limited Beta Access: Only 100 spots available</p>
                  <p className="text-gray-300 text-sm mt-1">Join 847 forward-thinking STR owners already on the waitlist</p>
                </div>
              </div>
              
              {isSubmitted ? (
                <Card className="bg-gray-900/80 border-teal-600/50 backdrop-blur-xl shadow-2xl shadow-teal-600/20">
                  <CardContent className="p-8 text-center">
                    <div className="text-teal-600 mb-6">
                      <div className="bg-teal-600/20 rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center">
                        <CheckCircle className="h-10 w-10" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">You're In! Welcome to the Revolution.</h3>
                    <p className="text-gray-300 leading-relaxed">
                      You're now part of an exclusive group of innovators who refuse to let property management 
                      consume their lives. We'll notify you the moment PropCore is ready to transform your business.
                    </p>
                    <div className="mt-6 p-4 bg-teal-900/30 rounded-lg border border-teal-600/30">
                      <p className="text-teal-300 text-sm">
                        🎁 <strong>Beta Bonus:</strong> Early access users get 3 months free + priority onboarding support
                      </p>
                    </div>
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
                        <p className="text-gray-400 text-sm mt-1">Help us prioritize based on your portfolio size</p>
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white h-12 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-600/25 group"
                        disabled={!email}
                      >
                        Get Priority Access Now
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                      <div className="text-center">
                        <p className="text-gray-400 text-sm">
                          💳 No credit card required • 📧 Unsubscribe anytime • 🔒 Your data stays private
                        </p>
                      </div>
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
            <p className="text-gray-400">&copy; 2025 PropCloud Inc. Stop losing money to poor guest communication.</p>
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
