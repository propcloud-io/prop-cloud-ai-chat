import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Send, Edit3, LogOut, Clock, User, CheckCircle, AlertCircle, TrendingUp, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  id: number;
  type: string;
  content: string;
  timestamp: Date;
  sender?: string;
  guestType?: string;
  priceRecommendation?: {
    dates: string;
    currentPrice: number;
    recommendedPrice: number;
    reason: string;
  };
}

type ConversationStage = 'initial' | 'analyzing' | 'monitoring' | 'guest-interaction' | 'pricing-opportunity' | 'ended';

const App = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm PropCore, your AI co-host. Please share your Airbnb listing link so I can analyze it and set you up with intelligent monitoring.",
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
  const [conversationStage, setConversationStage] = useState<ConversationStage>('initial');
  const navigate = useNavigate();

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message]);
  };

  const simulateTyping = (duration: number = 1500) => {
    setIsTyping(true);
    return new Promise(resolve => setTimeout(() => {
      setIsTyping(false);
      resolve(true);
    }, duration));
  };

  const handleSend = async () => {
    if (!inputValue.trim() || conversationStage === 'ended') return;

    const newMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    addMessage(newMessage);
    const userInput = inputValue.toLowerCase();
    setInputValue('');

    if (conversationStage === 'initial') {
      setConversationStage('analyzing');
      // Simulate AI analysis
      await simulateTyping(2000);
      
      const aiResponse: Message = {
        id: messages.length + 2,
        type: 'ai',
        content: "Perfect! I've analyzed your Downtown Loft property. I can see it's a 2-bedroom with 4.9 stars, averaging $180/night with 85% occupancy. I've identified your peak seasons and guest patterns. I'm now monitoring for bookings, messages, and market changes. You're all set!",
        timestamp: new Date()
      };
      addMessage(aiResponse);
      
      setConversationStage('monitoring');
      
      // Show monitoring status
      await simulateTyping(1000);
      const monitoringMessage: Message = {
        id: messages.length + 3,
        type: 'status',
        content: "🔍 Monitoring active for bookings, guest messages, and pricing opportunities...",
        timestamp: new Date()
      };
      addMessage(monitoringMessage);
      
      // Simulate guest message after some time
      setTimeout(() => {
        simulateGuestInteraction();
      }, 3000);
    } else if (conversationStage === 'guest-interaction' && (userInput.includes('yes') || userInput.includes('handle'))) {
      handlePricingFlow();
    }
  };

  const simulateGuestInteraction = async () => {
    if (conversationStage !== 'monitoring') return;
    
    setConversationStage('guest-interaction');
    
    // Guest message notification
    const guestNotification: Message = {
      id: messages.length + 4,
      type: 'notification',
      content: "🔔 New message from Sarah Mitchell (Premium Guest, arriving today)",
      timestamp: new Date()
    };
    addMessage(guestNotification);

    await simulateTyping(1000);

    // Guest message
    const guestMessage: Message = {
      id: messages.length + 5,
      type: 'guest',
      content: "Hi! I'll be arriving 30 minutes early at 2:30 PM. Is early check-in possible? Also, what's the WiFi password? I have an important video call at 3 PM. Thanks!",
      timestamp: new Date(),
      sender: 'Sarah Mitchell',
      guestType: 'Premium Guest'
    };
    addMessage(guestMessage);

    // AI analyzes and suggests response
    await simulateTyping(2500);
    const aiSuggestion: Message = {
      id: messages.length + 6,
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
      id: messages.length + 7,
      type: 'sent',
      content: isEditing ? editedResponse : suggestedResponse,
      timestamp: new Date()
    };
    addMessage(sentMessage);

    await simulateTyping(1000);

    const confirmationMessage: Message = {
      id: messages.length + 8,
      type: 'success',
      content: "✅ Message sent to Sarah successfully! I'll continue monitoring for her response and any new bookings or messages.",
      timestamp: new Date()
    };
    addMessage(confirmationMessage);

    // Guest response
    setTimeout(async () => {
      const guestResponse: Message = {
        id: messages.length + 9,
        type: 'guest',
        content: "Perfect! Thank you so much for accommodating the early check-in and providing the WiFi details. This is exactly what I needed. See you soon!",
        timestamp: new Date(),
        sender: 'Sarah Mitchell',
        guestType: 'Premium Guest'
      };
      addMessage(guestResponse);

      await simulateTyping(1500);
      
      const finalAI: Message = {
        id: messages.length + 10,
        type: 'ai',
        content: "Great! Sarah is all set. I've noted her positive response and will continue monitoring for any other needs. I'm also tracking two new booking inquiries and a pricing opportunity for next weekend. Want me to handle those too?",
        timestamp: new Date()
      };
      addMessage(finalAI);
    }, 3000);

    setShowResponseOptions(false);
    setIsEditing(false);
    setEditedResponse('');
    setSuggestedResponse('');
  };

  const handlePricingFlow = async () => {
    setConversationStage('pricing-opportunity');
    
    await simulateTyping(2000);
    
    const pricingMessage: Message = {
      id: messages.length + 1,
      type: 'pricing',
      content: "I've identified a pricing opportunity! Based on local events and demand patterns:",
      timestamp: new Date(),
      priceRecommendation: {
        dates: "March 15-17 (Weekend)",
        currentPrice: 180,
        recommendedPrice: 220,
        reason: "Local music festival + 90% area occupancy. Similar properties increased rates by 20-25%."
      }
    };
    addMessage(pricingMessage);
  };

  const handlePricingDecision = async (approved: boolean) => {
    const userResponse: Message = {
      id: messages.length + 1,
      type: 'user',
      content: approved ? 'Yes, update the pricing' : 'No, keep monitoring only',
      timestamp: new Date()
    };
    addMessage(userResponse);

    await simulateTyping(1500);

    if (approved) {
      const successMessage: Message = {
        id: messages.length + 2,
        type: 'success',
        content: "✅ Perfect! I've updated your pricing to $220/night for March 15-17 weekend. The change will be reflected on your Airbnb listing within the next hour. I'll continue monitoring for more opportunities and guest messages.",
        timestamp: new Date()
      };
      addMessage(successMessage);
    } else {
      const continuedMonitoring: Message = {
        id: messages.length + 2,
        type: 'ai',
        content: "Understood! I'll keep monitoring the market and will only notify you of significant opportunities. I'm continuing to watch for new bookings, guest messages, and major pricing trends. You're all set!",
        timestamp: new Date()
      };
      addMessage(continuedMonitoring);
    }

    setConversationStage('ended');
  };

  const handleEditResponse = () => {
    setIsEditing(true);
    setEditedResponse(suggestedResponse);
  };

  const handleLogout = () => {
    navigate('/');
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
        <header className="backdrop-blur-xl border-b border-gray-800/30 p-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center">
              <img src="/lovable-uploads/08a4f4ba-9ef9-40ea-862d-d241858358af.png" alt="PropCloud" className="h-16 w-auto" />
            </div>
            <Button 
              variant="ghost" 
              onClick={handleLogout}
              className="text-white hover:text-teal-600 transition-colors"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </header>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto p-4 h-[calc(100vh-80px)] flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id}>
                {message.type === 'notification' && (
                  <div className="flex justify-center mb-4">
                    <div className="bg-teal-600/30 border border-teal-600/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                      <p className="text-teal-400 text-sm font-medium">{message.content}</p>
                    </div>
                  </div>
                )}

                {message.type === 'status' && (
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-600/20 border border-blue-600/50 rounded-lg px-4 py-2 backdrop-blur-sm">
                      <p className="text-blue-400 text-sm font-medium">{message.content}</p>
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
                    </div>
                  </div>
                )}

                {message.type === 'pricing' && (
                  <div className="flex justify-start mb-4">
                    <div className="max-w-2xl">
                      <div className="bg-gray-800/80 rounded-lg p-4 border border-gray-700/50 backdrop-blur-sm">
                        <div className="flex items-center space-x-2 mb-3">
                          <TrendingUp className="h-5 w-5 text-yellow-500" />
                          <span className="text-yellow-400 font-medium">Pricing Opportunity Detected</span>
                        </div>
                        <p className="text-white text-sm mb-4">{message.content}</p>
                        {message.priceRecommendation && (
                          <div className="bg-gray-900/70 rounded-lg p-3 border border-yellow-600/30 mb-4">
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div>
                                <span className="text-gray-400">Dates:</span>
                                <p className="text-white font-medium">{message.priceRecommendation.dates}</p>
                              </div>
                              <div>
                                <span className="text-gray-400">Current → Recommended:</span>
                                <p className="text-white font-medium">
                                  ${message.priceRecommendation.currentPrice} → <span className="text-yellow-400">${message.priceRecommendation.recommendedPrice}</span>
                                </p>
                              </div>
                            </div>
                            <div className="mt-2">
                              <span className="text-gray-400 text-xs">Reason:</span>
                              <p className="text-white text-xs mt-1">{message.priceRecommendation.reason}</p>
                            </div>
                          </div>
                        )}
                        <div className="flex space-x-2">
                          <Button
                            onClick={() => handlePricingDecision(true)}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white text-sm"
                            disabled={conversationStage === 'ended'}
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve Change
                          </Button>
                          <Button
                            onClick={() => handlePricingDecision(false)}
                            variant="outline"
                            className="border-gray-600 text-gray-300 hover:bg-gray-800 text-sm"
                            disabled={conversationStage === 'ended'}
                          >
                            <X className="h-4 w-4 mr-1" />
                            Keep Current
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {message.type === 'guest' && (
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="bg-orange-500 rounded-full p-2 flex-shrink-0">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-gray-800/80 rounded-lg p-4 max-w-2xl border border-gray-700/50 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-orange-400 font-medium text-sm">{message.sender}</span>
                        <span className="text-gray-400 text-xs">• {message.guestType}</span>
                        <Clock className="h-3 w-3 text-gray-400" />
                        <span className="text-gray-400 text-xs">Just now</span>
                      </div>
                      <p className="text-white text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                )}

                {message.type === 'sent' && (
                  <div className="flex justify-end mb-4">
                    <div className="bg-teal-600 rounded-lg p-4 max-w-2xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-white font-medium text-sm">You → Sarah</span>
                        <CheckCircle className="h-3 w-3 text-teal-100" />
                        <span className="text-teal-100 text-xs">Sent</span>
                      </div>
                      <p className="text-white text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                )}

                {(message.type === 'user' || message.type === 'ai') && (
                  <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start space-x-3 max-w-2xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`rounded-full p-2 flex-shrink-0 ${message.type === 'ai' ? 'bg-teal-600' : 'bg-gray-600'}`}>
                        <MessageCircle className="h-4 w-4 text-white" />
                      </div>
                      <Card className={`${message.type === 'ai' ? 'bg-gray-800/80' : 'bg-teal-600'} border-gray-700/50 backdrop-blur-sm`}>
                        <CardContent className="p-4">
                          <p className="text-white text-sm leading-relaxed">{message.content}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3 max-w-2xl">
                  <div className="bg-teal-600 rounded-full p-2 flex-shrink-0">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <Card className="bg-gray-800/80 border-gray-700/50 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                        <span className="text-gray-400 text-xs">PropCore is thinking...</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Response Options */}
            {showResponseOptions && (
              <div className="bg-gray-900/90 border border-gray-700/50 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-white font-medium mb-3 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2 text-teal-600" />
                  Suggested Response:
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
                        className="border-gray-600 text-gray-300 hover:bg-gray-800"
                      >
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input */}
          <Card className="bg-gray-900/90 border-gray-700/50 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={conversationStage === 'ended' ? "Conversation completed" : "Type your message..."}
                  className="bg-gray-800/70 border-gray-600 text-white focus:border-teal-600"
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  disabled={conversationStage === 'ended' || isTyping}
                />
                <Button 
                  onClick={handleSend}
                  className="bg-teal-600 hover:bg-teal-700"
                  disabled={isTyping || conversationStage === 'ended'}
                >
                  <Send className="h-4 w-4" />
                </Button>
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

export default App;
