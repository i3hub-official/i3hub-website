import Link from "next/link";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        {/* Hero Section - Remove any white backgrounds */}
        <section className="min-h-[100vh] flex items-center justify-center relative px-6 bg-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative z-10 text-center max-w-7xl mx-auto">
            {/* Subtle Badge */}
            <div className="inline-flex items-center px-6 py-2 mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 mr-2" />
              The Future of Coding Education
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Code with{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI
              </span>
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent block mt-4">
                Not from Memory
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Master the art of AI-assisted development. i3Hub teaches you how
              to leverage cutting-edge tools to build real projects, focusing on
              problem-solving and architecture over syntax memorization.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                href="/videos"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <Play className="w-5 h-5 mr-3" />
                  Start Learning Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/about"
                className="group relative px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  Explore The Method
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
          </div>
        </section>

        {/* Value Proposition Section - Make background transparent */}
        <section className="py-20 relative bg-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative z-10 container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Why The i3Hub Method Works
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {valueProps.map((prop, index) => (
                <div
                  key={index}
                  className={`group relative p-8 bg-gradient-to-br ${prop.bgGradient} backdrop-blur-sm rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${prop.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10 text-center">
                    <div
                      className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${prop.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {prop.icon}
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                      {prop.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Make background transparent */}
        <section className="py-20 relative bg-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-2xl"></div>
          <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                How You Code?
              </span>
            </h2>

            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Stop struggling with memorization. Start building with
              intelligence.
            </p>

            <Link
              href="/tools"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-3" />
              Get Started with Free Tools
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
