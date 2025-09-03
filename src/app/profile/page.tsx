"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion, Variants } from "framer-motion";
import {
  User,
  Edit3,
  Save,
  X,
  Mail,
  Calendar,
  Award,
  BookOpen,
  BarChart3,
  Settings,
  Bell,
  Shield,
  Download,
  Globe,
  Github,
  Twitter,
  Linkedin,
  Sparkles,
  Trophy,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

// Animation variants

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ string, not array
    },
  },
};

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Sample user data
  const [userData, setUserData] = useState({
    name: "Alex Johnson",
    username: "alexjohnson",
    email: "alex.johnson@example.com",
    bio: "Full-stack developer passionate about AI-assisted development and building innovative solutions.",
    location: "San Francisco, CA",
    website: "https://alexjohnson.dev",
    joinDate: "January 15, 2023",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  });

  const [socialLinks, setSocialLinks] = useState({
    github: "alexjohnson",
    twitter: "alexjohnson",
    linkedin: "in/alexjohnson",
  });

  // Sample stats
  const stats = [
    {
      label: "Courses Completed",
      value: 12,
      icon: <BookOpen className="w-5 h-5" />,
    },
    { label: "Projects Built", value: 8, icon: <Zap className="w-5 h-5" /> },
    {
      label: "Learning Hours",
      value: 86,
      icon: <BarChart3 className="w-5 h-5" />,
    },
    { label: "Achievements", value: 5, icon: <Award className="w-5 h-5" /> },
  ];

  // Sample courses in progress
  const coursesInProgress = [
    {
      id: 1,
      title: "Advanced React with AI Assistance",
      progress: 75,
      nextLesson: "State Management with AI",
      duration: "8 hours",
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      progress: 40,
      nextLesson: "Neural Networks Basics",
      duration: "12 hours",
    },
    {
      id: 3,
      title: "DevOps for AI Applications",
      progress: 20,
      nextLesson: "Containerization with Docker",
      duration: "10 hours",
    },
  ];

  // Sample achievements
  const achievements = [
    {
      id: 1,
      title: "First Project",
      description: "Completed your first AI-assisted project",
      icon: <Trophy className="w-6 h-6" />,
      earned: true,
      date: "Feb 15, 2023",
    },
    {
      id: 2,
      title: "Code Master",
      description: "Written 10,000+ lines of code with AI assistance",
      icon: <Target className="w-6 h-6" />,
      earned: true,
      date: "Apr 3, 2023",
    },
    {
      id: 3,
      title: "Community Helper",
      description: "Helped 10 other students in the community",
      icon: <Sparkles className="w-6 h-6" />,
      earned: false,
      date: null,
    },
    {
      id: 4,
      title: "Fast Learner",
      description: "Completed 5 courses in one month",
      icon: <Zap className="w-6 h-6" />,
      earned: true,
      date: "May 22, 2023",
    },
  ];

  // Sample recent activity
  const recentActivity = [
    {
      id: 1,
      action: "Completed",
      item: "Building REST APIs with AI",
      type: "course",
      time: "2 hours ago",
    },
    {
      id: 2,
      action: "Earned",
      item: "Code Master achievement",
      type: "achievement",
      time: "1 day ago",
    },
    {
      id: 3,
      action: "Started",
      item: "DevOps for AI Applications",
      type: "course",
      time: "2 days ago",
    },
    {
      id: 4,
      action: "Shared",
      item: "E-commerce AI Assistant project",
      type: "project",
      time: "3 days ago",
    },
  ];

  const handleSave = () => {
    // In a real app, this would save to a backend
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data here if needed
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
                i3Hub Profile
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-8"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/50 shadow-lg">
            {/* Cover Image */}
            <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <button className="absolute top-4 right-4 bg-white/90 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-white transition-colors">
                Change Cover
              </button>
            </div>

            {/* Profile Content */}
            <div className="px-6 pb-6 -mt-16 relative">
              <div className="flex flex-col md:flex-row md:items-end">
                {/* Avatar */}
                <div className="relative">
                  <Image
                    src={userData.avatar}
                    alt={userData.name}
                    className="w-32 h-32 rounded-2xl border-4 border-white shadow-lg"
                    width={128}
                    height={128}
                  />
                  <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>

                {/* User Info */}
                <div className="flex-1 md:ml-6 mt-4 md:mt-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h1 className="text-2xl font-bold text-slate-800">
                        {userData.name}
                      </h1>
                      <p className="text-slate-600">@{userData.username}</p>
                    </div>

                    <div className="flex space-x-3 mt-4 md:mt-0">
                      {isEditing ? (
                        <>
                          <button
                            onClick={handleSave}
                            className="bg-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center"
                          >
                            <Save className="w-4 h-4 mr-2" />
                            Save Changes
                          </button>
                          <button
                            onClick={handleCancel}
                            className="bg-slate-200 text-slate-700 px-4 py-2 rounded-xl font-medium hover:bg-slate-300 transition-colors flex items-center"
                          >
                            <X className="w-4 h-4 mr-2" />
                            Cancel
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => setIsEditing(true)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center"
                        >
                          <Edit3 className="w-4 h-4 mr-2" />
                          Edit Profile
                        </button>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-600 mt-2">{userData.bio}</p>

                  <div className="flex flex-wrap items-center mt-4 text-sm text-slate-600">
                    <span className="flex items-center mr-4 mb-2">
                      <Mail className="w-4 h-4 mr-1" />
                      {userData.email}
                    </span>
                    <span className="flex items-center mr-4 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      Joined {userData.joinDate}
                    </span>
                    <span className="flex items-center mr-4 mb-2">
                      <Globe className="w-4 h-4 mr-1" />
                      {userData.location}
                    </span>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-3 mt-3">
                    <a
                      href={`https://github.com/${socialLinks.github}`}
                      className="text-slate-600 hover:text-slate-800"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://twitter.com/${socialLinks.twitter}`}
                      className="text-slate-600 hover:text-slate-800"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://linkedin.com/${socialLinks.linkedin}`}
                      className="text-slate-600 hover:text-slate-800"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Stats */}
          <div className="lg:col-span-1">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-lg mb-8"
            >
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Learning Stats
              </h2>

              <div className="space-y-5">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center"
                  >
                    <div className="bg-blue-100 p-3 rounded-xl mr-4">
                      <div className="text-blue-600">{stat.icon}</div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-800">
                        {stat.value}
                      </p>
                      <p className="text-sm text-slate-600">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Account Settings */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-lg"
            >
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Account Settings
              </h2>

              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-100/50 hover:bg-slate-200/50 transition-colors">
                  <div className="flex items-center">
                    <Settings className="w-5 h-5 text-slate-600 mr-3" />
                    <span className="text-slate-700">General Settings</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>

                <button className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-100/50 hover:bg-slate-200/50 transition-colors">
                  <div className="flex items-center">
                    <Bell className="w-5 h-5 text-slate-600 mr-3" />
                    <span className="text-slate-700">Notifications</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>

                <button className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-100/50 hover:bg-slate-200/50 transition-colors">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-slate-600 mr-3" />
                    <span className="text-slate-700">Privacy & Security</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>

                <button className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-100/50 hover:bg-slate-200/50 transition-colors">
                  <div className="flex items-center">
                    <Download className="w-5 h-5 text-slate-600 mr-3" />
                    <span className="text-slate-700">Export Data</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Courses in Progress */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-lg mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-800">
                  Courses in Progress
                </h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View all
                </button>
              </div>

              <div className="space-y-4">
                {coursesInProgress.map((course) => (
                  <motion.div
                    key={course.id}
                    variants={itemVariants}
                    className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-200/50 hover:bg-slate-100/50 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-800">
                        {course.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-2">
                        {course.nextLesson}
                      </p>

                      <div className="mb-2">
                        <div className="flex justify-between text-sm text-slate-600 mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex justify-between text-xs text-slate-500">
                        <span>{course.duration} total</span>
                        <span>{100 - course.progress}% remaining</span>
                      </div>
                    </div>
                    <button className="ml-4 text-blue-600 hover:text-blue-700">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-lg mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-800">
                  Achievements
                </h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View all
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    variants={itemVariants}
                    className={`flex items-start p-4 rounded-xl border ${
                      achievement.earned
                        ? "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200/50"
                        : "bg-slate-100/50 border-slate-200/50 opacity-70"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg mr-4 ${
                        achievement.earned
                          ? "bg-amber-100 text-amber-600"
                          : "bg-slate-200 text-slate-400"
                      }`}
                    >
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-medium ${
                          achievement.earned
                            ? "text-slate-800"
                            : "text-slate-500"
                        }`}
                      >
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-1">
                        {achievement.description}
                      </p>
                      {achievement.earned && (
                        <p className="text-xs text-slate-500">
                          Earned on {achievement.date}
                        </p>
                      )}
                    </div>
                    {achievement.earned && (
                      <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-lg"
            >
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Recent Activity
              </h2>

              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <motion.div
                    key={activity.id}
                    variants={itemVariants}
                    className="flex items-center p-3 bg-slate-50/50 rounded-xl border border-slate-200/50"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <div className="text-blue-600">
                        {activity.type === "course" ? (
                          <BookOpen className="w-4 h-4" />
                        ) : activity.type === "achievement" ? (
                          <Award className="w-4 h-4" />
                        ) : (
                          <Zap className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-800">
                        <span className="font-medium">{activity.action}</span>{" "}
                        {activity.item}
                      </p>
                      <p className="text-sm text-slate-500">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
