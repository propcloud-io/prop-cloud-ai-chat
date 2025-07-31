import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Send, Edit3, LogOut, Clock, User, CheckCircle, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  id: number;
  type: string;
  content: string;
  timestamp: Date;
  sender?: string;
  guestType?: string;
}

type ConversationStage = 'initial' | 'guestInteraction' | 'pricingOpportunity' | 'pricingDecision' | 'completed';

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
  const [showDecisionButtons, setShowDecisionButtons] = useState(false);
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

  const handleInitialSetup = async () => {
    if (conversationStage !== 'initial') return;

    const newMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    addMessage(newMessage);
    setInputValue('');

    // Simulate AI analysis
    await simulateTyping(2000);
    
    const aiResponse: Message = {
      id: messages.length + 2,
      type: 'ai',
      content: "Perfect! I've analyzed your Downtown Loft property. I can see it's a 2-bedroom with 4.9 stars, averaging $180/night with 85% occupancy. I've identified your peak seasons and guest patterns. I'm now monitoring for bookings, messages, and market changes. You're all set!",
      timestamp: new Date()
    };
    addMessage(aiResponse);
    
    // Show monitoring status
    await simulateTyping(1000);
    const monitoringMessage: Message = {
      id: messages.length + 3,
      type: 'status',
      content: "🔍 Monitoring active for bookings, guest messages, and pricing opportunities...",
      timestamp: new Date()
    };
    addMessage(monitoringMessage);
    
    // Set stage and continue to next phase
    setConversationStage('guestInteraction');
    
    // Simulate guest message after some time
    setTimeout(() => {
      simulateGuestInteraction();
    }, 3000);
  };

  const simulateGuestInteraction = async () => {
    console.log('Starting guest interaction, current stage:', conversationStage);
    
    // Guest message notification
    const guestNotification: Message = {
      id: Date.now() + 1,
      type: 'notification',
      content: "🔔 New message from Sarah Mitchell (Premium Guest, arriving today)",
      timestamp: new Date()
    };
    addMessage(guestNotification);

    await simulateTyping(1000);

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

    // AI analyzes and suggests response
    await simulateTyping(2500);
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

    await simulateTyping(1000);

    const confirmationMessage: Message = {
      id: Date.now() + 5,
      type: 'success',
      content: "✅ Message sent to Sarah successfully! I'll continue monitoring for her response and any new bookings or messages.",
      timestamp: new Date()
    };
    addMessage(confirmationMessage);

    // Guest response
    setTimeout(async () => {
      const guestResponse: Message = {
        id: Date.now() + 6,
        type: 'guest',
        content: "Perfect! Thank you so much for accommodating the early check-in and providing the WiFi details. This is exactly what I needed. See you soon!",
        timestamp: new Date(),
        sender: 'Sarah Mitchell',
        guestType: 'Premium Guest'
      };
      addMessage(guestResponse);

      await simulateTyping(1500);
      
      // Move to pricing opportunity stage
      setConversationStage('pricingOpportunity');
      console.log('Moving to pricing opportunity stage');
      
      // Present pricing opportunity
      setTimeout(() => {
        presentPricingOpportunity();
      }, 2000);
    }, 3000);

    setShowResponseOptions(false);
    setIsEditing(false);
    setEditedResponse('');
    setSuggestedResponse('');
  };

  const presentPricingOpportunity = async () => {
    console.log('Presenting pricing opportunity, current stage:', conversationStage);
    
    await simulateTyping(1000);
    
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

    await simulateTyping(1000);

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
    
    setConversationStage('completed');
    console.log('Conversation completed');
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

            {/* Decision Buttons */}
            {showDecisionButtons && (
              <div className="flex justify-center space-x-4 mt-4">
                <Button
                  onClick={() => handlePricingDecision('yes')}
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Yes
                </Button>
                <Button
                  onClick={() => handlePricingDecision('no')}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  No
                </Button>
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

          {/* Input - Only show if conversation not completed */}
          {conversationStage === 'initial' && (
            <Card className="bg-gray-900/90 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="bg-gray-800/70 border-gray-600 text-white focus:border-teal-600"
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <Button 
                    onClick={handleSend}
                    className="bg-teal-600 hover:bg-teal-700"
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
        `}
      </style>
    </div>
  );
};

export default App;
