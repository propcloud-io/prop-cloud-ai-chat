import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Zap, Shield, Users, Star, Sparkles, Clock, ArrowRight, CheckCircle, AlertCircle, TrendingUp, Calendar, Bot } from "lucide-react";
import Logo from "@/components/Logo";

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
      {/* Revolutionary 3D AI-Inspired Space Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic Star Field with AI Processing Patterns */}
        {Array.from({ length: 200 }, (_, i) => {
          const size = Math.random() * 3 + 1;
          const brightness = Math.random() * 0.8 + 0.2;
          return (
            <div
              key={`star-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: brightness,
                animation: `twinkle ${Math.random() * 4 + 2}s infinite`,
                animationDelay: `${Math.random() * 3}s`,
                boxShadow: `0 0 ${size * 3}px rgba(20, 184, 166, ${brightness * 0.6}), 0 0 ${size * 6}px rgba(6, 182, 212, ${brightness * 0.3})`
              }}
            />
          );
        })}
        
        {/* AI Neural Network Connections - Floating Data Streams */}
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`neural-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-teal-400/40 to-transparent rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              width: `${Math.random() * 300 + 150}px`,
              height: '2px',
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
        
        {/* Floating Data Nodes - AI Processing Units */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`node-${i}`}
            className="absolute w-4 h-4 border border-teal-400/60 rounded-full bg-teal-500/20 animate-pulse"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
              boxShadow: `0 0 15px rgba(20, 184, 166, 0.4), inset 0 0 10px rgba(6, 182, 212, 0.3)`
            }}
          >
            <div className="w-1 h-1 bg-teal-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping" />
          </div>
        ))}
        
        {/* Quantum Computing Inspired Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-teal-400/30 to-cyan-600/20 transform rotate-45 animate-spin shadow-2xl shadow-teal-500/30"
             style={{ animationDuration: '20s' }}>
          <div className="w-full h-full border-2 border-teal-400/50 rounded-lg animate-pulse"></div>
        </div>
        
        <div className="absolute top-60 right-20 w-16 h-16 bg-gradient-to-br from-cyan-400/25 to-teal-600/15 transform rotate-12 animate-bounce shadow-xl shadow-cyan-500/25"
             style={{ animationDuration: '6s' }}>
          <div className="w-full h-full border border-cyan-400/60 transform rotate-45 animate-spin" style={{ animationDuration: '15s' }}></div>
        </div>
        
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-br from-teal-500/35 to-cyan-500/25 transform rotate-45 animate-pulse shadow-lg shadow-teal-400/30">
          <div className="w-full h-full bg-gradient-to-br from-transparent to-teal-300/20 animate-ping"></div>
        </div>
        
        {/* AI Brain Processing Orbs with Data Flow */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-radial from-teal-400/25 to-transparent rounded-full animate-ping shadow-2xl shadow-teal-400/30"
             style={{ animationDuration: '4s' }}>
          <div className="absolute inset-4 border border-teal-300/40 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
          <div className="absolute inset-8 bg-teal-500/20 rounded-full animate-pulse"></div>
        </div>
        
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-radial from-cyan-400/30 to-transparent rounded-full animate-pulse shadow-xl shadow-cyan-400/25"
             style={{ animationDuration: '5s' }}>
          <div className="absolute inset-2 border-2 border-cyan-300/50 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '12s' }}></div>
        </div>
        
        {/* Matrix-Style Data Rain */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`rain-${i}`}
            className="absolute top-0 w-px bg-gradient-to-b from-teal-400/60 via-teal-300/30 to-transparent animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 400 + 200}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
        
        {/* Cosmic AI Energy Waves */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`wave-${i}`}
            className="absolute rounded-full border border-teal-400/20 animate-ping"
            style={{
              left: `${Math.random() * 60 + 20}%`,
              top: `${Math.random() * 60 + 20}%`,
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 3}s`
            }}
          />
        ))}
        
        {/* AI Processing Particles */}
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-teal-400/70 rounded-full animate-ping shadow-lg shadow-teal-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
        
        {/* Flying AI Data Streams */}
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent animate-pulse"
            style={{
              left: `${Math.random() * 70}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 150}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 3}s`
            }}
          />
        ))}
        
        {/* Quantum Field Distortions */}
        <div className="absolute top-1/4 left-1/6 w-48 h-32 bg-gradient-to-r from-teal-600/8 via-cyan-500/12 to-teal-400/8 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-40 h-24 bg-gradient-to-r from-cyan-600/8 via-teal-500/12 to-cyan-400/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Deep Space Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/95 to-black opacity-85"></div>
        
        {/* AI Consciousness Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-1 h-full">
            {Array.from({ length: 144 }, (_, i) => (
              <div key={i} className="border border-teal-500/30 rounded-sm shadow-sm shadow-teal-500/10 animate-pulse" 
                   style={{ animationDelay: `${i * 0.1}s`, animationDuration: '8s' }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Logo size="md" />
            <nav className="hidden md:flex space-x-6">
              <a href="#problem" className="text-white hover:text-teal-600 transition-colors duration-300">The Challenge</a>
              <a href="#solution" className="text-white hover:text-teal-600 transition-colors duration-300">Our AI</a>
              <a href="#demo" className="text-white hover:text-teal-600 transition-colors duration-300">Demo</a>
              <a href="#waitlist" className="text-white hover:text-teal-600 transition-colors duration-300">Early Access</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Bot className="h-8 w-8 text-teal-500 mr-3 animate-pulse" />
                <span className="text-lg text-gray-300 font-medium">The Future of Property Management is AI</span>
                <Bot className="h-8 w-8 text-teal-500 ml-3 animate-pulse" />
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white">Meet Your</span>
                <br />
                <span className="text-teal-600">AI Co-Host</span>
                <br />
                <span className="text-gray-200">for Short-Term Rentals</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                PropCore is building the world's most intelligent AI assistant for property managers. 
                While you sleep, our AI handles guest communications, monitors your listings, 
                and optimizes your revenue — 24/7, in your voice, with superhuman efficiency.
              </p>

              <div className="bg-gray-900/80 rounded-2xl p-6 mb-10 backdrop-blur-sm border border-teal-500/30">
                <h3 className="text-2xl font-semibold mb-4 text-teal-400">Early Results from Beta Users</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-teal-500 mb-2">+$2,200</div>
                    <p className="text-gray-300 text-sm">Average monthly revenue increase per property</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-teal-500 mb-2">95%</div>
                    <p className="text-gray-300 text-sm">Reduction in time spent on guest communication</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-teal-500 mb-2">4.9★</div>
                    <p className="text-gray-300 text-sm">Average guest satisfaction score with AI responses</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-6 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-600/25 group relative overflow-hidden"
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative">See PropCore in Action</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-10 py-6 text-lg font-medium transform hover:scale-105 transition-all duration-300 group"
                  onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn About the Tech
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
                <span className="text-teal-500">The Challenge</span> <span className="text-white">We're Solving</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Short-term rental management is broken. Property owners are drowning in operational complexity 
                while missing massive revenue opportunities. We're building AI to fix this.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gray-900/60 border-teal-500/30 hover:border-teal-500/50 transition-all duration-500 backdrop-blur-lg shadow-xl hover:shadow-teal-500/20 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="bg-teal-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-teal-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Communication Overload</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    50+ daily messages across platforms. Same questions, different guests, endless repetition.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/60 border-teal-500/30 hover:border-teal-500/50 transition-all duration-500 backdrop-blur-lg shadow-xl hover:shadow-teal-500/20 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="bg-teal-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-teal-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">24/7 Expectations</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Guests expect instant responses. Delayed replies = lost bookings and poor reviews.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/60 border-teal-500/30 hover:border-teal-500/50 transition-all duration-500 backdrop-blur-lg shadow-xl hover:shadow-teal-500/20 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="bg-teal-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-teal-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Revenue Optimization Gap</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Missing pricing opportunities, upselling chances, and market insights daily.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/60 border-teal-500/30 hover:border-teal-500/50 transition-all duration-500 backdrop-blur-lg shadow-xl hover:shadow-teal-500/20 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="bg-teal-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-teal-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Scaling Impossibility</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Each property multiplies complexity exponentially. Growth becomes unsustainable.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 bg-gradient-to-r from-teal-900/40 to-blue-900/40 rounded-2xl p-8 border border-teal-500/30">
              <h3 className="text-3xl font-bold mb-6 text-center text-white">The Data Speaks</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-teal-500 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-300">"I spend 4+ hours daily just responding to the same questions over and over."</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-teal-500 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-300">"My conversion rate drops 23% when I can't respond within 2 hours."</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-teal-500 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-300">"I wanted passive income but got a 24/7 customer service job."</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-teal-500 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-300">"I can't scale beyond 5 properties without losing my mind."</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-teal-500 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-300">"Guest emergencies at 2 AM shouldn't be my responsibility."</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-teal-500 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-300">"I'm leaving money on the table but don't know how much."</p>
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
                <span className="text-teal-600">PropCore AI:</span> <span className="text-white">The Breakthrough</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just building another property management tool. PropCore is an AI that thinks, 
                learns, and communicates like your best employee — but with superhuman capabilities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-lg shadow-2xl hover:shadow-teal-600/20">
                <CardContent className="p-8 text-center">
                  <div className="bg-teal-600/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <MessageCircle className="h-10 w-10 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Conversational Intelligence</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Advanced NLP that understands context, emotion, and intent. Responds instantly 
                    in your voice with personalized, human-like conversations that guests love.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-lg shadow-2xl hover:shadow-teal-600/20">
                <CardContent className="p-8 text-center">
                  <div className="bg-teal-600/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <Zap className="h-10 w-10 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Predictive Automation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Machine learning algorithms that predict guest needs, identify revenue opportunities, 
                    and automate complex workflows before issues arise.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-lg shadow-2xl hover:shadow-teal-600/20">
                <CardContent className="p-8 text-center">
                  <div className="bg-teal-600/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <TrendingUp className="h-10 w-10 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Revenue Intelligence</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Deep market analysis, dynamic pricing optimization, and upselling automation 
                    that consistently outperforms human decision-making.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 bg-gradient-to-r from-teal-900/40 to-blue-900/40 rounded-2xl p-8 border border-teal-500/30">
              <h3 className="text-3xl font-bold mb-6 text-center text-white">The AI Advantage</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">∞</div>
                  <p className="text-white font-medium mb-2">Never Sleeps</p>
                  <p className="text-gray-300 text-sm">24/7/365 monitoring and instant response capabilities</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">10x</div>
                  <p className="text-white font-medium mb-2">Faster Learning</p>
                  <p className="text-gray-300 text-sm">Processes patterns from millions of interactions instantly</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">0%</div>
                  <p className="text-white font-medium mb-2">Human Error</p>
                  <p className="text-gray-300 text-sm">Consistent, accurate responses every single time</p>
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
                <span className="text-teal-600">PropCore</span> <span className="text-white">Demo</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Watch our AI in action. This is a real conversation flow showing how PropCore 
                transforms from onboarding to guest management in under 60 seconds.
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
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-gray-800/70 rounded-2xl p-4 max-w-md backdrop-blur-sm group-hover:bg-gray-800/90 group-hover:scale-105 transition-all duration-300">
                      <p className="text-sm text-white leading-relaxed">
                        Hi! I'm PropCore, your AI property assistant. Share your listing URL and I'll analyze 
                        your property, understand your guest patterns, and set up intelligent monitoring in under 60 seconds.
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
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-gray-800/70 rounded-2xl p-4 max-w-md backdrop-blur-sm group-hover:bg-gray-800/90 group-hover:scale-105 transition-all duration-300">
                      <p className="text-sm text-white leading-relaxed">
                        Perfect! Analyzed your Downtown Loft - 2BR, 4.9★, $180/night avg. Peak season: summer, 85% occupancy. 
                        I'm now monitoring for bookings, messages, and market changes. Setup complete!
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
                        Hi! Arriving 30 min early at 2:30 PM. Early check-in possible? Also need WiFi password 
                        for important 3 PM video call. Thanks!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group cursor-pointer hover:bg-gray-800/30 rounded-lg p-2 transition-all duration-300">
                    <div className="bg-teal-600 rounded-full p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-gray-800/70 rounded-2xl p-4 max-w-md backdrop-blur-sm group-hover:bg-gray-800/90 group-hover:scale-105 transition-all duration-300">
                      <p className="text-sm text-white leading-relaxed">
                        I've crafted a personalized response for Sarah based on her premium status and urgency. 
                        Early check-in approved, WiFi details included, plus local café backup options. Ready to send!
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
                <span className="text-white">Early Adopters Are</span> <span className="text-teal-600">Scaling Fast</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Beta users who joined our AI revolution are seeing transformative results.
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
                    <span className="ml-2 text-teal-400 text-sm font-medium">Beta User</span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "PropCore handles my 12 properties like a seasoned co-host. I went from 4 hours daily 
                    on guest messages to 15 minutes reviewing AI suggestions. Revenue up 23% and I finally 
                    took a vacation without constant phone checking."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">MR</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Marcus Rodriguez</p>
                      <p className="text-gray-400 text-sm">12 Properties • Austin, TX • $47K monthly</p>
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
                    <span className="ml-2 text-teal-400 text-sm font-medium">Beta User</span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "The AI understands context like a human. When guests mentioned anniversary celebration, 
                    it suggested romantic restaurants and offered welcome wine. My 5-star reviews doubled 
                    and guests specifically praise the 'exceptional hospitality.'"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">SC</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Sarah Chen</p>
                      <p className="text-gray-400 text-sm">7 Properties • San Diego, CA • $31K monthly</p>
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
                    <span className="ml-2 text-teal-400 text-sm font-medium">Beta User</span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "PropCore caught pricing inefficiencies I missed for months. Noticed competitor price drops 
                    and auto-suggested adjustments. Revenue up 28% in two months. It's like having a revenue 
                    manager, guest relations expert, and assistant — but smarter."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">DK</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">David Kim</p>
                      <p className="text-gray-400 text-sm">5 Properties • Miami, FL • $22K monthly</p>
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
                  <span className="text-white">Join the</span> <span className="text-teal-500">AI Revolution</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Be among the first property managers to experience superhuman AI assistance. 
                  Early access is limited and exclusive.
                </p>
                <div className="bg-teal-900/40 border border-teal-500/30 rounded-lg p-4 mb-8">
                  <p className="text-teal-300 font-medium">🚀 Limited Beta Spots: 100 Forward-Thinking Operators Only</p>
                  <p className="text-gray-300 text-sm mt-1">Join 847 innovative property managers already in line</p>
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
                    <h3 className="text-2xl font-semibold mb-4 text-white">Welcome to the Future! 🚀</h3>
                    <p className="text-gray-300 leading-relaxed">
                      You're now part of an exclusive group of AI-forward property managers. 
                      We'll notify you the moment PropCore is ready to transform your operations.
                    </p>
                    <div className="mt-6 p-4 bg-teal-900/30 rounded-lg border border-teal-600/30">
                      <p className="text-teal-300 text-sm">
                        🎁 <strong>Early Access Bonus:</strong> 3 months free + priority onboarding + exclusive AI training
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
                        <Label htmlFor="properties" className="text-white text-lg font-medium">Properties (Optional)</Label>
                        <Input
                          id="properties"
                          type="number"
                          value={properties}
                          onChange={(e) => setProperties(e.target.value)}
                          className="mt-2 bg-gray-800/70 border-gray-700 text-white focus:border-teal-600 h-12 text-lg"
                          placeholder="e.g., 3"
                        />
                        <p className="text-gray-400 text-sm mt-1">Help us prioritize based on portfolio size</p>
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white h-12 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-600/25 group relative overflow-hidden"
                        disabled={!email}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <span className="relative">Secure Early Access</span>
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative" />
                      </Button>
                      <div className="text-center">
                        <p className="text-gray-400 text-sm">
                          💳 No credit card • 📧 Unsubscribe anytime • 🔒 Privacy protected
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
              <Logo size="md" />
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
            <p className="text-gray-400">&copy; 2025 PropCloud Inc. Building the future of property management with AI.</p>
          </div>
        </footer>
      </div>

      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          
          .bg-gradient-radial {
            background: radial-gradient(circle, var(--tw-gradient-stops));
          }
        `}
      </style>
    </div>
  );
};

export default Index;
