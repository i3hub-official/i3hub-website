import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import {
  FiYoutube,
  FiGithub,
  FiTwitter,
  FiMessageCircle,
  FiArrowRight,
} from "react-icons/fi";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "i3Hub - Learn to Code with AI",
  description:
    "Stop memorizing code. Start building. Learn the modern way to code by leveraging AI as your pair programmer. Let's imagine, innovate, and inspire together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100`}
      >
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
          <nav className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/logo_black.png"
                alt="i3Hub Logo"
                width={40}
                height={40}
                className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </Link>

            <div className="flex space-x-4 sm:space-x-6 md:space-x-8">
              <Link
                href="/videos"
                className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium text-sm sm:text-base hover:scale-105"
              >
                Videos
              </Link>
              <Link
                href="/tools"
                className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium text-sm sm:text-base hover:scale-105"
              >
                Tools
              </Link>
              <Link
                href="/about"
                className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium text-sm sm:text-base hover:scale-105"
              >
                About
              </Link>
            </div>
          </nav>
        </header>

        {/* Main content - no forced padding, let pages control spacing */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <div className="grid md:grid-cols-3 gap-10 text-center">
              {/* Brand */}
              <div className="flex flex-col items-center">
                <Image
                  src="/logo.png"
                  alt="i3Hub Logo"
                  width={64}
                  height={64}
                  className="h-12 sm:h-16 w-auto mb-4"
                />
                <p className="text-blue-200 text-base sm:text-lg mb-3">
                  Innovate · Integrate · Inspire
                </p>
                <p className="text-blue-300 text-sm max-w-sm">
                  Transforming how developers learn and build with AI-assisted
                  coding. No memorization—just creation.
                </p>
              </div>

              {/* Explore */}
              <div className="flex flex-col items-center">
                <h3 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">
                  Explore
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/videos"
                    className="flex items-center justify-center text-blue-300 hover:text-white transition-colors duration-300 group text-sm sm:text-base"
                  >
                    <FiArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Videos
                  </Link>
                  <Link
                    href="/tools"
                    className="flex items-center justify-center text-blue-300 hover:text-white transition-colors duration-300 group text-sm sm:text-base"
                  >
                    <FiArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Tools
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center justify-center text-blue-300 hover:text-white transition-colors duration-300 group text-sm sm:text-base"
                  >
                    <FiArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    About
                  </Link>
                </div>
              </div>

              {/* Connect */}
              <div className="flex flex-col items-center">
                <h3 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">
                  Connect
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.youtube.com/@i3hub.official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 p-3 bg-blue-800/50 rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm"
                    aria-label="YouTube"
                  >
                    <FiYoutube className="w-5 h-5" />
                    <span>YouTube</span>
                  </a>
                  <a
                    href="https://github.com/orgs/i3hub-official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 p-3 bg-blue-800/50 rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm"
                    aria-label="GitHub"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://x.com/i3hubofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 p-3 bg-blue-800/50 rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm"
                    aria-label="Twitter"
                  >
                    <FiTwitter className="w-5 h-5" />
                    <span>Twitter</span>
                  </a>
                  <a
                    href="https://discord.gg/EQyx535Bv3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 p-3 bg-blue-800/50 rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm"
                    aria-label="Discord"
                  >
                    <FiMessageCircle className="w-5 h-5" />
                    <span>Discord</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-blue-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-400 text-xs sm:text-sm">
                © {new Date().getFullYear()} i3Hub. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 mt-3 md:mt-0">
                <span className="text-blue-400 text-xs sm:text-sm">
                  Made with
                </span>
                <div className="w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-blue-400 text-xs sm:text-sm">
                  for developers
                </span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
