"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import {
  Shield,
  CheckCircle,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Loader,
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
      ease: "easeOut", // ✅ string, not array
    },
  },
};

export default function PasswordResetVerificationPage() {
  const [verificationStatus, setVerificationStatus] = useState("verifying"); // 'verifying', 'valid', 'invalid', 'expired'
  const [isLoading, setIsLoading] = useState(true);

  // Simulate token verification
  useEffect(() => {
    // In a real application, this would verify the token from the URL
    // against your backend API
    const verifyToken = async () => {
      setIsLoading(true);

      // Simulate API call delay
      setTimeout(() => {
        // For demonstration purposes, let's randomly determine the status
        // In a real app, this would be based on the actual token validation
        const statuses = ["valid", "invalid", "expired"];
        const randomStatus =
          statuses[Math.floor(Math.random() * statuses.length)];

        setVerificationStatus(randomStatus);
        setIsLoading(false);
      }, 2000);
    };

    verifyToken();
  }, []);

  const handleContinueToReset = () => {
    // Navigate to the actual password reset page
    window.location.href = "/reset-password";
  };

  const handleBackToLogin = () => {
    // Navigate back to login page
    window.history.back();
  };

  const handleRequestNewLink = () => {
    // In a real app, this would trigger a new password reset email
    alert("A new password reset link has been sent to your email.");
    setVerificationStatus("verifying");
    setIsLoading(true);

    setTimeout(() => {
      setVerificationStatus("valid");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-6 py-12 max-w-2xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 rounded-3xl blur-3xl -z-10"></div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
            {/* Back button */}
            <motion.button
              variants={itemVariants}
              onClick={handleBackToLogin}
              className="flex items-center text-sm text-blue-600 hover:text-blue-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to login
            </motion.button>

            {isLoading ? (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="text-center py-12"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200/50 mb-6"
                >
                  <Loader className="w-8 h-8 text-blue-600" />
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="text-2xl md:text-3xl font-black text-slate-800 mb-4"
                >
                  Verifying Your Link
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-slate-600"
                >
                  Please wait while we verify your password reset link...
                </motion.p>
              </motion.div>
            ) : verificationStatus === "valid" ? (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="text-center py-8"
              >
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 border border-green-200/50 mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="text-2xl md:text-3xl font-black text-slate-800 mb-4"
                >
                  Link Verified
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-slate-600 mb-8"
                >
                  Your password reset link has been successfully verified. You
                  can now create a new password for your account.
                </motion.p>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContinueToReset}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  Continue to Reset Password
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </motion.div>
            ) : verificationStatus === "expired" ? (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="text-center py-8"
              >
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-200/50 mb-6"
                >
                  <Shield className="w-10 h-10 text-amber-600" />
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="text-2xl md:text-3xl font-black text-slate-800 mb-4"
                >
                  Link Expired
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-slate-600 mb-6"
                >
                  This password reset link has expired. For security reasons,
                  reset links are only valid for 1 hour.
                </motion.p>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleRequestNewLink}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200 mb-4"
                >
                  Request a New Link
                </motion.button>

                <motion.button
                  variants={itemVariants}
                  onClick={handleBackToLogin}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Return to Login
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="text-center py-8"
              >
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-red-100 to-pink-100 border border-red-200/50 mb-6"
                >
                  <XCircle className="w-10 h-10 text-red-600" />
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="text-2xl md:text-3xl font-black text-slate-800 mb-4"
                >
                  Invalid Link
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-slate-600 mb-6"
                >
                  This password reset link is invalid or has already been used.
                  Please request a new password reset link.
                </motion.p>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleRequestNewLink}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 mb-4"
                >
                  Request a New Link
                </motion.button>

                <motion.button
                  variants={itemVariants}
                  onClick={handleBackToLogin}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Return to Login
                </motion.button>
              </motion.div>
            )}

            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
            >
              <h3 className="text-lg font-medium text-blue-800 mb-2">
                Security Notice
              </h3>
              <p className="text-blue-600 text-sm">
                For your security, password reset links are only valid for 1
                hour and can only be used once. If you did not request a
                password reset, please ignore this email or contact support if
                you have concerns.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
