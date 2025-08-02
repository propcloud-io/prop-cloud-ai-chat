
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import EnhancedBackground from "@/components/EnhancedBackground";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <EnhancedBackground />
      
      <div className="relative z-10">
        <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Logo />
            <nav className="flex space-x-4">
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
                Dashboard
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white">
                Sign Out
              </Button>
            </nav>
          </div>
        </header>

        <div className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-teal-600">Welcome to PropCore</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Your AI-powered property management dashboard is ready.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-300 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="text-white">Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Manage your property portfolio</p>
                  <Button className="mt-4 bg-teal-600 hover:bg-teal-700">
                    View Properties
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-300 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="text-white">AI Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Chat with your AI co-host</p>
                  <Button className="mt-4 bg-teal-600 hover:bg-teal-700">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-300 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="text-white">Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">View performance insights</p>
                  <Button className="mt-4 bg-teal-600 hover:bg-teal-700">
                    View Analytics
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
