"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ChevronDown,
  Search,
  MessageCircle,
  Mail,
  BookOpen,
  Zap,
  User,
  CreditCard,
  Shield,
  Globe,
  Sparkles,
  BarChart3,
  Smartphone,
  Download,
} from "lucide-react";

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = [
    {
      id: "general",
      name: "General",
      icon: <Sparkles className="w-5 h-5" />,
      questions: [
        {
          id: "general-1",
          question: "What is i3Hub?",
          answer:
            "i3Hub is an AI-powered learning platform that helps developers enhance their skills through interactive courses, projects, and personalized learning paths. Our platform leverages artificial intelligence to provide tailored recommendations and assistance throughout your learning journey.",
        },
        {
          id: "general-2",
          question: "How does the AI assistance work?",
          answer:
            "Our AI assistant analyzes your learning patterns, progress, and goals to provide personalized recommendations, code suggestions, and explanations. It can help you debug code, understand complex concepts, and suggest next steps in your learning path.",
        },
        {
          id: "general-3",
          question: "Is i3Hub free to use?",
          answer:
            "i3Hub offers both free and premium plans. The free plan includes access to basic courses and limited AI assistance, while the premium plan unlocks all courses, advanced AI features, and personalized learning paths.",
        },
        {
          id: "general-4",
          question: "What programming languages are supported?",
          answer:
            "i3Hub currently supports JavaScript, Python, Java, C++, HTML/CSS, React, Node.js, and more. We're continuously adding support for additional languages and frameworks based on user demand.",
        },
      ],
    },
    {
      id: "account",
      name: "Account",
      icon: <User className="w-5 h-5" />,
      questions: [
        {
          id: "account-1",
          question: "How do I create an account?",
          answer:
            "To create an account, click on the 'Sign Up' button on the homepage. You can register using your email address or through GitHub, Google, or Twitter OAuth. Once registered, you'll have immediate access to our free courses.",
        },
        {
          id: "account-2",
          question: "How do I reset my password?",
          answer:
            "If you've forgotten your password, click on 'Forgot Password' on the login page. Enter your email address, and we'll send you a link to reset your password. The link will expire after 24 hours for security reasons.",
        },
        {
          id: "account-3",
          question: "Can I change my username?",
          answer:
            "Currently, usernames cannot be changed once created. Please choose your username carefully during registration.",
        },
        {
          id: "account-4",
          question: "How do I delete my account?",
          answer:
            "To delete your account, go to your Account Settings, then to the Privacy tab. You'll find the option to delete your account there. Please note that this action is permanent and cannot be undone.",
        },
      ],
    },
    {
      id: "billing",
      name: "Billing",
      icon: <CreditCard className="w-5 h-5" />,
      questions: [
        {
          id: "billing-1",
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and in some regions, bank transfers. All payments are processed securely through our encrypted payment gateway.",
        },
        {
          id: "billing-2",
          question: "Can I cancel my subscription anytime?",
          answer:
            "Yes, you can cancel your subscription at any time. After cancellation, you'll still have access to premium features until the end of your current billing period. Once the period ends, your account will revert to the free plan.",
        },
        {
          id: "billing-3",
          question: "Do you offer refunds?",
          answer:
            "We offer a 14-day money-back guarantee for new subscriptions. If you're not satisfied with our platform, contact our support team within 14 days of your initial purchase for a full refund.",
        },
        {
          id: "billing-4",
          question: "How do I update my payment information?",
          answer:
            "You can update your payment information in the Billing section of your account settings. Click on 'Payment Methods' to add, remove, or update your credit card or PayPal information.",
        },
      ],
    },
    {
      id: "learning",
      name: "Learning",
      icon: <BookOpen className="w-5 h-5" />,
      questions: [
        {
          id: "learning-1",
          question: "How are the courses structured?",
          answer:
            "Our courses are divided into modules and lessons. Each lesson includes video explanations, interactive coding exercises, quizzes, and projects. The AI assistant provides personalized help throughout your learning journey.",
        },
        {
          id: "learning-2",
          question: "Can I learn at my own pace?",
          answer:
            "Absolutely! i3Hub is designed for self-paced learning. You can access courses anytime and progress through the material as quickly or slowly as you prefer. Your progress is automatically saved across all devices.",
        },
        {
          id: "learning-3",
          question: "Do you offer certificates?",
          answer:
            "Yes, we offer certificates of completion for all courses. These certificates can be shared on LinkedIn and downloaded as PDFs. We're also working on accredited certifications for certain career paths.",
        },
        {
          id: "learning-4",
          question: "How does the AI-powered project building work?",
          answer:
            "Our AI project assistant guides you through building real-world applications. It provides step-by-step instructions, code suggestions, and debugging help. You can choose from template projects or create your own from scratch.",
        },
      ],
    },
    {
      id: "technical",
      name: "Technical",
      icon: <Zap className="w-5 h-5" />,
      questions: [
        {
          id: "technical-1",
          question: "What are the system requirements?",
          answer:
            "i3Hub works on any modern browser (Chrome, Firefox, Safari, Edge) with JavaScript enabled. For the best experience, we recommend using the latest browser versions. Our code editor works on both desktop and mobile devices.",
        },
        {
          id: "technical-2",
          question: "Do you have a mobile app?",
          answer:
            "Yes, we have mobile apps for both iOS and Android. You can download them from the App Store and Google Play Store. The mobile app allows you to learn on the go, though some advanced features are optimized for desktop use.",
        },
        {
          id: "technical-3",
          question: "How do I report a bug or technical issue?",
          answer:
            "You can report bugs or technical issues through our support system. Click on the 'Help' button in the bottom right corner of the screen or email us at support@i3hub.com. Please include details about the issue and your browser/device information.",
        },
        {
          id: "technical-4",
          question: "Is my code and data secure?",
          answer:
            "We take security seriously. All code and personal data are encrypted in transit and at rest. We never share your code or personal information with third parties without your explicit permission.",
        },
      ],
    },
  ];

  // Filter questions based on search query
  const filteredCategories = categories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Sparkles className="w-8 h-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-slate-800">
                i3Hub Help Center
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            How can we help you?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Find answers to common questions about i3Hub, our AI-powered
            learning platform, account management, billing, and more.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search for answers..."
              className="block w-full pl-10 pr-3 py-4 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="lg:w-1/4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg sticky top-8"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-colors ${
                      activeCategory === category.id
                        ? "bg-blue-100 text-blue-700"
                        : "text-slate-700 hover:bg-slate-100/50"
                    }`}
                  >
                    <span className="mr-3">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>

              {/* Support Links */}
              <div className="mt-8 pt-6 border-t border-slate-200/50">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  Still need help?
                </h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    <span>Chat with us</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    <span>Send us an email</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <BarChart3 className="w-5 h-5 mr-3" />
                    <span>Status page</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Content */}
          <div className="lg:w-3/4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-3">
                  {categories.find((c) => c.id === activeCategory)?.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-800">
                  {categories.find((c) => c.id === activeCategory)?.name}{" "}
                  Questions
                </h2>
              </div>

              {filteredCategories.find((c) => c.id === activeCategory)
                ?.questions.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-slate-600">
                    No results found
                  </h3>
                  <p className="text-slate-500 mt-2">
                    We couldn&apos;t find any questions matching &quot;{searchQuery}&quot;. Try
                    different keywords or browse the categories.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredCategories
                    .find((c) => c.id === activeCategory)
                    ?.questions.map((item) => (
                      <div
                        key={item.id}
                        className="border border-slate-200/50 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="flex justify-between items-center w-full px-5 py-4 text-left bg-slate-50/50 hover:bg-slate-100/50 transition-colors"
                        >
                          <span className="font-medium text-slate-800">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-500 transition-transform ${
                              openItems[item.id] ? "transform rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openItems[item.id] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 py-4 bg-white">
                                <p className="text-slate-600">{item.answer}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                </div>
              )}
            </motion.div>

            {/* Additional Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mt-8 text-white"
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Still have questions?
                  </h3>
                  <p className="opacity-90">
                    Our support team is here to help you get the most out of
                    i3Hub.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact Support
                  </button>
                  <button className="border border-white text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-colors">
                    Visit Community
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
