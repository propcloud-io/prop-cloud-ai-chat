
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Send, Edit3, LogOut, Clock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm PropCore, your AI co-host. Please share your Airbnb listing link so I can analyze it and set you up.",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showGuestMessage, setShowGuestMessage] = useState(false);
  const [showResponseOptions, setShowResponseOptions] = useState(false);
  const [suggestedResponse, setSuggestedResponse] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedResponse, setEditedResponse] = useState('');
  const navigate = useNavigate();

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate AI response based on input
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: "Thanks! I've analyzed your Downtown Loft property. I'll now monitor for any bookings or guest messages and notify you immediately. You're all set!",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      
      // Simulate guest message after 3 seconds
      setTimeout(() => {
        setShowGuestMessage(true);
        simulateGuestMessage();
      }, 3000);
    }, 1000);
  };

  const simulateGuestMessage = () => {
    const guestNotification = {
      id: messages.length + 3,
      type: 'notification',
      content: "📱 New message from Sarah (arriving today)",
      timestamp: new Date()
    };

    const guestMessage = {
      id: messages.length + 4,
      type: 'guest',
      content: "Hi! I will be arriving 30 minutes early. Is an early check-in possible? Also, could you please let me know the WiFi password? I need to connect urgently when I arrive. Thanks!",
      timestamp: new Date(),
      sender: 'Sarah'
    };

    setMessages(prev => [...prev, guestNotification, guestMessage]);

    // Show AI's suggested response
    setTimeout(() => {
      const aiSuggestion = {
        id: messages.length + 5,
        type: 'ai',
        content: "I've drafted a response for Sarah. You can send it directly or edit it first:",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiSuggestion]);
      setSuggestedResponse("Hi Sarah! Yes, early check-in at 2:30 PM is perfectly fine. The WiFi password is 'DowntownLoft2024'. Looking forward to hosting you! Let me know if you need anything else.");
      setShowResponseOptions(true);
    }, 2000);
  };

  const handleSendResponse = () => {
    const sentMessage = {
      id: messages.length + 6,
      type: 'sent',
      content: isEditing ? editedResponse : suggestedResponse,
      timestamp: new Date()
    };

    const confirmationMessage = {
      id: messages.length + 7,
      type: 'ai',
      content: "✅ Message sent to Sarah successfully! I'll continue monitoring for any new messages or bookings.",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, sentMessage, confirmationMessage]);
    setShowResponseOptions(false);
    setIsEditing(false);
    setEditedResponse('');
    setSuggestedResponse('');
  };

  const handleEditResponse = () => {
    setIsEditing(true);
    setEditedResponse(suggestedResponse);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md border-b border-gray-800 p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/08a4f4ba-9ef9-40ea-862d-d241858358af.png" alt="PropCloud" className="h-8 w-auto" />
          </div>
          <Button 
            variant="ghost" 
            onClick={handleLogout}
            className="text-white hover:text-teal-500"
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
                  <div className="bg-teal-600/20 border border-teal-500 rounded-lg px-4 py-2">
                    <p className="text-teal-500 text-sm font-medium">{message.content}</p>
                  </div>
                </div>
              )}
              
              {message.type === 'guest' && (
                <div className="flex items-start space-x-3 mb-4">
                  <div className="bg-orange-500 rounded-full p-2">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 max-w-2xl border border-gray-700">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-orange-500 font-medium text-sm">Sarah</span>
                      <Clock className="h-3 w-3 text-gray-400" />
                      <span className="text-gray-400 text-xs">Just now</span>
                    </div>
                    <p className="text-white text-sm">{message.content}</p>
                  </div>
                </div>
              )}

              {message.type === 'sent' && (
                <div className="flex justify-end mb-4">
                  <div className="bg-teal-600 rounded-lg p-4 max-w-2xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-white font-medium text-sm">You → Sarah</span>
                      <span className="text-teal-100 text-xs">Sent</span>
                    </div>
                    <p className="text-white text-sm">{message.content}</p>
                  </div>
                </div>
              )}

              {(message.type === 'user' || message.type === 'ai') && (
                <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-3 max-w-2xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`rounded-full p-2 ${message.type === 'ai' ? 'bg-teal-600' : 'bg-gray-600'}`}>
                      <MessageCircle className="h-4 w-4 text-white" />
                    </div>
                    <Card className={`${message.type === 'ai' ? 'bg-gray-800' : 'bg-teal-600'} border-gray-700`}>
                      <CardContent className="p-4">
                        <p className="text-white text-sm">{message.content}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Response Options */}
          {showResponseOptions && (
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
              <h3 className="text-white font-medium mb-3">Suggested Response:</h3>
              {isEditing ? (
                <div className="space-y-3">
                  <textarea
                    value={editedResponse}
                    onChange={(e) => setEditedResponse(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white text-sm resize-none"
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
                  <div className="bg-gray-800 border border-gray-600 rounded-lg p-3">
                    <p className="text-white text-sm">{suggestedResponse}</p>
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
        <Card className="bg-gray-900 border-gray-700">
          <CardContent className="p-4">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="bg-gray-800 border-gray-600 text-white"
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button 
                onClick={handleSend}
                className="bg-teal-600 hover:bg-teal-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default App;
