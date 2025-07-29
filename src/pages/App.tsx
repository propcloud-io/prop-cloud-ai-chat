
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Send, Edit3, LogOut } from "lucide-react";
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

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: "Thanks! I've analyzed your Downtown Loft property. I'll now monitor for any bookings or guest messages and notify you immediately. You're all set!",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/2c4d779f-1c7c-4027-b6c6-a3cf1362deef.png" alt="PropCloud" className="h-8 w-8" />
            <span className="text-xl font-bold text-teal-400">PropCloud</span>
          </div>
          <Button 
            variant="ghost" 
            onClick={handleLogout}
            className="text-gray-300 hover:text-teal-400"
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
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-2xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`rounded-full p-2 ${message.type === 'ai' ? 'bg-teal-600' : 'bg-slate-600'}`}>
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <Card className={`${message.type === 'ai' ? 'bg-slate-700' : 'bg-teal-600'} border-slate-600`}>
                  <CardContent className="p-4">
                    <p className="text-white text-sm">{message.content}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-4">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="bg-slate-700 border-slate-600 text-white"
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
