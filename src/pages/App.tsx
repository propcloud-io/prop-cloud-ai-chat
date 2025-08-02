import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Send, Edit3, LogOut, Clock, User, CheckCircle, AlertCircle, Activity, Brain, Copy, Star, TrendingUp, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Logo from "@/components/Logo";
import Dashboard from "@/components/Dashboard";

interface Message {
  id: number;
  type: string;
  content: string;
  timestamp: Date;
  sender?: string;
  guestType?: string;
}

interface PropertyData {
  name: string;
  rating: number;
  price: number;
  occupancy: number;
  reviews: number;
}

type ConversationStage = 'initial' | 'guestInteraction' | 'pricingOpportunity' | 'pricingDecision' | 'completed' | 'bookingInquiry' | 'bookingResponse';

type ViewMode = 'conversation' | 'dashboard';

const App = () => {
  const [sessionStartTime] = useState(new Date());
  const [viewMode, setViewMode] = useState<ViewMode>('conversation');
  const [conversationCompleted, setConversationCompleted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm PropCore, your AI co-host. Please share your Airbnb listing link so I can analyze it and set you up with intelligent monitoring.\n\nTry this sample property: https://airbnb.com/rooms/12345678",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showGuestMessage, setShowGuestMessage] = useState(false);
  const [showResponseOptions, setShowResponseOptions] = useState(false);
  const [suggestedResponse, setSuggestedResponse] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedResponse, setEditedResponse] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingStatus, setTypingStatus] = useState('');
  const [conversationStage, setConversationStage] = useState<ConversationStage>('initial');
  const [showDecisionButtons, setShowDecisionButtons] = useState(false);
  const [monitoringActivity, setMonitoringActivity] = useState<string[]>([]);
  const [showMonitoring, setShowMonitoring] = useState(false);
  const [showBookingResponseOptions, setShowBookingResponseOptions] = useState(false);
  const [bookingSuggestedResponse, setBookingSuggestedResponse] = useState('');
  const [isBookingEditing, setIsBookingEditing] = useState(false);
  const [editedBookingResponse, setEditedBookingResponse] = useState('');
  const [aiWorkingStatus, setAiWorkingStatus] = useState('');
  const [showAiWorking, setShowAiWorking] = useState(false);
  const [propertyData, setPropertyData] = useState<PropertyData | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message]);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy text");
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const showAiWorkingIndicator = async (status: string, duration: number = 2000) => {
    setAiWorkingStatus(status);
    setShowAiWorking(true);
    await new Promise(resolve => setTimeout(resolve, duration));
    setShowAiWorking(false);
  };

  const simulateTyping = (duration: number = 1500, status: string = 'analyzing your request...') => {
    setIsTyping(true);
    setTypingStatus(status);
    return new Promise(resolve => setTimeout(() => {
      setIsTyping(false);
      setTypingStatus('');
      resolve(true);
    }, duration));
  };

  const handleInitialSetup = async () => {
    if (conversationStage !== 'initial') return;

    const newMessage: Message = {
      id: Date.now() + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    addMessage(newMessage);
    setInputValue('');

    // Show AI working on analysis
    await showAiWorkingIndicator("🔍 Analyzing property listing...", 1500);
    await showAiWorkingIndicator("📊 Extracting property data and reviews...", 1500);
    await showAiWorkingIndicator("🎯 Identifying guest patterns and pricing trends...", 1500);

    // Set property data
    setPropertyData({
      name: "Downtown Loft",
      rating: 4.9,
      price: 180,
      occupancy: 85,
      reviews: 247
    });

    // Simulate AI analysis with better timing
    await simulateTyping(1500, 'processing property data...');
    
    const aiResponse: Message = {
      id: Date.now() + 2,
      type: 'ai',
      content: "Perfect! I've analyzed your Downtown Loft property. I can see it's a 2-bedroom with 4.9 stars, averaging $180/night with 85% occupancy. I've identified your peak seasons and guest patterns. I'm now monitoring for bookings, messages, and market changes. You're all set!",
      timestamp: new Date()
    };
    addMessage(aiResponse);
    
    // Show AI setting up monitoring
    await showAiWorkingIndicator("⚙️ Setting up intelligent monitoring systems...", 1000);
    
    await simulateTyping(1500, 'configuring monitoring systems...');
    const monitoringMessage: Message = {
      id: Date.now() + 3,
      type: 'status',
      content: "🔍 Monitoring active for bookings, guest messages, and pricing opportunities...",
      timestamp: new Date()
    };
    addMessage(monitoringMessage);
    
    setConversationStage('guestInteraction');
    
    // Continue to next phase with better timing
    setTimeout(() => {
      simulateGuestInteraction();
    }, 2500);
  };

  const simulateGuestInteraction = async () => {
    console.log('Starting guest interaction, current stage:', conversationStage);
    
    // Show AI detecting new message
    await showAiWorkingIndicator("📱 Detecting new guest message...", 1000);
    
    // Guest message notification with smoother appearance
    await simulateTyping(1000, 'processing new message...');
    const guestNotification: Message = {
      id: Date.now() + 1,
      type: 'notification',
      content: "🔔 New message from Sarah Mitchell (Premium Guest, arriving today)",
      timestamp: new Date()
    };
    addMessage(guestNotification);

    await simulateTyping(1500, 'loading guest message...');

    // Guest message
    const guestMessage: Message = {
      id: Date.now() + 2,
      type: 'guest',
      content: "Hi! I'll be arriving 30 minutes early at 2:30 PM. Is early check-in possible? Also, what's the WiFi password? I have an important video call at 3 PM. Thanks!",
      timestamp: new Date(),
      sender: 'Sarah Mitchell',
      guestType: 'Premium Guest'
    };
    addMessage(guestMessage);

    // Show AI analyzing the guest message
    await showAiWorkingIndicator("🧠 Analyzing guest profile and message context...", 1500);
    await showAiWorkingIndicator("📋 Checking availability and property details...", 1500);
    await showAiWorkingIndicator("✍️ Crafting personalized response...", 1500);

    // AI analyzes and suggests response with better timing
    await simulateTyping(1500, 'crafting personalized response...');
    const aiSuggestion: Message = {
      id: Date.now() + 3,
      type: 'ai',
      content: "I've analyzed Sarah's message and her guest profile. She's a premium guest with a 5-star rating. I've crafted a personalized response considering her early arrival request and urgent WiFi need. You can send it directly or customize it:",
      timestamp: new Date()
    };
    
    addMessage(aiSuggestion);
    setSuggestedResponse("Hi Sarah! Absolutely, early check-in at 2:30 PM is perfect - I'll have everything ready for you. The WiFi password is 'DowntownLoft2024' and the network is 'Downtown_Guest'. Since you have an important call at 3 PM, I've also included a backup hotspot password in your welcome guide. The lighting in the living room is ideal for video calls. Welcome to Downtown Loft!");
    setShowResponseOptions(true);
  };

  const handleSendResponse = async () => {
    const sentMessage: Message = {
      id: Date.now() + 4,
      type: 'sent',
      content: isEditing ? editedResponse : suggestedResponse,
      timestamp: new Date()
    };
    addMessage(sentMessage);

    // Show AI sending message
    await showAiWorkingIndicator("📤 Sending message to guest...", 1000);

    await simulateTyping(1500, 'message sent successfully...');

    const confirmationMessage: Message = {
      id: Date.now() + 5,
      type: 'success',
      content: "✅ Message sent to Sarah successfully! I'll continue monitoring for her response and any new bookings or messages.",
      timestamp: new Date()
    };
    addMessage(confirmationMessage);

    // Guest response with improved timing
    setTimeout(async () => {
      // Show AI detecting guest response
      await showAiWorkingIndicator("👀 Monitoring for guest response...", 1000);
      
      await simulateTyping(1000, 'guest responded...');
      
      const guestResponse: Message = {
        id: Date.now() + 6,
        type: 'guest',
        content: "Perfect! Thank you so much for accommodating the early check-in and providing the WiFi details. This is exactly what I needed. See you soon!",
        timestamp: new Date(),
        sender: 'Sarah Mitchell',
        guestType: 'Premium Guest'
      };
      addMessage(guestResponse);

      // Show AI analyzing market conditions
      await showAiWorkingIndicator("📊 Scanning market conditions and competitor pricing...", 1500);
      await showAiWorkingIndicator("🎯 Identifying revenue optimization opportunities...", 1500);

      await simulateTyping(2000, 'analyzing market opportunities...');
      
      setConversationStage('pricingOpportunity');
      console.log('Moving to pricing opportunity stage');
      
      // Present pricing opportunity with smoother transition
      setTimeout(() => {
        presentPricingOpportunity();
      }, 1500);
    }, 2500);

    setShowResponseOptions(false);
    setIsEditing(false);
    setEditedResponse('');
    setSuggestedResponse('');
  };

  const presentPricingOpportunity = async () => {
    console.log('Presenting pricing opportunity, current stage:', conversationStage);
    
    await simulateTyping(1500, 'analyzing pricing opportunities...');
    
    const pricingMessage: Message = {
      id: Date.now() + 7,
      type: 'ai',
      content: "Great! Sarah is all set. I've been monitoring the market and found a pricing opportunity for this weekend (March 15-17). Based on local events and competitor analysis, I recommend increasing your rate from $180 to $220/night. This could generate an additional $120 in revenue. Would you like me to implement this pricing change?",
      timestamp: new Date()
    };
    addMessage(pricingMessage);
    
    setConversationStage('pricingDecision');
    setShowDecisionButtons(true);
  };

  const handlePricingDecision = async (decision: 'yes' | 'no') => {
    console.log('Handling pricing decision:', decision);
    setShowDecisionButtons(false);
    
    const userDecision: Message = {
      id: Date.now() + 8,
      type: 'user',
      content: decision,
      timestamp: new Date()
    };
    addMessage(userDecision);

    if (decision === 'yes') {
      // Show AI implementing pricing changes
      await showAiWorkingIndicator("⚙️ Updating pricing for March 15-17...", 1500);
      await showAiWorkingIndicator("💰 Optimizing revenue settings...", 1000);
    }

    await simulateTyping(1500, decision === 'yes' ? 'implementing pricing changes...' : 'noted your preference...');

    if (decision === 'yes') {
      const implementationMessage: Message = {
        id: Date.now() + 9,
        type: 'ai',
        content: "Perfect! I've updated your pricing to $220/night for March 15-17. This optimization could increase your revenue by approximately $120 for those dates. I'll continue monitoring market trends and guest communications. Your property is now fully optimized and monitored!",
        timestamp: new Date()
      };
      addMessage(implementationMessage);
    } else {
      const rejectionMessage: Message = {
        id: Date.now() + 9,
        type: 'ai',
        content: "No problem! I'll keep monitoring pricing opportunities and will notify you of any significant changes. Your property monitoring remains active for bookings, messages, and market trends.",
        timestamp: new Date()
      };
      addMessage(rejectionMessage);
    }
    
    // Start continuous monitoring mode
    setTimeout(() => {
      startContinuousMonitoring();
    }, 2000);
    
    setConversationStage('completed');
    console.log('Conversation completed, starting monitoring mode');
  };

  const startContinuousMonitoring = () => {
    setShowMonitoring(true);
    
    const activities = [
      "📊 Analyzing market trends for March 18-20...",
      "👀 Monitoring competitor pricing changes...",
      "📱 Checking for new guest inquiries...",
      "🔍 Scanning for booking opportunities...",
      "💬 No new messages requiring attention",
      "📈 Market analysis complete - no immediate actions needed",
      "🎯 All systems monitoring actively..."
    ];
    
    let activityIndex = 0;
    
    const showNextActivity = () => {
      if (activityIndex < activities.length) {
        setMonitoringActivity(prev => [...prev, activities[activityIndex]]);
        activityIndex++;
        
        // Continue showing activities with varying intervals
        const nextDelay = activityIndex < 4 ? 3000 : 5000;
        setTimeout(showNextActivity, nextDelay);
      } else {
        // After monitoring is complete, trigger booking inquiry
        setTimeout(() => {
          simulateBookingInquiry();
        }, 10000);
      }
    };
    
    // Start showing activities
    setTimeout(showNextActivity, 1000);
  };

  const simulateBookingInquiry = async () => {
    console.log('Starting booking inquiry flow');
    setConversationStage('bookingInquiry');

    // Show AI detecting new booking inquiry
    await showAiWorkingIndicator("📧 New booking inquiry detected...", 1000);

    // New guest booking inquiry notification
    await simulateTyping(1000, 'processing booking inquiry...');
    const bookingNotification: Message = {
      id: Date.now() + 1,
      type: 'notification',
      content: "🔔 New booking inquiry from Mike Chen (Business Traveler)",
      timestamp: new Date()
    };
    addMessage(bookingNotification);

    await simulateTyping(1500, 'loading inquiry details...');

    // Booking inquiry message
    const bookingMessage: Message = {
      id: Date.now() + 2,
      type: 'guest',
      content: "Hello! I'm interested in booking your Downtown Loft for March 22-25 (3 nights) for a business trip. I need good WiFi and a quiet workspace. What's your availability and rate for these dates? Also, is there parking available?",
      timestamp: new Date(),
      sender: 'Mike Chen',
      guestType: 'Business Traveler'
    };
    addMessage(bookingMessage);

    // Show AI analyzing the booking inquiry
    await showAiWorkingIndicator("🔍 Analyzing guest profile and requirements...", 1500);
    await showAiWorkingIndicator("📅 Checking availability for requested dates...", 1500);
    await showAiWorkingIndicator("💼 Matching business traveler preferences...", 1500);
    await showAiWorkingIndicator("✍️ Crafting professional booking response...", 1000);

    await simulateTyping(1500, 'crafting booking response...');
    const aiBookingAnalysis: Message = {
      id: Date.now() + 3,
      type: 'ai',
      content: "I've analyzed Mike's booking inquiry for March 22-25. He's a business traveler with excellent reviews (4.8 stars). Those dates are available at your current rate of $180/night ($540 total). I've crafted a professional response highlighting your business-friendly amenities:",
      timestamp: new Date()
    };
    
    addMessage(aiBookingAnalysis);
    setBookingSuggestedResponse("Hi Mike! Great to hear from you. Your dates March 22-25 (3 nights) are available at $180/night ($540 total). The Downtown Loft is perfect for business travelers - we have high-speed fiber WiFi (100+ Mbps), a dedicated workspace with ergonomic chair, and free secure parking. The space is very quiet with blackout curtains for rest. I can hold these dates for you - would you like to proceed with the booking?");
    setShowBookingResponseOptions(true);
  };

  const handleSendBookingResponse = async () => {
    const sentMessage: Message = {
      id: Date.now() + 4,
      type: 'sent',
      content: isBookingEditing ? editedBookingResponse : bookingSuggestedResponse,
      timestamp: new Date()
    };
    addMessage(sentMessage);

    // Show AI sending booking response
    await showAiWorkingIndicator("📤 Sending booking response to Mike...", 1000);

    await simulateTyping(2000, 'booking response sent...');

    const confirmationMessage: Message = {
      id: Date.now() + 5,
      type: 'success',
      content: "✅ Booking inquiry response sent to Mike successfully! I'll continue monitoring for his reply and any new opportunities.",
      timestamp: new Date()
    };
    addMessage(confirmationMessage);

    // Guest response to booking inquiry
    setTimeout(async () => {
      // Show AI monitoring for guest response
      await showAiWorkingIndicator("👀 Monitoring for booking confirmation...", 1000);
      
      await simulateTyping(1500, 'Mike responded...');
      
      const guestBookingResponse: Message = {
        id: Date.now() + 6,
        type: 'guest',
        content: "Perfect! That sounds exactly what I need. The workspace and parking are essential for my trip. Please hold those dates - I'll complete the booking within the next hour. Thank you!",
        timestamp: new Date(),
        sender: 'Mike Chen',
        guestType: 'Business Traveler'
      };
      addMessage(guestBookingResponse);

      // Show AI processing successful lead
      await showAiWorkingIndicator("🎉 Processing successful booking lead...", 1500);

      await simulateTyping(2000, 'processing booking confirmation...');

      // Final AI message
      const finalMessage: Message = {
        id: Date.now() + 7,
        type: 'ai',
        content: "Excellent! Mike is very interested and will complete the booking soon. I've noted his requirements and will continue monitoring for the booking confirmation. Your property is performing well with great guest engagement and revenue optimization!",
        timestamp: new Date()
      };
      addMessage(finalMessage);

      setConversationStage('completed');
      setConversationCompleted(true);
      console.log('Full demo cycle completed');
      
      // Show dashboard option after completion
      setTimeout(() => {
        const dashboardPrompt: Message = {
          id: Date.now() + 8,
          type: 'ai',
          content: "🎉 Great work! Your property is now fully optimized and monitored. You can continue chatting with me or explore your dashboard for property management, analytics, and more features.",
          timestamp: new Date()
        };
        addMessage(dashboardPrompt);
      }, 3000);
    }, 3000);

    setShowBookingResponseOptions(false);
    setIsBookingEditing(false);
    setEditedBookingResponse('');
    setBookingSuggestedResponse('');
  };

  const handleEditBookingResponse = () => {
    setIsBookingEditing(true);
    setEditedBookingResponse(bookingSuggestedResponse);
  };

  const handleEditResponse = () => {
    setIsEditing(true);
    setEditedResponse(suggestedResponse);
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    // Only process input if in 'initial' stage
    if (conversationStage === 'initial') {
      await handleInitialSetup();
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleViewDashboard = () => {
    setViewMode('dashboard');
  };

  const handleStartChat = () => {
    setViewMode('conversation');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleSampleLinkClick = () => {
    setInputValue("https://airbnb.com/rooms/12345678");
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [messages, showResponseOptions, showBookingResponseOptions, showDecisionButtons, showMonitoring]);

  // Show dashboard if in dashboard mode
  if (viewMode === 'dashboard') {
    return <Dashboard onStartChat={handleStartChat} onBackToHome={handleBackToHome} propertyData={propertyData} />;
  }

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
        <header className="bg-black/90 backdrop-blur-xl border-b border-gray-800/50 p-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center space-x-3">
              <Logo />
              <div className="hidden md:block">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Clock className="h-3 w-3" />
                  <span>Session started at {formatTime(sessionStartTime)}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {conversationCompleted && (
                <Button
                  onClick={handleViewDashboard}
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  View Dashboard
                </Button>
              )}
              <Button 
                variant="ghost" 
                onClick={handleLogout}
                className="text-white hover:text-teal-600 transition-colors"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto p-4 h-[calc(100vh-80px)] flex flex-col">
          {/* Property Data Visualization - Fixed with dark background */}
          {propertyData && (
            <div className="mb-4 animate-fade-in">
              <Card className="bg-gray-900 border border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-medium flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-teal-400" />
                      {propertyData.name} - Analytics Overview
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Star className="h-4 w-4 text-yellow-300 mr-1" />
                        <span className="text-white font-semibold">{propertyData.rating}</span>
                      </div>
                      <p className="text-xs text-gray-300">{propertyData.reviews} reviews</p>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold mb-1">${propertyData.price}</div>
                      <p className="text-xs text-gray-300">avg/night</p>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold mb-1">{propertyData.occupancy}%</div>
                      <p className="text-xs text-gray-300">occupancy</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Calendar className="h-4 w-4 text-teal-300 mr-1" />
                        <span className="text-white font-semibold text-sm">Active</span>
                      </div>
                      <p className="text-xs text-gray-300">monitoring</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-4 pb-4 scroll-smooth">
            {messages.map((message) => (
              <div key={message.id} className="animate-fade-in">
                {message.type === 'notification' && (
                  <div className="flex justify-center mb-4">
                    <div className="bg-teal-600/30 border border-teal-600/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                      <p className="text-teal-400 text-sm font-medium">{message.content}</p>
                      <p className="text-xs text-gray-400 mt-1">{formatTime(message.timestamp)}</p>
                    </div>
                  </div>
                )}

                {message.type === 'status' && (
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-600/20 border border-blue-600/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                      <p className="text-blue-400 text-sm font-medium">{message.content}</p>
                      <p className="text-xs text-gray-400 mt-1">{formatTime(message.timestamp)}</p>
                    </div>
                  </div>
                )}

                {message.type === 'success' && (
                  <div className="flex justify-center mb-4">
                    <div className="bg-green-600/20 border border-green-600/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                      <p className="text-green-400 text-sm font-medium flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        {message.content}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{formatTime(message.timestamp)}</p>
                    </div>
                  </div>
                )}
                
                {message.type === 'guest' && (
                  <div className="flex items-start space-x-3 mb-4 hover:bg-gray-900/30 p-2 rounded-lg transition-colors">
                    <div className="bg-orange-500 rounded-full p-2 flex-shrink-0">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-gray-800/80 rounded-lg p-4 max-w-2xl border border-gray-700/50 backdrop-blur-sm flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-orange-400 font-medium text-sm">{message.sender}</span>
                        <span className="text-gray-400 text-xs">• {message.guestType}</span>
                        <Clock className="h-3 w-3 text-gray-400" />
                        <span className="text-gray-400 text-xs">{formatTime(message.timestamp)}</span>
                      </div>
                      <p className="text-white text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                )}

                {message.type === 'sent' && (
                  <div className="flex justify-end mb-4 hover:bg-gray-900/20 p-2 rounded-lg transition-colors">
                    <div className="bg-teal-600 rounded-lg p-4 max-w-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-medium text-sm">You → {message.content.includes('Mike') ? 'Mike' : 'Sarah'}</span>
                          <CheckCircle className="h-3 w-3 text-teal-100" />
                        </div>
                        <button
                          onClick={() => copyToClipboard(message.content)}
                          className="text-teal-100 hover:text-white transition-colors p-1"
                          title="Copy message"
                        >
                          <Copy className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-white text-sm leading-relaxed">{message.content}</p>
                      <p className="text-xs text-teal-100 mt-2">{formatTime(message.timestamp)}</p>
                    </div>
                  </div>
                )}

                {(message.type === 'user' || message.type === 'ai') && (
                  <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start space-x-3 max-w-2xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''} hover:bg-gray-900/20 p-2 rounded-lg transition-colors`}>
                      <div className={`rounded-full p-2 flex-shrink-0 ${message.type === 'ai' ? 'bg-teal-600' : 'bg-gray-600'}`}>
                        <MessageCircle className="h-4 w-4 text-white" />
                      </div>
                      <Card className={`${message.type === 'ai' ? 'bg-gray-800/80' : 'bg-teal-600'} border-gray-700/50 backdrop-blur-sm relative group`}>
                        <CardContent className="p-4">
                          {message.type === 'ai' && (
                            <button
                              onClick={() => copyToClipboard(message.content)}
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white p-1"
                              title="Copy response"
                            >
                              <Copy className="h-3 w-3" />
                            </button>
                          )}
                          {message.content.includes("https://airbnb.com/rooms/12345678") ? (
                            <div className="text-white text-sm leading-relaxed">
                              <p>Hi! I'm PropCore, your AI co-host. Please share your Airbnb listing link so I can analyze it and set you up with intelligent monitoring.</p>
                              <p className="mt-3">Try this sample property:</p>
                              <button
                                onClick={handleSampleLinkClick}
                                className="mt-2 text-teal-400 hover:text-teal-300 underline transition-colors duration-200 cursor-pointer"
                              >
                                https://airbnb.com/rooms/12345678
                              </button>
                            </div>
                          ) : (
                            <p className="text-white text-sm leading-relaxed">{message.content}</p>
                          )}
                          <p className="text-xs text-gray-400 mt-2">{formatTime(message.timestamp)}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* AI Working Indicator */}
            {showAiWorking && (
              <div className="flex justify-center animate-fade-in">
                <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-600/50 rounded-lg px-6 py-3 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Brain className="h-5 w-5 text-purple-400 animate-pulse" />
                      <div className="absolute inset-0 bg-purple-400 rounded-full opacity-20 animate-ping"></div>
                    </div>
                    <span className="text-purple-300 text-sm font-medium">{aiWorkingStatus}</span>
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="flex items-start space-x-3 max-w-2xl">
                  <div className="bg-teal-600 rounded-full p-2 flex-shrink-0">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <Card className="bg-gray-800/80 border-gray-700/50 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                        <span className="text-gray-400 text-xs">PropCore is {typingStatus}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Decision Buttons */}
            {showDecisionButtons && (
              <div className="flex justify-center space-x-4 mt-4 animate-fade-in">
                <Button
                  onClick={() => handlePricingDecision('yes')}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-2 transition-all duration-200 hover:scale-105"
                >
                  Yes, implement pricing change
                </Button>
                <Button
                  onClick={() => handlePricingDecision('no')}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-2 transition-all duration-200 hover:scale-105"
                >
                  No, keep current pricing
                </Button>
              </div>
            )}

            {/* Continuous Monitoring Display */}
            {showMonitoring && (
              <div className="mt-6 animate-fade-in">
                <div className="bg-gradient-to-r from-teal-900/30 to-blue-900/30 border border-teal-600/50 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-teal-600 rounded-full p-2">
                      <Activity className="h-5 w-5 text-white animate-pulse" />
                    </div>
                    <h3 className="text-teal-400 font-medium text-lg">Live Monitoring Active</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {monitoringActivity.map((activity, index) => (
                      <div 
                        key={index} 
                        className="flex items-center space-x-3 text-sm text-gray-300 animate-fade-in"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <div className="w-2 h-2 bg-teal-500 rounded-full opacity-60"></div>
                        <span>{activity}</span>
                        <div className="ml-auto text-xs text-gray-500">
                          {formatTime(new Date())}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <p className="text-xs text-gray-400 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      PropCore will notify you of any important updates or required actions
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Response Options - Fixed edit button colors */}
            {showResponseOptions && (
              <div className="bg-gray-900/90 border border-gray-700/50 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-white font-medium mb-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 mr-2 text-teal-600" />
                    Suggested Response:
                  </div>
                  <button
                    onClick={() => copyToClipboard(isEditing ? editedResponse : suggestedResponse)}
                    className="text-gray-400 hover:text-white transition-colors p-1"
                    title="Copy suggested response"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </h3>
                {isEditing ? (
                  <div className="space-y-3">
                    <textarea
                      value={editedResponse}
                      onChange={(e) => setEditedResponse(e.target.value)}
                      className="w-full bg-gray-800/70 border border-gray-600 rounded-lg p-3 text-white text-sm resize-none focus:border-teal-600 backdrop-blur-sm"
                      rows={4}
                    />
                    <div className="flex space-x-2">
                      <Button
                        onClick={handleSendResponse}
                        className="bg-teal-600 hover:bg-teal-700 text-white"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Edited Message
                      </Button>
                      <Button
                        onClick={() => setIsEditing(false)}
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-800"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="bg-gray-800/70 border border-gray-600 rounded-lg p-3 backdrop-blur-sm">
                      <p className="text-white text-sm leading-relaxed">{suggestedResponse}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        onClick={handleSendResponse}
                        className="bg-teal-600 hover:bg-teal-700 text-white"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send
                      </Button>
                      <Button
                        onClick={handleEditResponse}
                        variant="outline"
                        className="bg-gray-900 border-gray-600 text-white hover:bg-gray-800"
                      >
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Booking Response Options - Fixed edit button colors */}
            {showBookingResponseOptions && (
              <div className="bg-gray-900/90 border border-gray-700/50 rounded-lg p-4 backdrop-blur-sm animate-fade-in">
                <h3 className="text-white font-medium mb-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 mr-2 text-teal-600" />
                    Suggested Booking Response:
                  </div>
                  <button
                    onClick={() => copyToClipboard(isBookingEditing ? editedBookingResponse : bookingSuggestedResponse)}
                    className="text-gray-400 hover:text-white transition-colors p-1"
                    title="Copy suggested response"
                  >
                    <Copy className="h-3 w-3" />
                  </button>
                </h3>
                {isBookingEditing ? (
                  <div className="space-y-3">
                    <textarea
                      value={editedBookingResponse}
                      onChange={(e) => setEditedBookingResponse(e.target.value)}
                      className="w-full bg-gray-800/70 border border-gray-600 rounded-lg p-3 text-white text-sm resize-none focus:border-teal-600 backdrop-blur-sm"
                      rows={5}
                    />
                    <div className="flex space-x-2">
                      <Button
                        onClick={handleSendBookingResponse}
                        className="bg-teal-600 hover:bg-teal-700 text-white"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Edited Response
                      </Button>
                      <Button
                        onClick={() => setIsBookingEditing(false)}
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-800"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="bg-gray-800/70 border border-gray-600 rounded-lg p-3 backdrop-blur-sm">
                      <p className="text-white text-sm leading-relaxed">{bookingSuggestedResponse}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        onClick={handleSendBookingResponse}
                        className="bg-teal-600 hover:bg-teal-700 text-white"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send
                      </Button>
                      <Button
                        onClick={handleEditBookingResponse}
                        variant="outline"
                        className="bg-gray-900 border-gray-600 text-white hover:bg-gray-800"
                      >
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input - Only show if conversation not completed */}
          {conversationStage === 'initial' && (
            <Card className="bg-gray-900/90 border-gray-700/50 backdrop-blur-sm animate-fade-in sticky bottom-0">
              <CardContent className="p-4">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Share your Airbnb listing link..."
                    className="bg-gray-800/70 border-gray-600 text-white focus:border-teal-600 transition-colors duration-200"
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <Button 
                    onClick={handleSend}
                    className="bg-teal-600 hover:bg-teal-700 transition-all duration-200 hover:scale-105"
                    disabled={isTyping}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.8; }
          }
          
          /* Mobile-specific improvements */
          @media (max-width: 768px) {
            .sticky {
              position: -webkit-sticky;
              position: sticky;
              bottom: env(keyboard-inset-height, 0px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
