import React from "react";
import {
  Video,
  Youtube,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function VideosPage() {
  const videos = [
    {
      icon: <Video className="w-12 h-12" />,
      title: "Getting Started with AI Coding",
      description:
        "Kick off your journey with the fundamentals of AI-assisted coding.",
      link: "https://www.youtube.com/@i3hub.official",
      linkText: "Watch on YouTube",
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50",
    },
    {
      icon: <Youtube className="w-12 h-12" />,
      title: "AI + Web Development",
      description:
        "Learn how to integrate AI tools directly into your dev workflow.",
      link: "https://www.youtube.com/@i3hub.official",
      linkText: "Watch on YouTube",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "More Videos Coming Soon",
      description:
        "We&apos;re preparing hands-on tutorials to take your coding to the next level.",
      note: "Stay tuned!",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
                Learn with Video
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-8 leading-tight">
              i3Hub Videos
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore tutorials, walkthroughs, and coding sessions—powered by{" "}
              <span className="font-semibold text-slate-800">
                AI collaboration
              </span>
              .
            </p>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-24">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-gradient-to-br ${video.bgGradient} backdrop-blur-sm rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
            >
              {/* Background hover gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${video.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${video.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {video.icon}
                </div>

                <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                  {video.title}
                </h2>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {video.description}
                </p>

                {/* Note */}
                {video.note && (
                  <p className="text-sm text-slate-500 mb-6 italic">
                    {video.note}
                  </p>
                )}

                {/* Link */}
                {video.link && (
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r ${video.gradient} text-white font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 group/link`}
                  >
                    {video.linkText}
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-purple-600 text-white font-semibold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer">
            <Sparkles className="w-5 h-5 mr-3" />
            Subscribe for upcoming tutorials
            <ArrowRight className="w-5 h-5 ml-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
