import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, MessageCircle, BarChart3, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from './Logo';
import EnhancedBackground from './EnhancedBackground';
interface PropertyData {
  name: string;
  rating: number;
  price: number;
  occupancy: number;
  reviews: number;
}
interface DashboardProps {
  onStartChat: () => void;
  onBackToHome?: () => void;
  propertyData?: PropertyData | null;
}
const Dashboard: React.FC<DashboardProps> = ({
  onStartChat,
  onBackToHome,
  propertyData
}) => {
  const navigate = useNavigate();
  const handleViewProperties = () => {
    navigate('/properties');
  };
  const handleViewAnalytics = () => {
    navigate('/analytics');
  };
  return <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <EnhancedBackground seed="dashboard" />
      {/* Header */}
      <header className="border-b border-gray-800/50 bg-gray-900/30 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <div className="flex items-center space-x-4">
            {onBackToHome && <Button variant="outline" onClick={onBackToHome} className="border-gray-600 text-gray-300 bg-teal-800 hover:bg-teal-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-teal-600">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Manage your properties, chat with AI, and view analytics
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Properties Card */}
          <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-300 transform hover:scale-105">
            <CardHeader className="text-center">
              <div className="bg-teal-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Home className="h-8 w-8 text-teal-600" />
              </div>
              <CardTitle className="text-white text-xl">Properties</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-6">
                View and manage your property listings, bookings, and performance
              </p>
              <Button onClick={handleViewProperties} className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                View Properties
              </Button>
            </CardContent>
          </Card>

          {/* AI Assistant Card */}
          <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-300 transform hover:scale-105">
            <CardHeader className="text-center">
              <div className="bg-teal-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-teal-600" />
              </div>
              <CardTitle className="text-white text-xl">AI Assistant</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-6">
                Chat with your AI co-host for property management and guest communication
              </p>
              <Button onClick={onStartChat} className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                Start Chat
              </Button>
            </CardContent>
          </Card>

          {/* Analytics Card */}
          <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-300 transform hover:scale-105">
            <CardHeader className="text-center">
              <div className="bg-teal-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-teal-600" />
              </div>
              <CardTitle className="text-white text-xl">Analytics</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-6">
                View performance metrics, revenue insights, and market trends
              </p>
              <Button onClick={handleViewAnalytics} className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>;
};
export default Dashboard;