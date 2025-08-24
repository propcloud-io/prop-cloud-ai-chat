import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Home, Star, DollarSign, Users, Calendar, TrendingUp, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from '@/components/Logo';
import EnhancedBackground from '@/components/EnhancedBackground';
interface PropertyMetrics {
  occupancyRate: number;
  revenue: number;
  avgRating: number;
  totalBookings: number;
  avgNightly: number;
  nextBooking: string;
}
const Properties: React.FC = () => {
  const navigate = useNavigate();
  const [metrics, setMetrics] = useState<PropertyMetrics>({
    occupancyRate: 85,
    revenue: 12450,
    avgRating: 4.9,
    totalBookings: 47,
    avgNightly: 180,
    nextBooking: "Tomorrow"
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        occupancyRate: Math.max(75, Math.min(95, prev.occupancyRate + (Math.random() - 0.5) * 2)),
        revenue: Math.max(10000, prev.revenue + Math.floor((Math.random() - 0.5) * 100)),
        avgRating: Math.max(4.5, Math.min(5.0, prev.avgRating + (Math.random() - 0.5) * 0.02)),
        totalBookings: prev.totalBookings + (Math.random() > 0.95 ? 1 : 0),
        avgNightly: Math.max(150, Math.min(220, prev.avgNightly + (Math.random() - 0.5) * 5))
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <EnhancedBackground seed="properties" density={0.8} />
      {/* Header */}
      <header className="border-b border-gray-800/50 bg-gray-900/30 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <Button variant="outline" onClick={() => navigate('/app?view=dashboard')} className="border-gray-600 text-gray-300 bg-teal-900 hover:bg-teal-800">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-teal-600">Properties</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Manage your property listings and monitor performance
          </p>
        </div>

        {/* Property Overview */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gray-900/60 border-gray-800/50 mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-600/20 rounded-full p-3">
                    <Home className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl">Downtown Loft</CardTitle>
                    <div className="flex items-center space-x-4 mt-1">
                      <Badge variant="secondary" className="bg-green-900/30 text-green-400 border-green-600/50">
                        Active
                      </Badge>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="h-4 w-4 mr-1" />
                        San Francisco, CA
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-yellow-400 mb-1">
                    <Star className="h-5 w-5 mr-1 fill-current" />
                    <span className="text-lg font-semibold">{metrics.avgRating.toFixed(1)}</span>
                  </div>
                  <div className="text-gray-400 text-sm">247 reviews</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">
                    {metrics.occupancyRate.toFixed(0)}%
                  </div>
                  <div className="text-gray-400 text-sm">Occupancy Rate</div>
                  <div className="text-xs text-green-400 mt-1">
                    <TrendingUp className="h-3 w-3 inline mr-1" />
                    +3% vs last month
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">
                    ${metrics.revenue.toLocaleString()}
                  </div>
                  <div className="text-gray-400 text-sm">Monthly Revenue</div>
                  <div className="text-xs text-green-400 mt-1">
                    <DollarSign className="h-3 w-3 inline mr-1" />
                    +15% vs last month
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">
                    {metrics.totalBookings}
                  </div>
                  <div className="text-gray-400 text-sm">Total Bookings</div>
                  <div className="text-xs text-blue-400 mt-1">
                    <Users className="h-3 w-3 inline mr-1" />
                    This month
                  </div>
                </div>
                <div className="text-center">
                 <div className="text-3xl font-bold text-teal-600 mb-2">
                ${Math.round(metrics.avgNightly)}
               </div>
                  <div className="text-gray-400 text-sm">Avg Nightly Rate</div>
                  <div className="text-xs text-yellow-400 mt-1">
                    <Calendar className="h-3 w-3 inline mr-1" />
                    Market competitive
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/60 border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Live Booking Pipeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-900/20 border border-green-600/30 rounded-lg">
                  <div>
                    <div className="text-white font-medium flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Sarah M. - CONFIRMED
                    </div>
                    <div className="text-gray-400 text-sm">Check-in: Tomorrow • 4.9★ guest</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-semibold">$540</div>
                    <div className="text-gray-400 text-sm">3 nights</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-900/20 border border-blue-600/30 rounded-lg">
                  <div>
                    <div className="text-white font-medium flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      James K. - PENDING
                    </div>
                    <div className="text-gray-400 text-sm">Check-in: Dec 28 • Business traveler</div>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-400 font-semibold">$720</div>
                    <div className="text-gray-400 text-sm">4 nights</div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-900/20 border border-yellow-600/30 rounded-lg">
                  <div>
                    <div className="text-white font-medium flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                      12 INQUIRIES
                    </div>
                    <div className="text-gray-400 text-sm">New Year's week • High demand period</div>
                  </div>
                  <div className="text-right">
                    <div className="text-yellow-400 font-semibold">~$2,400</div>
                    <div className="text-gray-400 text-sm">Potential revenue</div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gray-800/30 rounded-lg">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Next 30 days revenue forecast:</span>
                    <span className="text-teal-600 font-semibold">${(metrics.revenue * 1.15).toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/60 border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">Property Management Hub</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-red-900/20 border border-red-600/30 rounded-lg">
                  <div className="flex items-center text-red-400 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="font-medium">Action Required</span>
                  </div>
                  <div className="text-gray-300 text-sm mb-2">
                    Water heater maintenance due in 3 days
                  </div>
                  <Button size="sm" variant="outline" className="text-xs border-red-600/50 text-red-400 hover:bg-red-900/30">
                    Schedule Service
                  </Button>
                </div>
                <div className="p-3 bg-green-900/20 border border-green-600/30 rounded-lg">
                  <div className="flex items-center text-green-400 mb-2">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="font-medium">Guest Communication</span>
                  </div>
                  <div className="text-gray-300 text-sm mb-2">
                    Sarah M. arriving tomorrow - check-in instructions sent
                  </div>
                  <div className="text-xs text-green-400">Auto-message sent • Response time: 2 min avg</div>
                </div>
                <div className="p-3 bg-blue-900/20 border border-blue-600/30 rounded-lg">
                  <div className="flex items-center text-blue-400 mb-2">
                    <Star className="h-4 w-4 mr-2" />
                    <span className="font-medium">Inventory Status</span>
                  </div>
                  <div className="text-gray-300 text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>Towels & Linens:</span>
                      <span className="text-green-400">✓ Fresh</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cleaning supplies:</span>
                      <span className="text-yellow-400">! Low stock</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Welcome basket:</span>
                      <span className="text-green-400">✓ Ready</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-900/20 border border-purple-600/30 rounded-lg">
                  <div className="flex items-center text-purple-400 mb-2">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span className="font-medium">Revenue Optimization</span>
                  </div>
                  <div className="text-gray-300 text-sm">
                    Peak season pricing activated • +18% premium for holidays
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>;
};
export default Properties;