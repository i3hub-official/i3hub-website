"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import {
  Phone,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Loader,
  RefreshCw,
  Edit,
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

export default function PhoneVerificationPage() {
  const [verificationStatus, setVerificationStatus] = useState("pending"); // 'pending', 'verifying', 'verified', 'failed'
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [phoneNumber, setPhoneNumber] = useState("+1 (555) ***-1234"); // Masked phone number
  const [fullPhoneNumber, setFullPhoneNumber] = useState("+1 (555) 123-1234"); // For display after verification
  const [error, setError] = useState("");
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  // Focus first input on load
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // Countdown timer for resend OTP
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleOtpChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // Auto-focus to next input
    if (value && index < 5) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }

    // Auto-submit if all fields are filled
    if (newOtp.every((digit) => digit !== "") && index === 5) {
      handleVerifyOtp();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Move to previous input on backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = inputRefs.current[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    const pastedDigits = pastedData.replace(/\D/g, "").split("").slice(0, 6);

    if (pastedDigits.length === 6) {
      const newOtp = [...otp];
      pastedDigits.forEach((digit: string, index: number) => {
        newOtp[index] = digit;
      });
      setOtp(newOtp);

      // Focus the last input
      if (inputRefs.current[5]) {
        inputRefs.current[5].focus();
      }
    }
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setError("Please enter the complete 6-digit code");
      return;
    }

    setIsLoading(true);
    setVerificationStatus("verifying");

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);

      // For demo purposes, consider 123456 as valid OTP
      if (enteredOtp === "123456") {
        setVerificationStatus("verified");
      } else {
        setVerificationStatus("failed");
        setError("Invalid verification code. Please try again.");
      }
    }, 1500);
  };

  const handleResendOtp = () => {
    setCountdown(30);
    setOtp(["", "", "", "", "", ""]);
    setVerificationStatus("pending");
    setError("");

    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }

    // Simulate API call to resend OTP
    alert("New verification code has been sent to your phone.");
  };

  const handleChangePhoneNumber = () => {
    // In a real app, this would navigate back to phone number entry
    window.history.back();
  };

  const handleContinue = () => {
    // Navigate to dashboard or next step
    window.location.href = "/dashboard";
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
              onClick={() => window.history.back()}
              className="flex items-center text-sm text-blue-600 hover:text-blue-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back
            </motion.button>

            {verificationStatus === "verified" ? (
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
                  Phone Number Verified!
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg text-slate-600 mb-6"
                >
                  Your phone number{" "}
                  <span className="font-semibold text-slate-800">
                    {fullPhoneNumber}
                  </span>{" "}
                  has been successfully verified.
                </motion.p>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContinue}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  Continue to Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200/50 mb-6"
                  >
                    <Phone className="w-8 h-8 text-blue-600" />
                  </motion.div>

                  <motion.h1
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-4"
                  >
                    Verify Your Phone
                  </motion.h1>

                  <motion.p
                    variants={itemVariants}
                    className="text-lg text-slate-600 mb-2"
                  >
                    Enter the 6-digit code sent to your phone
                  </motion.p>

                  <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-center space-x-2 mb-6"
                  >
                    <span className="text-slate-800 font-medium">
                      {phoneNumber}
                    </span>
                    <button
                      onClick={handleChangePhoneNumber}
                      className="text-blue-600 hover:text-blue-700 flex items-center text-sm"
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Change
                    </button>
                  </motion.div>
                </div>

                {/* OTP Input */}
                <motion.div variants={itemVariants} className="mb-8">
                  <div className="flex justify-center space-x-2 md:space-x-4 mb-4">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => {
                          inputRefs.current[index] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        disabled={
                          isLoading || verificationStatus === "verifying"
                        }
                        className={`w-12 h-12 md:w-14 md:h-14 text-center text-xl font-semibold border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                          error
                            ? "border-red-300 focus:ring-red-500"
                            : "border-slate-300 focus:ring-blue-500"
                        } ${isLoading ? "opacity-70" : ""}`}
                      />
                    ))}
                  </div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-red-600 text-sm mb-4"
                    >
                      {error}
                    </motion.p>
                  )}

                  <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleVerifyOtp}
                    disabled={
                      isLoading ||
                      verificationStatus === "verifying" ||
                      otp.some((digit) => digit === "")
                    }
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-75"
                  >
                    {isLoading || verificationStatus === "verifying" ? (
                      <>
                        <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                        Verifying...
                      </>
                    ) : (
                      "Verify Code"
                    )}
                  </motion.button>
                </motion.div>

                {/* Resend OTP */}
                <motion.div variants={itemVariants} className="text-center">
                  <p className="text-slate-600 mb-4">
                    Didn&apos;t receive the code?
                  </p>

                  <button
                    onClick={handleResendOtp}
                    disabled={countdown > 0}
                    className={`inline-flex items-center text-sm font-medium ${
                      countdown > 0
                        ? "text-slate-400"
                        : "text-blue-600 hover:text-blue-700"
                    }`}
                  >
                    <RefreshCw className="w-4 h-4 mr-1" />
                    {countdown > 0 ? `Resend in ${countdown}s` : "Resend code"}
                  </button>
                </motion.div>
              </>
            )}

            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
            >
              <h3 className="text-lg font-medium text-blue-800 mb-2">
                Why verify your phone?
              </h3>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Enhanced security for your account</li>
                <li>• Faster account recovery if needed</li>
                <li>• Important security notifications</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
