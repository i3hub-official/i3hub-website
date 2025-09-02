"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Code2,
  Bot,
  BookOpen,
  Trophy,
  Calendar,
  TrendingUp,
  Users,
  FileText,
  ChevronRight,
  Sparkles,
  Clock,
  Award,
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

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample user data
  const user = {
    name: "Alex Johnson",
    level: "Intermediate",
    points: 1250,
    joinDate: "January 2023",
  };

  // Sample courses in progress
  const coursesInProgress = [
    {
      id: 1,
      title: "AI-Powered Web Development",
      progress: 65,
      nextLesson: "Building a REST API with AI assistance",
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      progress: 30,
      nextLesson: "Implementing your first neural network",
      icon: <Bot className="w-6 h-6" />,
    },
  ];

  // Sample recent projects
  const recentProjects = [
    {
      id: 1,
      title: "E-commerce AI Assistant",
      description:
        "An AI-powered shopping assistant that helps users find products",
      status: "Completed",
      date: "2 days ago",
    },
    {
      id: 2,
      title: "Code Review Tool",
      description: "An AI tool that reviews code and suggests improvements",
      status: "In Progress",
      date: "1 week ago",
    },
  ];

  // Sample achievements
  const achievements = [
    {
      id: 1,
      title: "First Project",
      description: "Completed your first AI-assisted project",
      icon: <Trophy className="w-5 h-5" />,
      earned: true,
    },
    {
      id: 2,
      title: "Code Master",
      description: "Written 1000+ lines of code with AI assistance",
      icon: <Award className="w-5 h-5" />,
      earned: true,
    },
    {
      id: 3,
      title: "Community Helper",
      description: "Helped 5 other students in the community",
      icon: <Users className="w-5 h-5" />,
      earned: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Sparkles className="w-8 h-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-slate-800">i3Hub</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-medium text-slate-800">{user.name}</p>
                <p className="text-sm text-slate-600">{user.level} Developer</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                {user.name.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold text-slate-800 mb-2"
          >
            Welcome back, {user.name}!
          </motion.h1>
          <motion.p variants={itemVariants} className="text-slate-600">
            Continue your AI development journey. You have {user.points}{" "}
            learning points.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Courses in Progress */}
          <div className="lg:col-span-2">
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

              <div className="space-y-6">
                {coursesInProgress.map((course) => (
                  <motion.div
                    key={course.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100/50 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl text-white mr-4">
                        {course.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-1">
                          {course.title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-3">
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

                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                          Continue learning
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Projects */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-800">
                  Recent Projects
                </h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View all
                </button>
              </div>

              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-200/50 hover:bg-slate-100/50 transition-colors duration-200"
                  >
                    <div>
                      <h3 className="font-medium text-slate-800">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {project.description}
                      </p>
                      <div className="flex items-center mt-2">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            project.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {project.status}
                        </span>
                        <span className="text-xs text-slate-500 ml-3">
                          {project.date}
                        </span>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats and Achievements */}
          <div>
            {/* Stats Card */}
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
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">
                      Hours spent learning
                    </p>
                    <p className="font-semibold text-slate-800">24.5 hours</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-xl mr-4">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Lessons completed</p>
                    <p className="font-semibold text-slate-800">42 lessons</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-xl mr-4">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Weekly streak</p>
                    <p className="font-semibold text-slate-800">12 days</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements Card */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-lg"
            >
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Achievements
              </h2>

              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    variants={itemVariants}
                    className={`flex items-center p-3 rounded-xl border ${
                      achievement.earned
                        ? "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200/50"
                        : "bg-slate-100/50 border-slate-200/50 opacity-70"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg mr-3 ${
                        achievement.earned
                          ? "bg-amber-100 text-amber-600"
                          : "bg-slate-200 text-slate-400"
                      }`}
                    >
                      {achievement.icon}
                    </div>
                    <div>
                      <h3
                        className={`font-medium ${
                          achievement.earned
                            ? "text-slate-800"
                            : "text-slate-500"
                        }`}
                      >
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {achievement.description}
                      </p>
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
