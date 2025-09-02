"use client";

import React, { useState, useEffect } from "react";
import {
  AlertTriangle,
  Lightbulb,
  Bot,
  Rocket,
  Users,
  ArrowRight,
  Play,
  Code,
  Target,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

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

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // ✅ proper cubic-bezier array (not string[])
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

export default function ModernAboutPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              (entry.target as HTMLElement).dataset.section || "0"
            );
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("[data-section]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const differentiators = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI as a Co-Pilot",
      description:
        "We don't treat AI as an add-on. It's a core part of your workflow from day one.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Projects, Not Theory",
      description:
        "Every concept connects to a real project. You don't just learn—you build.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description:
        "You learn alongside peers, share ideas, and grow together. i3Hub is a movement, not just a course.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-6" data-section="0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl"></div>
        <div className="container mx-auto max-w-6xl relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-800">
                Our Story
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-8 leading-tight"
            >
              About i3Hub
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            >
              Coding shouldn&apos;t feel like memorizing a dictionary.
              We&apos;re here to{" "}
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                rewrite how the next generation
              </span>{" "}
              learns to build with AI.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-6" data-section="1">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Content */}
            <div className="space-y-8">
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="p-3 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h2 className="text-4xl font-black text-slate-800">
                  The Problem
                </h2>
              </motion.div>

              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <motion.p variants={itemVariants} className="relative pl-6">
                  <span className="absolute left-0 top-3 w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></span>
                  Traditional coding education is stuck in the past. Beginners
                  are told to memorize syntax, grind through tutorials, and copy
                  projects that never leave the classroom.
                </motion.p>

                <motion.p variants={itemVariants} className="relative pl-6">
                  <span className="absolute left-0 top-3 w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></span>
                  Meanwhile, AI has already changed how real developers work.
                  The gap between learning and industry has never been wider.
                </motion.p>
              </div>
            </div>

            {/* Visual Card */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-red-200/50 text-center shadow-xl">
                <div className="text-8xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold mb-6 text-slate-800">
                  The Frustration
                </h3>
                <blockquote className="text-lg text-slate-600 italic leading-relaxed border-l-4 border-red-400 pl-6">
                  &quot;Why am I learning to code like it&apos;s 2010, when the
                  industry is already building for 2030?&quot;
                </blockquote>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Spark Section */}
      <section className="py-24 px-6" data-section="2">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-12 border border-yellow-200/50 shadow-xl">
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 text-white mb-6"
                >
                  <Lightbulb className="w-8 h-8" />
                </motion.div>
                <h2 className="text-4xl font-black bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-6">
                  The Spark
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-slate-700 leading-relaxed text-center">
                  i3Hub was born to close this gap. We believe coding education
                  should feel like{" "}
                  <span className="font-bold text-orange-600">creating</span>,
                  not cramming. Our approach blends hands-on projects, community
                  support, and AI as your coding partner—not just a tool.
                </p>

                {/* Feature highlights */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  {["Creating", "Collaborating", "Building"].map(
                    (word, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                        className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200/50"
                      >
                        <div className="text-3xl font-black bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                          {word}
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 px-6" data-section="3">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200/50 mb-6"
            >
              <Target className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-semibold text-purple-800">
                Our Differentiators
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl font-black text-slate-800 mb-6"
            >
              What Makes Us{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Different
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              Three core principles that set i3Hub apart from traditional coding
              education
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid lg:grid-cols-3 gap-8"
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative p-8 bg-gradient-to-br ${item.bgGradient} backdrop-blur-sm rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden`}
              >
                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors mb-6">
                    {item.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-slate-600 transition-colors">
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6" data-section="4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-12 border border-white/50 shadow-xl text-center">
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-4xl font-black text-slate-800 mb-6">
                  Ready to Learn{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Differently?
                  </span>
                </h2>

                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
                  Join the developers choosing{" "}
                  <span className="font-semibold text-blue-600">
                    creativity
                  </span>
                  ,{" "}
                  <span className="font-semibold text-purple-600">
                    collaboration
                  </span>
                  , and{" "}
                  <span className="font-semibold text-pink-600">
                    AI-driven learning
                  </span>{" "}
                  over memorization and frustration.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center">
                    <Play className="w-5 h-5 mr-3" />
                    Start Free
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                <button className="group px-8 py-4 bg-slate-100 backdrop-blur-sm border-2 border-slate-300 text-slate-700 font-bold rounded-2xl hover:border-blue-400 hover:bg-slate-200 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center">
                    <Code className="w-5 h-5 mr-3 group-hover:text-blue-600 transition-colors" />
                    Explore Tools
                  </div>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
