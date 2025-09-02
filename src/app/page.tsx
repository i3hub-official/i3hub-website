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
  X,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Github,
  Chrome,
} from "lucide-react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loginErrors, setLoginErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoginSubmitting, setIsLoginSubmitting] = useState(false);

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

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (loginErrors[name]) {
      setLoginErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateSignupForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateLoginForm = () => {
    const newErrors: Record<string, string> = {};

    if (!loginData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!loginData.password) {
      newErrors.password = "Password is required";
    }

    setLoginErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateSignupForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        alert("Signup successful! Welcome to i3Hub.");
        setShowSignupModal(false);
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }, 1500);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateLoginForm()) {
      setIsLoginSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoginSubmitting(false);
        alert("Login successful! Welcome back to i3Hub.");
        setShowLoginModal(false);
        setLoginData({
          email: "",
          password: "",
        });
      }, 1500);
    }
  };

  const handleSocialLogin = (provider: string) => {
    alert(`Logging in with ${provider}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Signup Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowSignupModal(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-700"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Create Account
              </h2>
              <p className="text-slate-600">Join the i3Hub community</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => handleSocialLogin("GitHub")}
                className="flex items-center justify-center px-4 py-2 border border-slate-300 rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </button>
              <button
                onClick={() => handleSocialLogin("Google")}
                className="flex items-center justify-center px-4 py-2 border border-slate-300 rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-colors"
              >
                <Chrome className="w-5 h-5 mr-2" />
                Google
              </button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">
                  Or continue with email
                </span>
              </div>
            </div>

            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleSignupChange}
                    className={`block w-full pl-10 pr-3 py-2 border rounded-xl focus:ring-2 focus:outline-none ${
                      errors.name
                        ? "border-red-300 focus:ring-red-500"
                        : "border-slate-300 focus:ring-blue-500"
                    }`}
                    placeholder="Enter your name"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleSignupChange}
                    className={`block w-full pl-10 pr-3 py-2 border rounded-xl focus:ring-2 focus:outline-none ${
                      errors.email
                        ? "border-red-300 focus:ring-red-500"
                        : "border-slate-300 focus:ring-blue-500"
                    }`}
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleSignupChange}
                    className={`block w-full pl-10 pr-10 py-2 border rounded-xl focus:ring-2 focus:outline-none ${
                      errors.password
                        ? "border-red-300 focus:ring-red-500"
                        : "border-slate-300 focus:ring-blue-500"
                    }`}
                    placeholder="At least 8 characters"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-slate-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-slate-400" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleSignupChange}
                    className={`block w-full pl-10 pr-10 py-2 border rounded-xl focus:ring-2 focus:outline-none ${
                      errors.confirmPassword
                        ? "border-red-300 focus:ring-red-500"
                        : "border-slate-300 focus:ring-blue-500"
                    }`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-slate-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-slate-400" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-75"
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="text-center mt-4 text-sm text-slate-600">
              Already have an account?{" "}
              <button
                onClick={() => {
                  setShowSignupModal(false);
                  setShowLoginModal(true);
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-700"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Welcome Back
              </h2>
              <p className="text-slate-600">Sign in to your i3Hub account</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => handleSocialLogin("GitHub")}
                className="flex items-center justify-center px-4 py-2 border border-slate-300 rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </button>
              <button
                onClick={() => handleSocialLogin("Google")}
                className="flex items-center justify-center px-4 py-2 border border-slate-300 rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-colors"
              >
                <Chrome className="w-5 h-5 mr-2" />
                Google
              </button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">
                  Or continue with email
                </span>
              </div>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="loginEmail"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="loginEmail"
                    name="email"
                    type="email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    className={`block w-full pl-10 pr-3 py-2 border rounded-xl focus:ring-2 focus:outline-none ${
                      loginErrors.email
                        ? "border-red-300 focus:ring-red-500"
                        : "border-slate-300 focus:ring-blue-500"
                    }`}
                    placeholder="you@example.com"
                  />
                </div>
                {loginErrors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {loginErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="loginPassword"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="loginPassword"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={loginData.password}
                    onChange={handleLoginChange}
                    className={`block w-full pl-10 pr-10 py-2 border rounded-xl focus:ring-2 focus:outline-none ${
                      loginErrors.password
                        ? "border-red-300 focus:ring-red-500"
                        : "border-slate-300 focus:ring-blue-500"
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-slate-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-slate-400" />
                    )}
                  </button>
                </div>
                {loginErrors.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {loginErrors.password}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 block text-sm text-slate-700"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="/forgotpassword"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoginSubmitting}
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-75"
              >
                {isLoginSubmitting ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <div className="text-center mt-4 text-sm text-slate-600">
              Don&apos;t have an account?{" "}
              <button
                onClick={() => {
                  setShowLoginModal(false);
                  setShowSignupModal(true);
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}

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
            <button
              onClick={() => setShowSignupModal(true)}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Play className="w-5 h-5 mr-3" />
                Start Learning Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => setShowLoginModal(true)}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center">
                Sign In
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
              <button
                onClick={() => setShowSignupModal(true)}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 mr-3" />
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => setShowLoginModal(true)}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white/70 backdrop-blur-sm border-2 border-slate-200 text-slate-800 font-semibold rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Sign In
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
