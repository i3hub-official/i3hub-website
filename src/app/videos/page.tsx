import React from "react";
import {
  Play,
  Youtube,
  Clock,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Video,
} from "lucide-react";
import { FiArrowRight, FiYoutube } from "react-icons/fi";

export default function ModernVideosPage() {
  const videoCategories = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "AI Pair Programming",
      description:
        "Watch real-time AI collaboration sessions. See how to effectively prompt and work with AI as your coding partner.",
      status: "Coming Soon",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Project Build-Alongs",
      description:
        "Complete projects from idea to deployment. Follow along and build your portfolio with AI assistance.",
      status: "Coming Soon",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: <Play className="w-12 h-12" />,
      title: "Tool Setup Guides",
      description:
        "Step-by-step setup for your AI development environment. Get started quickly with the right tools.",
      status: "Coming Soon",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Code Review with AI",
      description:
        "Learn how to review, refactor, and improve code using AI. Master the art of AI-assisted code quality.",
      status: "Coming Soon",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Live Coding Sessions",
      description:
        "Real-time coding streams where we tackle challenges and build features with AI collaboration.",
      status: "Coming Soon",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
    },
    {
      icon: <Youtube className="w-12 h-12" />,
      title: "YouTube Content",
      description:
        "All our free content available on YouTube. Start learning now while we build the full library.",
      status: "Available Now",
      link: "https://www.youtube.com/@i3hub.official",
      linkText: "Watch on YouTube",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
    },
  ];

  const stats = [
    {
      icon: <Play className="w-8 h-8" />,
      value: "50+",
      label: "Tutorials",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "25+",
      label: "Hours of Content",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "100%",
      label: "Project-Based",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      value: "1K+",
      label: "Developers Learning",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const learningPaths = [
    {
      number: "01",
      title: "Foundations",
      description: "Setup & core AI collaboration",
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Web Development",
      description: "Build modern web applications",
      icon: <Video className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Advanced Projects",
      description: "Complex AI collaboration patterns",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      number: "04",
      title: "Mastery",
      description: "Expert-level AI development",
      icon: <Play className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        {/* Animated Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
                Learn with AI
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-8 leading-tight">
              Video Library
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Master AI-assisted development through{" "}
              <span className="font-semibold text-slate-800">
                project-based video tutorials
              </span>
              —no memorization required.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`inline-flex p-2 rounded-xl bg-gradient-to-r ${stat.gradient} text-white mb-4`}
              >
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-slate-800 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Video Categories Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-24">
          {videoCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Status badge (moved to top-right) */}
              <div
                className={`absolute top-4 right-4 inline-flex px-4 py-1.5 rounded-lg ${
                  category.status === "Available Now"
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                } text-xs font-medium shadow-sm`}
              >
                {category.status}
              </div>

              <div className="relative z-10">
                {/* Icon with gradient */}
                <div
                  className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${category.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>

                <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                  {category.title}
                </h2>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Link/CTA */}
                {category.link && (
                  <a
                    href={category.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 group/link mt-2`}
                  >
                    <FiYoutube className="w-4 h-4 mr-2" />
                    {category.linkText}
                    <FiArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Paths Section */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl border border-white/50 p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Structured Learning Paths
              </h2>
              <p className="text-slate-600 text-lg">
                Follow our curated progression from beginner to AI development
                mastery
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {learningPaths.map((path, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    {/* Step number */}
                    <div className="inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800 font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-200">
                      {path.number}
                    </div>

                    {/* Connecting line */}
                    {index < learningPaths.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-200 to-purple-200 -z-10"></div>
                    )}
                  </div>

                  <div className="flex items-center justify-center mb-3">
                    <div
                      className={`p-2 rounded-xl bg-gradient-to-br ${path.gradient} text-white`}
                    >
                      {path.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {path.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {path.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Get Early Access</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Be the first to know when new video content drops and get
              exclusive early access to tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-xl border border-white/30 bg-white/20 text-white placeholder-blue-200 focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:scale-105 transition-transform">
                Notify Me
              </button>
            </div>
          </div>
        </div>

        {/* YouTube CTA */}
        <div className="text-center mt-16">
          <a
            href="https://www.youtube.com/@i3hub.official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            <Youtube className="w-6 h-6 mr-3" />
            Start Learning on YouTube
            <ArrowRight className="w-5 h-5 ml-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
