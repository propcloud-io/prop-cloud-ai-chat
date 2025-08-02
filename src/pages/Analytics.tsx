import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, DollarSign, Users, Star, Calendar, BarChart3, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from '@/components/Logo';

interface AnalyticsData {
  revenue: number;
  occupancy: number;
  avgRating: number;
  bookings: number;
  views: number;
  conversionRate: number;
  avgBookingValue: number;
  repeatGuests: number;
}

const Analytics: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<AnalyticsData>({
    revenue: 38450,
    occupancy: 85,
    avgRating: 4.9,
    bookings: 142,
    views: 3247,
    conversionRate: 4.4,
    avgBookingValue: 271,
    repeatGuests: 23
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        ...prev,
        revenue: Math.max(35000, prev.revenue + Math.floor((Math.random() - 0.3) * 200)),
        occupancy: Math.max(75, Math.min(95, prev.occupancy + (Math.random() - 0.5) * 1)),
        views: prev.views + Math.floor(Math.random() * 5),
        conversionRate: Math.max(3.0, Math.min(6.0, prev.conversionRate + (Math.random() - 0.5) * 0.1)),
        avgBookingValue: Math.max(200, Math.min(350, prev.avgBookingValue + (Math.random() - 0.5) * 10)),
        bookings: prev.bookings + (Math.random() > 0.98 ? 1 : 0)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800/50 bg-gray-900/30 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <Button
            variant="outline"
            onClick={() => navigate('/app')}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-teal-600">Analytics</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real-time insights and performance metrics for Downtown Loft
          </p>
        </div>

        {/* Key Metrics */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="bg-teal-600/20 rounded-full p-2">
                    <DollarSign className="h-5 w-5 text-teal-600" />
                  </div>
                  <div className="text-xs text-green-400 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12%
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-1">
                  ${data.revenue.toLocaleString()}
                </div>
                <div className="text-gray-400 text-sm">Total Revenue</div>
                <div className="text-xs text-gray-500 mt-1">Last 90 days</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="bg-blue-600/20 rounded-full p-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-xs text-green-400 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +3%
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-1">
                  {data.occupancy.toFixed(0)}%
                </div>
                <div className="text-gray-400 text-sm">Occupancy Rate</div>
                <div className="text-xs text-gray-500 mt-1">Above market avg</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="bg-yellow-600/20 rounded-full p-2">
                    <Star className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div className="text-xs text-gray-400">
                    247 reviews
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-1">
                  {data.avgRating.toFixed(1)}★
                </div>
                <div className="text-gray-400 text-sm">Average Rating</div>
                <div className="text-xs text-gray-500 mt-1">Excellent</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/60 border-gray-800/50 hover:border-teal-600/50 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="bg-purple-600/20 rounded-full p-2">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="text-xs text-green-400 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8%
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-1">
                  {data.bookings}
                </div>
                <div className="text-gray-400 text-sm">Total Bookings</div>
                <div className="text-xs text-gray-500 mt-1">This quarter</div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Analytics */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/60 border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-teal-600" />
                  Conversion Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">Total Views</div>
                    <div className="text-gray-400 text-sm">Last 30 days</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">{data.views.toLocaleString()}</div>
                    <div className="text-xs text-green-400">+15% vs last month</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">Conversion Rate</div>
                    <div className="text-gray-400 text-sm">Views to bookings</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">{data.conversionRate.toFixed(1)}%</div>
                    <div className="text-xs text-green-400">Industry leading</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">Avg Booking Value</div>
                    <div className="text-gray-400 text-sm">Per reservation</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">${data.avgBookingValue}</div>
                    <div className="text-xs text-blue-400">+5% vs market</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/60 border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-teal-600" />
                  Guest Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">Repeat Guests</div>
                    <div className="text-gray-400 text-sm">Return customers</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">{data.repeatGuests}%</div>
                    <div className="text-xs text-green-400">High loyalty</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">Avg Stay Length</div>
                    <div className="text-gray-400 text-sm">Nights per booking</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-600">3.2</div>
                    <div className="text-xs text-gray-400">Optimal</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">Peak Season</div>
                    <div className="text-gray-400 text-sm">Best performing months</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-teal-600">Jun-Aug</div>
                    <div className="text-xs text-yellow-400">94% occupancy</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Market Position */}
          <Card className="bg-gray-900/60 border-gray-800/50 mt-8">
            <CardHeader>
              <CardTitle className="text-white">Market Position & Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-green-900/20 border border-green-600/30 rounded-lg">
                  <div className="flex items-center text-green-400 mb-3">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Top Performer</span>
                  </div>
                  <div className="text-gray-300 text-sm mb-2">
                    Your property ranks in the top 15% of listings in San Francisco
                  </div>
                  <div className="text-xs text-green-400">Revenue 23% above market average</div>
                </div>
                <div className="p-4 bg-blue-900/20 border border-blue-600/30 rounded-lg">
                  <div className="flex items-center text-blue-400 mb-3">
                    <DollarSign className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Pricing Optimization</span>
                  </div>
                  <div className="text-gray-300 text-sm mb-2">
                    Current pricing strategy is performing well
                  </div>
                  <div className="text-xs text-blue-400">Consider 8% increase for Q1 2025</div>
                </div>
                <div className="p-4 bg-purple-900/20 border border-purple-600/30 rounded-lg">
                  <div className="flex items-center text-purple-400 mb-3">
                    <Star className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Guest Experience</span>
                  </div>
                  <div className="text-gray-300 text-sm mb-2">
                    Excellent reviews driving premium bookings
                  </div>
                  <div className="text-xs text-purple-400">4.9★ maintains competitive edge</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Analytics;