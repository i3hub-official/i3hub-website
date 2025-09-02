"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, ArrowRight, CheckCircle, ArrowLeft, Shield } from "lucide-react";

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

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmail(value);

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  const handleBackToLogin = () => {
    // Navigate back to login page
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
              onClick={handleBackToLogin}
              className="flex items-center text-sm text-blue-600 hover:text-blue-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to login
            </motion.button>

            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200/50 mb-6"
                  >
                    <Shield className="w-6 h-6 text-blue-600" />
                  </motion.div>

                  <motion.h1
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-4"
                  >
                    Reset Your Password
                  </motion.h1>

                  <motion.p
                    variants={itemVariants}
                    className="text-lg text-slate-600"
                  >
                    Enter your email address and we&apos;ll send you
                    instructions to reset your password.
                  </motion.p>
                </div>

                <motion.form
                  variants={itemVariants}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
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
                        value={email}
                        onChange={handleChange}
                        className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                            : "border-slate-300 focus:ring-blue-500 focus:border-blue-500"
                        }`}
                        placeholder="you@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending Instructions...
                      </>
                    ) : (
                      <>
                        Send Reset Instructions
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </motion.form>

                <motion.div
                  variants={itemVariants}
                  className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
                >
                  <h3 className="text-lg font-medium text-blue-800 mb-2">
                    What to expect
                  </h3>
                  <ul className="space-y-2 text-blue-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>We&apos;ll email you a password reset link</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>The link will expire in 1 hour for security</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        Check your spam folder if you don&apos;t see our email
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </>
            ) : (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="text-center py-8"
              >
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 border border-green-200/50 mb-6"
                >
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="text-2xl md:text-3xl font-black text-slate-800 mb-4"
                >
                  Check Your Email
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-slate-600 mb-6"
                >
                  We&apos;ve sent password reset instructions to{" "}
                  <span className="font-semibold text-slate-800">{email}</span>
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-slate-500 mb-8"
                >
                  Didn&apos;t receive the email? Check your spam folder or{" "}
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    try again
                  </button>
                </motion.p>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBackToLogin}
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Return to Login
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
