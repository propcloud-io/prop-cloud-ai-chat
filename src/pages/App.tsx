import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Send, BarChart3, Calendar, Settings, Bell, User, Home, Building, DollarSign, TrendingUp, Clock, Star, MapPin, Wifi, Coffee, Car, Users, Bot, Edit3, Eye, CheckCircle, AlertCircle, TrendingDown } from "lucide-react";
import Logo from "@/components/Logo";

const App = () => {
  const [activeLink, setActiveLink] = useState('dashboard');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: 'Downtown Loft',
      location: 'Austin, TX',
      status: 'active',
      revenue: 4500,
      occupancy: 85,
      rating: 4.8,
      img: 'https://images.unsplash.com/photo-1554995207-c1e4918364e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 2,
      name: 'Beachfront Villa',
      location: 'Miami, FL',
      status: 'inactive',
      revenue: 6200,
      occupancy: 92,
      rating: 4.9,
      img: 'https://images.unsplash.com/photo-1568605114967-8e62808f9a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
    {
      id: 3,
      name: 'Mountain Cabin',
      location: 'Aspen, CO',
      status: 'active',
      revenue: 3800,
      occupancy: 78,
      rating: 4.7,
      img: 'https://images.unsplash.com/photo-1533613220915-609f76c09495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
  ]);

  const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);
  const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo size="sm" />
            
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-6">
                <a
                  href="#"
                  className={`text-gray-400 hover:text-white transition-colors ${activeLink === 'dashboard' ? 'text-white' : ''}`}
                  onClick={() => setActiveLink('dashboard')}
                >
                  <Home className="h-5 w-5 mr-2 inline-block" />
                  Dashboard
                </a>
                <a
                  href="#"
                  className={`text-gray-400 hover:text-white transition-colors ${activeLink === 'properties' ? 'text-white' : ''}`}
                  onClick={() => setActiveLink('properties')}
                >
                  <Building className="h-5 w-5 mr-2 inline-block" />
                  Properties
                </a>
                <a
                  href="#"
                  className={`text-gray-400 hover:text-white transition-colors ${activeLink === 'revenue' ? 'text-white' : ''}`}
                  onClick={() => setActiveLink('revenue')}
                >
                  <DollarSign className="h-5 w-5 mr-2 inline-block" />
                  Revenue
                </a>
                <a
                  href="#"
                  className={`text-gray-400 hover:text-white transition-colors ${activeLink === 'analytics' ? 'text-white' : ''}`}
                  onClick={() => setActiveLink('analytics')}
                >
                  <BarChart3 className="h-5 w-5 mr-2 inline-block" />
                  Analytics
                </a>
                <a
                  href="#"
                  className={`text-gray-400 hover:text-white transition-colors ${activeLink === 'calendar' ? 'text-white' : ''}`}
                  onClick={() => setActiveLink('calendar')}
                >
                  <Calendar className="h-5 w-5 mr-2 inline-block" />
                  Calendar
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <button onClick={toggleSettings} className="text-gray-400 hover:text-white focus:outline-none transition-colors">
                  <Settings className="h-5 w-5" />
                </button>
                <button onClick={toggleNotifications} className="text-gray-400 hover:text-white focus:outline-none transition-colors relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-teal-500 rounded-full"></span>
                </button>
                <div className="relative">
                  <button onClick={toggleUserMenu} className="focus:outline-none transition-colors">
                    <User className="h-6 w-6 text-gray-400 hover:text-white" />
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg z-10">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                        Profile
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                        Settings
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                        Logout
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <p className="text-gray-400">Welcome back! Here's an overview of your properties.</p>
        </header>

        {/* Property Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {properties.map((property) => (
            <Card key={property.id} className="bg-gray-900/80 border-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <img src={property.img} alt={property.name} className="rounded-md mb-4 h-40 w-full object-cover" />
                <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
                <p className="text-gray-400 mb-2">
                  <MapPin className="h-4 w-4 inline-block mr-1" />
                  {property.location}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm text-gray-400">Status:</p>
                    <p className={`font-medium ${property.status === 'active' ? 'text-teal-500' : 'text-red-500'}`}>
                      {property.status}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Rating:</p>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <p className="font-medium">{property.rating}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Revenue:</p>
                    <p className="font-medium">${property.revenue}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Occupancy:</p>
                    <p className="font-medium">{property.occupancy}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-gray-900/80 border-gray-800/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 flex items-center justify-center flex-col">
                <MessageCircle className="h-8 w-8 text-teal-500 mb-2" />
                <p className="text-white font-medium text-center">Respond to Guests</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/80 border-gray-800/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 flex items-center justify-center flex-col">
                <Calendar className="h-8 w-8 text-teal-500 mb-2" />
                <p className="text-white font-medium text-center">View Calendar</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/80 border-gray-800/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 flex items-center justify-center flex-col">
                <TrendingUp className="h-8 w-8 text-teal-500 mb-2" />
                <p className="text-white font-medium text-center">Analyze Revenue</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/80 border-gray-800/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 flex items-center justify-center flex-col">
                <Edit3 className="h-8 w-8 text-teal-500 mb-2" />
                <p className="text-white font-medium text-center">Update Listings</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-4">
            <li className="bg-gray-900/80 border-gray-800/50 backdrop-blur-sm rounded-md p-4">
              <div className="flex items-center space-x-3">
                <div className="bg-teal-500 rounded-full p-2">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">New message from Sarah</p>
                  <p className="text-gray-400 text-sm">30 minutes ago</p>
                </div>
              </div>
            </li>
            <li className="bg-gray-900/80 border-gray-800/50 backdrop-blur-sm rounded-md p-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 rounded-full p-2">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Booking confirmed for Downtown Loft</p>
                  <p className="text-gray-400 text-sm">1 hour ago</p>
                </div>
              </div>
            </li>
            <li className="bg-gray-900/80 border-gray-800/50 backdrop-blur-sm rounded-md p-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 rounded-full p-2">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Revenue processed for Beachfront Villa</p>
                  <p className="text-gray-400 text-sm">2 hours ago</p>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default App;
