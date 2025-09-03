"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  BookOpen,
  Video,
  FileText,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Filter,
  Sparkles,
  Bot,
  Code2,
  Brain,
  Zap,
  Target,
  ChevronDown,
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
      ease: "easeOut", 
    },
  },
};

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Resource categories
  const categories = [
    {
      id: "all",
      name: "All Resources",
      icon: <Sparkles className="w-4 h-4" />,
    },
    { id: "tutorials", name: "Tutorials", icon: <Video className="w-4 h-4" /> },
    {
      id: "articles",
      name: "Articles",
      icon: <FileText className="w-4 h-4" />,
    },
    { id: "guides", name: "Guides", icon: <BookOpen className="w-4 h-4" /> },
    {
      id: "case-studies",
      name: "Case Studies",
      icon: <Target className="w-4 h-4" />,
    },
  ];

  // Sample resources data
  const resources = [
    {
      id: 1,
      title: "Getting Started with AI-Assisted Programming",
      description:
        "A comprehensive guide to integrating AI tools into your development workflow and maximizing productivity.",
      type: "guide",
      readTime: "15 min read",
      author: "Sarah Chen",
      date: "May 15, 2023",
      Image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tags: ["Beginner", "AI Tools", "Productivity"],
    },
    {
      id: 2,
      title: "Building a Full-Stack App with ChatGPT and React",
      description:
        "Step-by-step tutorial on creating a modern web application using AI assistance for code generation and problem solving.",
      type: "tutorial",
      readTime: "25 min read",
      author: "Marcus Johnson",
      date: "June 2, 2023",
      Image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tags: ["React", "ChatGPT", "Full-Stack"],
    },
    {
      id: 3,
      title: "The Future of Software Development: AI Pair Programmers",
      description:
        "Exploring how AI is transforming the way developers work and what it means for the future of the industry.",
      type: "article",
      readTime: "10 min read",
      author: "Alex Rivera",
      date: "April 28, 2023",
      Image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tags: ["Future", "AI", "Industry Trends"],
    },
    {
      id: 4,
      title: "How We Increased Development Speed by 40% Using AI Tools",
      description:
        "A case study from a tech startup that integrated AI assistance into their workflow and dramatically improved productivity.",
      type: "case-study",
      readTime: "18 min read",
      author: "TechStart Inc.",
      date: "July 12, 2023",
      Image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tags: ["Case Study", "Productivity", "Startup"],
    },
    {
      id: 5,
      title: "Prompt Engineering for Developers: Best Practices",
      description:
        "Learn how to craft effective prompts to get the best results from AI coding assistants like GitHub Copilot and ChatGPT.",
      type: "guide",
      readTime: "12 min read",
      author: "Jamie Zhang",
      date: "May 30, 2023",
      Image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tags: ["Prompt Engineering", "Best Practices", "AI Assistants"],
    },
    {
      id: 6,
      title: "Debugging with AI: Finding and Fixing Bugs Faster",
      description:
        "How to leverage AI tools to identify, diagnose, and resolve bugs in your code more efficiently.",
      type: "tutorial",
      readTime: "20 min read",
      author: "David Kim",
      date: "June 18, 2023",
      Image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      tags: ["Debugging", "AI Tools", "Productivity"],
    },
  ];

  // Filter resources based on active filter and search query
  const filteredResources = resources.filter((resource) => {
    const matchesFilter =
      activeFilter === "all" || resource.type === activeFilter;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  // Featured resources
  const featuredResources = resources
    .filter((resource) => ["guide", "case-study"].includes(resource.type))
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Sparkles className="w-8 h-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-slate-800">
                i3Hub Resources
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/dashboard"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-slate-800 mb-4"
          >
            Learn AI-Assisted Development
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Discover tutorials, guides, and articles to master the art of coding
            with AI assistance
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-lg mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Resources */}
        {activeFilter === "all" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Featured Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredResources.map((resource) => (
                <motion.div
                  key={resource.id}
                  variants={itemVariants}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    <Image
                      src={resource.Image}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                      width={600}
                      height={192}
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {resource.type.charAt(0).toUpperCase() +
                          resource.type.slice(1)}
                      </span>
                      <span className="mx-2 text-slate-400">•</span>
                      <span className="text-slate-500 text-sm flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {resource.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-2">
                          {resource.author.charAt(0)}
                        </div>
                        <span className="text-sm text-slate-600">
                          {resource.author}
                        </span>
                      </div>

                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                        Read more
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Resources */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            {activeFilter === "all"
              ? "All Resources"
              : categories.find((c) => c.id === activeFilter)?.name}
          </h2>

          {filteredResources.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200/50 mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-2">
                No resources found
              </h3>
              <p className="text-slate-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <motion.div
                  key={resource.id}
                  variants={itemVariants}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-2 rounded-lg ${
                        resource.type === "tutorial"
                          ? "bg-blue-100 text-blue-600"
                          : resource.type === "article"
                          ? "bg-purple-100 text-purple-600"
                          : resource.type === "guide"
                          ? "bg-green-100 text-green-600"
                          : "bg-amber-100 text-amber-600"
                      }`}
                    >
                      {resource.type === "tutorial" ? (
                        <Video className="w-5 h-5" />
                      ) : resource.type === "article" ? (
                        <FileText className="w-5 h-5" />
                      ) : resource.type === "guide" ? (
                        <BookOpen className="w-5 h-5" />
                      ) : (
                        <Target className="w-5 h-5" />
                      )}
                    </div>
                    <span className="ml-2 text-sm text-slate-600">
                      {resource.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm">
                    {resource.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                        {resource.author.charAt(0)}
                      </div>
                      <span className="text-sm text-slate-600">
                        {resource.author}
                      </span>
                    </div>

                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                      Read
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 mt-16 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">
            Stay Updated with AI Development
          </h2>
          <p className="mb-6 opacity-90">
            Get the latest tutorials, articles, and resources delivered to your
            inbox
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
