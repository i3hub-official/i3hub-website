"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Clock,
  Server,
  Database,
  Cpu,
  Globe,
  MessageCircle,
  Mail,
  BarChart3,
  Sparkles,
  RefreshCw,
} from "lucide-react";

const StatusPage = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const systems = [
    {
      id: "api",
      name: "API Services",
      description: "Core application programming interfaces",
      status: "operational",
      icon: <Server className="w-5 h-5" />,
      updated: "2 minutes ago",
    },
    {
      id: "database",
      name: "Database Services",
      description: "Primary and replica database clusters",
      status: "operational",
      icon: <Database className="w-5 h-5" />,
      updated: "5 minutes ago",
    },
    {
      id: "ai",
      name: "AI Assistance",
      description: "Machine learning and code assistance services",
      status: "operational",
      icon: <Cpu className="w-5 h-5" />,
      updated: "1 minute ago",
    },
    {
      id: "cdn",
      name: "CDN & Edge Network",
      description: "Content delivery and edge caching services",
      status: "operational",
      icon: <Globe className="w-5 h-5" />,
      updated: "3 minutes ago",
    },
    {
      id: "learning",
      name: "Learning Platform",
      description: "Course content and interactive learning environment",
      status: "operational",
      icon: <Sparkles className="w-5 h-5" />,
      updated: "2 minutes ago",
    },
    {
      id: "analytics",
      name: "Analytics Services",
      description: "Progress tracking and learning analytics",
      status: "operational",
      icon: <BarChart3 className="w-5 h-5" />,
      updated: "4 minutes ago",
    },
  ];

  const statusHistory = [
    {
      date: "Today",
      events: [
        {
          time: "09:15 AM",
          system: "API Services",
          status: "operational",
          message: "All systems operational",
        },
      ],
    },
    {
      date: "Yesterday",
      events: [
        {
          time: "02:30 AM",
          system: "Database Services",
          status: "maintenance",
          message: "Routine maintenance completed",
        },
      ],
    },
    {
      date: "March 15, 2024",
      events: [
        {
          time: "11:45 AM",
          system: "CDN & Edge Network",
          status: "degraded",
          message: "Temporary slowdown in Asian regions - resolved",
        },
      ],
    },
  ];

  const refreshStatus = () => {
    setIsRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    // Set up automatic refresh every 5 minutes
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-green-600 bg-green-100";
      case "degraded":
        return "text-yellow-600 bg-yellow-100";
      case "outage":
        return "text-red-600 bg-red-100";
      case "maintenance":
        return "text-blue-600 bg-blue-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle2 className="w-5 h-5" />;
      case "degraded":
      case "outage":
        return <AlertCircle className="w-5 h-5" />;
      case "maintenance":
        return <Clock className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Sparkles className="w-8 h-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-slate-800">
                i3Hub Status
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                System Status
              </h2>
              <div className="flex items-center text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                <span>All systems are operational</span>
              </div>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <button
                onClick={refreshStatus}
                disabled={isRefreshing}
                className="flex items-center text-sm text-slate-600 hover:text-slate-800 mr-4 disabled:opacity-50"
              >
                <RefreshCw
                  className={`w-4 h-4 mr-1 ${
                    isRefreshing ? "animate-spin" : ""
                  }`}
                />
                Refresh
              </button>
              <div className="text-sm text-slate-500">
                Last updated: {formatTime(lastUpdated)}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* System Status Cards */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg mb-8"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                System Components
              </h3>

              <div className="space-y-4">
                {systems.map((system) => (
                  <div
                    key={system.id}
                    className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-200/50"
                  >
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-4">
                        {system.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800">
                          {system.name}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {system.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div
                        className={`flex items-center px-3 py-1 rounded-full ${getStatusColor(
                          system.status
                        )} mr-3`}
                      >
                        {getStatusIcon(system.status)}
                        <span className="ml-1 text-sm font-medium capitalize">
                          {system.status === "operational"
                            ? "Operational"
                            : system.status}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500">
                        Updated {system.updated}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Incident History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                Incident History
              </h3>

              <div className="space-y-6">
                {statusHistory.map((period, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-slate-700 mb-3">
                      {period.date}
                    </h4>
                    <div className="space-y-3">
                      {period.events.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className="flex items-start p-3 bg-slate-50/50 rounded-xl border border-slate-200/50"
                        >
                          <div
                            className={`p-2 rounded-full ${getStatusColor(
                              event.status
                            )} mr-3`}
                          >
                            {getStatusIcon(event.status)}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h5 className="font-medium text-slate-800">
                                {event.system}
                              </h5>
                              <span className="text-sm text-slate-500">
                                {event.time}
                              </span>
                            </div>
                            <p className="text-sm text-slate-600 mt-1">
                              {event.message}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg mb-8"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                System Status
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">API Services</span>
                  <span className="flex items-center text-green-600">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Database Services</span>
                  <span className="flex items-center text-green-600">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">AI Assistance</span>
                  <span className="flex items-center text-green-600">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">CDN & Edge Network</span>
                  <span className="flex items-center text-green-600">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Learning Platform</span>
                  <span className="flex items-center text-green-600">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Analytics Services</span>
                  <span className="flex items-center text-green-600">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    Operational
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="mb-4 opacity-90">
                If you&apos;re experiencing issues not reflected here, our team
                is ready to help.
              </p>

              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center hover:opacity-80 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  <span>Chat with support</span>
                </a>
                <a
                  href="#"
                  className="flex items-center hover:opacity-80 transition-opacity"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  <span>Send us an email</span>
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-white/20">
                <h4 className="font-medium mb-2">Subscribe to Updates</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-3 py-2 rounded-l-lg text-slate-800 focus:outline-none"
                  />
                  <button className="bg-blue-800 px-4 py-2 rounded-r-lg hover:bg-blue-900 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
