"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Send,
  User,
  Bot,
  Sparkles,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  Paperclip,
  Mic,
  Zap,
} from "lucide-react";

const ChatPage = () => {
  type Message = {
    id: number;
    text: string;
    sender: string;
    timestamp: Date;
    likes: boolean | null;
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your i3Hub AI assistant. How can I help you with your learning journey today?",
      sender: "ai",
      timestamp: new Date(),
      likes: null,
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Sample AI responses for demonstration
  const aiResponses = [
    "I'd be happy to help with that! Based on your learning progress, I recommend checking out the Advanced React Patterns course next.",
    "Great question! The best way to master state management is through practical projects. Would you like me to suggest a project idea?",
    "I see you're working on the Machine Learning Fundamentals course. Let me explain neural networks in a more intuitive way...",
    "Based on your learning style, I suggest breaking this concept down into smaller chunks. Let's start with the basics.",
    "I've noticed you're making excellent progress with your current project. Would you like me to review your code for optimization opportunities?",
    "That's an advanced topic! Let me provide you with some resources and examples to help you understand it better.",
  ];

  // Sample quick questions for users to select
  const quickQuestions = [
    "Help me with my current project",
    "Explain neural networks",
    "Suggest a learning path",
    "Review my code",
    "Help me debug an issue",
    "Recommend a course",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: "user",
      timestamp: new Date(),
      likes: null,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputText("");
    setIsLoading(true);
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const randomResponse =
        aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const newAiMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "ai",
        timestamp: new Date(),
        likes: null,
      };

      setMessages((prev) => [...prev, newAiMessage]);
      setIsLoading(false);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleLike = (id: number, liked: boolean) => {
    setMessages((prev) =>
      prev.map((message) =>
        message.id === id ? { ...message, likes: liked } : message
      )
    );
  };

  const handleVoiceInput = () => {
    // Placeholder for voice input functionality
    alert("Voice input would be implemented here with speech recognition API");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Sparkles className="w-8 h-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-slate-800">
                i3Hub AI Assistant
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Chat Interface */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg overflow-hidden"
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-3">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold">i3Hub AI Assistant</h2>
                    <p className="text-sm opacity-90">
                      Powered by advanced machine learning
                    </p>
                  </div>
                  <div className="ml-auto flex items-center">
                    <div
                      className={`w-3 h-3 rounded-full mr-2 ${
                        isTyping ? "bg-green-400" : "bg-green-500"
                      }`}
                    ></div>
                    <span className="text-sm">
                      {isTyping ? "Typing..." : "Online"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-[500px] overflow-y-auto p-4 bg-slate-50/50">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`flex max-w-[80%] ${
                          message.sender === "user" ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`flex-shrink-0 mx-2 ${
                            message.sender === "user" ? "ml-2" : "mr-2"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              message.sender === "user"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-purple-100 text-purple-600"
                            }`}
                          >
                            {message.sender === "user" ? (
                              <User className="w-4 h-4" />
                            ) : (
                              <Bot className="w-4 h-4" />
                            )}
                          </div>
                        </div>
                        <div
                          className={`rounded-2xl px-4 py-3 ${
                            message.sender === "user"
                              ? "bg-blue-500 text-white rounded-br-none"
                              : "bg-white border border-slate-200 rounded-bl-none"
                          }`}
                        >
                          <p>{message.text}</p>
                          <div
                            className={`text-xs mt-1 ${
                              message.sender === "user"
                                ? "text-blue-100"
                                : "text-slate-500"
                            }`}
                          >
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>

                          {message.sender === "ai" && (
                            <div className="flex justify-end mt-2">
                              <button
                                onClick={() => handleLike(message.id, true)}
                                className={`p-1 rounded-full mr-1 ${
                                  message.likes === true
                                    ? "text-green-500"
                                    : "text-slate-400 hover:text-green-500"
                                }`}
                              >
                                <ThumbsUp className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleLike(message.id, false)}
                                className={`p-1 rounded-full ${
                                  message.likes === false
                                    ? "text-red-500"
                                    : "text-slate-400 hover:text-red-500"
                                }`}
                              >
                                <ThumbsDown className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="flex max-w-[80%]">
                        <div className="flex-shrink-0 mx-2 mr-2">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-100 text-purple-600">
                            <Bot className="w-4 h-4" />
                          </div>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none px-4 py-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.4s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Quick Questions */}
              <div className="p-3 bg-slate-100/50 border-t border-slate-200/50">
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-slate-200/50 bg-white">
                <div className="flex items-center">
                  <button className="p-2 text-slate-500 hover:text-slate-700 mr-1">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleVoiceInput}
                    className="p-2 text-slate-500 hover:text-slate-700 mr-2"
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                  <div className="flex-1 relative">
                    <textarea
                      ref={inputRef}
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Message i3Hub assistant..."
                      className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      rows={1}
                      style={{ minHeight: "48px", maxHeight: "120px" }}
                    />
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={inputText.trim() === "" || isLoading}
                    className="ml-3 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg mb-6"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                AI Capabilities
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">
                      Code Assistance
                    </h4>
                    <p className="text-sm text-slate-600">
                      Get help with debugging, optimization, and best practices
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">
                      Learning Guidance
                    </h4>
                    <p className="text-sm text-slate-600">
                      Personalized course recommendations and learning paths
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Bot className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">
                      Concept Explanation
                    </h4>
                    <p className="text-sm text-slate-600">
                      Understand complex topics with simplified explanations
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-lg mr-3">
                    <RefreshCw className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">
                      Project Ideas
                    </h4>
                    <p className="text-sm text-slate-600">
                      Get suggestions for projects to practice your skills
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Need Human Help?</h3>
              <p className="mb-4 opacity-90">
                Our support team is available if you need assistance beyond AI
                capabilities.
              </p>

              <div className="space-y-3">
                <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-xl font-medium hover:bg-blue-50 transition-colors">
                  Contact Support Team
                </button>
                <button className="w-full border border-white text-white px-4 py-2 rounded-xl font-medium hover:bg-white/10 transition-colors">
                  Schedule a Call
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-white/20">
                <h4 className="font-medium mb-2">AI Assistant Stats</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/10 p-2 rounded-lg text-center">
                    <div className="font-bold">24/7</div>
                    <div className="opacity-80">Availability</div>
                  </div>
                  <div className="bg-white/10 p-2 rounded-lg text-center">
                    <div className="font-bold">98%</div>
                    <div className="opacity-80">Accuracy</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
