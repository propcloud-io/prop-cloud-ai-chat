import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Logo from "@/components/Logo";

const App = () => {
  const [apiKey, setApiKey] = useState('');
  const [isValidApiKey, setIsValidApiKey] = useState(true);
  const [isApiKeySet, setIsApiKeySet] = useState(false);

  useEffect(() => {
    // Check if API key is already stored in localStorage
    const storedApiKey = localStorage.getItem('apiKey');
    if (storedApiKey) {
      setApiKey(storedApiKey);
      setIsApiKeySet(true);
    }
  }, []);

  const handleApiKeySubmit = () => {
    // Validate API key (replace with actual validation logic)
    if (apiKey.length > 5) {
      setIsValidApiKey(true);
      setIsApiKeySet(true);
      localStorage.setItem('apiKey', apiKey); // Store API key in localStorage
    } else {
      setIsValidApiKey(false);
      setIsApiKeySet(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900/95 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo size="sm" animate={true} />
          <nav className="flex space-x-6">
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white"
              onClick={() => window.location.href = '/'}
            >
              Back to Home
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Card className="bg-gray-900/80 border-gray-800/50 backdrop-blur-xl shadow-2xl max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Welcome to the App!</h2>
            
            {isApiKeySet ? (
              <div className="text-center">
                <p className="text-green-500 text-lg mb-4">API Key is set and valid!</p>
                <p className="text-gray-300">You can now access all the features of the app.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); handleApiKeySubmit(); }} className="space-y-6">
                <div>
                  <Label htmlFor="apiKey" className="text-white text-lg font-medium">Enter Your API Key:</Label>
                  <Input
                    id="apiKey"
                    type="text"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="mt-2 bg-gray-800/70 border-gray-700 text-white focus:border-teal-600 h-12 text-lg"
                    placeholder="Your API Key"
                  />
                  {!isValidApiKey && (
                    <div className="flex items-center mt-2 text-red-500">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      Invalid API Key
                    </div>
                  )}
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white h-12 text-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-600/25 group relative overflow-hidden"
                  disabled={!apiKey}
                >
                  Set API Key
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800/50 text-center text-gray-400">
        <p>&copy; 2025 PropCloud Inc.</p>
      </footer>
    </div>
  );
};

export default App;
