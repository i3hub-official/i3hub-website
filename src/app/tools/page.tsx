"use client";
import React from "react";
import {
  Code2,
  Bot,
  GitBranch,
  Terminal,
  Globe,
  Sparkles,
  ArrowRight,
  Download,
  ExternalLink,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

// Animation Variants
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

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export default function ModernToolsPage() {
  const tools = [
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "Visual Studio Code",
      description:
        "Your mission control for code. Free, powerful, and endlessly extensible.",
      link: "https://code.visualstudio.com/",
      linkText: "Download VSCode",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "AI Assistant",
      description: "Your always-available pair programmer. Choose your ally:",
      subLinks: [
        { name: "ChatGPT", url: "https://chat.openai.com/" },
        { name: "Claude", url: "https://claude.ai/" },
        { name: "GitHub Copilot", url: "https://github.com/features/copilot" },
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: <GitBranch className="w-12 h-12" />,
      title: "GitHub Desktop",
      description:
        "A beginner-friendly, visual way to manage version control—no commands needed!",
      features: [
        "Click-based version control",
        "Visualize changes before committing",
        "Easy branching and merging",
      ],
      link: "https://desktop.github.com/",
      linkText: "Download GitHub Desktop",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: <Terminal className="w-12 h-12" />,
      title: "Git (Optional)",
      description:
        "The engine behind GitHub. Installed automatically with GitHub Desktop—manual setup is optional.",
      note: "ℹ️ Only install separately if you plan to use the command line.",
      link: "https://git-scm.com/",
      linkText: "Install Git (CLI)",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Browser",
      description: "Test, debug, and explore with developer-friendly browsers.",
      subLinks: [
        { name: "Chrome", url: "https://www.google.com/chrome/" },
        { name: "Edge", url: "https://www.microsoft.com/edge" },
      ],
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "More to Come",
      description:
        "As we grow, I'll share new tools and extensions that supercharge your AI coding workflow.",
      note: "Stay tuned!",
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50",
    },
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "VSCode",
      description: "Use as your main coding environment",
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "AI Assistant",
      description: "Keep open in a browser tab",
      icon: <Bot className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "GitHub Desktop",
      description: "Save and manage project versions",
      icon: <GitBranch className="w-6 h-6" />,
    },
    {
      number: "04",
      title: "Browser",
      description: "Test your projects",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        {/* Hero Section with animation */}
        <motion.div
          className="text-center mb-20 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
                Build with AI
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-8 leading-tight">
              Essential Tools
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Your launchpad for building with AI—
              <span className="font-semibold text-slate-800">
                no memorization required
              </span>
              .
            </p>
          </div>
        </motion.div>

        {/* Tools Grid with stagger animation */}
        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              className={`group relative p-8 bg-gradient-to-br ${tool.bgGradient} backdrop-blur-sm rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${tool.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {tool.icon}
                </div>

                <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                  {tool.title}
                </h2>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {tool.description}
                </p>

                {tool.features && (
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-slate-600"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tool.gradient} mr-3`}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {tool.subLinks && (
                  <div className="flex flex-wrap gap-3 mb-6">
                    {tool.subLinks.map((subLink, i) => (
                      <a
                        key={i}
                        href={subLink.url}
                        className={`inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r ${tool.gradient} text-white text-sm font-medium hover:shadow-lg transition-all duration-200 hover:scale-105`}
                      >
                        {subLink.name}
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </a>
                    ))}
                  </div>
                )}

                {tool.note && (
                  <p className="text-sm text-slate-500 mb-6 italic">
                    {tool.note}
                  </p>
                )}

                {tool.link && (
                  <a
                    href={tool.link}
                    className={`inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r ${tool.gradient} text-white font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 group/link`}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {tool.linkText}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Workflow Section */}
        <motion.div
          className="relative"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl border border-white/50 p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Recommended Workflow
              </h2>
              <p className="text-slate-600 text-lg">
                Follow this battle-tested sequence for maximum productivity
              </p>
            </div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={fadeInVariants}
                >
                  <div className="relative mb-6">
                    <div className="inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800 font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-200">
                      {step.number}
                    </div>

                    {index < workflowSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-200 to-purple-200 -z-10"></div>
                    )}
                  </div>

                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer">
            <Sparkles className="w-5 h-5 mr-3" />
            Ready to build something amazing?
            <ArrowRight className="w-5 h-5 ml-3" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
