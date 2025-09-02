"use client";
import React, { useState, useEffect } from "react";
import {
  Code2,
  Bot,
  Sparkles,
  Rocket,
  Puzzle,
  Users,
  ArrowRight,
  Play,
} from "lucide-react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(
              (prev) =>
                new Set([
                  ...prev,
                  (entry.target as HTMLElement).dataset.section,
                ])
            );
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    document
      .querySelectorAll("[data-section]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "1000+",
      label: "Developers Learning",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      value: "50+",
      label: "Projects Built",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      value: "24/7",
      label: "AI Assistance",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const valueProps = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovate Faster",
      description:
        "Build projects in hours, not weeks. AI handles the boilerplate while you focus on creative solutions.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "Integrate Seamlessly",
      description:
        "Learn to combine AI tools with modern development workflows for maximum efficiency.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Inspire Others",
      description:
        "Join a community of builders who are reshaping how software gets made with AI collaboration.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8"
        data-section="hero"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl"></div>

        <div
          className={`relative z-10 text-center max-w-7xl mx-auto transition-all duration-1000 ${
            visibleSections.has("hero")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          {/* Subtle Badge */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 mt-10 mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold tracking-wide shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            The Future of Coding Education
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-[0.9] sm:leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent block">
              Code with{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI
            </span>
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent block mt-2 sm:mt-4">
              Not from Memory
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Master the art of AI-assisted development. i3Hub teaches you how to
            leverage cutting-edge tools to build real projects, focusing on
            problem-solving and architecture over syntax memorization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center">
                <Play className="w-5 h-5 mr-3" />
                Start Learning Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center">
                Explore The Method
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Social Proof Stats */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
              visibleSections.has("hero")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`inline-flex p-2 rounded-xl bg-gradient-to-r ${stat.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 sm:py-20 relative" data-section="values">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              visibleSections.has("values")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Why The i3Hub Method Works
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Revolutionary approach to learning development in the AI era
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className={`group relative p-6 sm:p-8 bg-gradient-to-br ${
                  prop.bgGradient
                } backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  visibleSections.has("values")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${prop.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`}
                ></div>

                <div className="relative z-10 text-center">
                  <div
                    className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${prop.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {prop.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                    {prop.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20" data-section="cta">
        <div
          className={`text-center transition-all duration-1000 ${
            visibleSections.has("cta")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Your Development Journey?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-12 leading-relaxed">
              Join thousands of developers who are building the future with AI
              assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 mr-3" />
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white/70 backdrop-blur-sm border-2 border-slate-200 text-slate-800 font-semibold rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Elements for Visual Interest */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-24 h-24 bg-gradient-to-r from-cyan-400/25 to-blue-400/25 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Interactive Background Grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none -z-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(90deg, rgb(59 130 246 / 0.1) 1px, transparent 1px),
            linear-gradient(180deg, rgb(59 130 246 / 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>
    </div>
  );
}
