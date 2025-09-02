"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Loader,
  Shield,
  RefreshCw,
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

export default function EmailVerificationPage() {
  const [verificationStatus, setVerificationStatus] = useState("verifying"); // 'verifying', 'verified', 'expired', 'invalid'
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("user@example.com"); // This would typically come from props or context
  const [countdown, setCountdown] = useState(0);

  // Simulate email verification
  useEffect(() => {
    const verifyEmail = async () => {
      setIsLoading(true);

      // Simulate API call delay
      setTimeout(() => {
        // For demonstration purposes, let's randomly determine the status
        // In a real app, this would be based on the actual token validation
        const statuses = ["verified", "expired", "invalid"];
        const randomStatus =
          statuses[Math.floor(Math.random() * statuses.length)];

        setVerificationStatus(randomStatus);
        setIsLoading(false);
      }, 2500);
    };

    verifyEmail();
  }, []);

  // Countdown for resend email
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleResendEmail = () => {
    // In a real app, this would trigger a new verification email
    setCountdown(60); // 60 seconds until can resend again
    alert("Verification email has been resent!");
  };

  const handleContinueToDashboard = () => {
    // Navigate to dashboard
    window.location.href = "/dashboard";
  };

  const handleBackToSignup = () => {
    // Navigate back to signup page
    window.history.back();
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
              onClick={handleBackToSignup}
              className="flex items-center text-sm text-blue-600 hover:text-blue-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to signup
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
                  Verifying Your Email
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-slate-600"
                >
                  Please wait while we verify your email address...
                </motion.p>
              </motion.div>
            ) : verificationStatus === "verified" ? (
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
                  Email Verified!
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-slate-600 mb-6"
                >
                  Your email address{" "}
                  <span className="font-semibold text-slate-800">{email}</span>{" "}
                  has been successfully verified.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-slate-500 mb-8"
                >
                  Thank you for verifying your email. Your account is now fully
                  activated.
                </motion.p>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContinueToDashboard}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  Continue to Dashboard
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
                  Verification Link Expired
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-slate-600 mb-6"
                >
                  This verification link has expired. For security reasons,
                  verification links are only valid for 24 hours.
                </motion.p>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleResendEmail}
                  disabled={countdown > 0}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200 disabled:opacity-75 mb-4"
                >
                  {countdown > 0 ? (
                    `Resend available in ${countdown}s`
                  ) : (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2" />
                      Resend Verification Email
                    </>
                  )}
                </motion.button>

                <motion.p
                  variants={itemVariants}
                  className="text-slate-500 text-sm"
                >
                  Check your spam folder if you don&apos;t see our email.
                </motion.p>
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
                  Invalid Verification Link
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-slate-600 mb-6"
                >
                  This verification link is invalid or has already been used.
                </motion.p>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleResendEmail}
                  disabled={countdown > 0}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 disabled:opacity-75 mb-4"
                >
                  {countdown > 0 ? (
                    `Resend available in ${countdown}s`
                  ) : (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2" />
                      Resend Verification Email
                    </>
                  )}
                </motion.button>

                <motion.button
                  variants={itemVariants}
                  onClick={handleBackToSignup}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Return to Sign Up
                </motion.button>
              </motion.div>
            )}

            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
            >
              <h3 className="text-lg font-medium text-blue-800 mb-2">
                Need Help?
              </h3>
              <p className="text-blue-600 text-sm">
                If you&apos;re having trouble verifying your email, please check
                your spam folder or contact our support team at
                support@i3hub.com.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
