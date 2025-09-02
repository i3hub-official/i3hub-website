import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import {
  FiYoutube,
  FiGithub,
  FiTwitter,
  FiMessageCircle,
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
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",

  // Social previews
  openGraph: {
    title: "i3Hub - Learn to Code with AI",
    description:
      "Stop memorizing code. Start building with AI as your pair programmer.",
    url: "https://i3hub.vercel.app",
    siteName: "i3Hub",
    images: [
      {
        url: "/og-image.png", // put this in /public
        width: 500,
        height: 500,
        alt: "i3Hub Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "i3Hub - Learn to Code with AI",
    description:
      "Stop memorizing code. Start building with AI as your pair programmer.",
    images: ["/og-image.png"], // same image as above
  },
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

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Professional Footer */}
        <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 py-12">
            {/* Main Footer Content */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 md:gap-12 mb-12">
              {/* Brand Column - Full width on mobile, 2 cols on desktop */}
              <div className="lg:col-span-2 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start mb-6">
                  <Image
                    src="/logo.png"
                    alt="i3Hub Logo"
                    width={80}
                    height={80}
                    className="h-16 w-auto mb-4"
                  />
                  <p className="text-blue-200 text-lg font-semibold mb-3">
                    Innovate · Integrate · Inspire
                  </p>
                  <p className="text-blue-300 text-sm max-w-md leading-relaxed">
                    Transforming how developers learn and build with AI-assisted
                    coding. No memorization—just creation.
                  </p>
                </div>
              </div>

              {/* Explore Column - Compact horizontal */}
              <div className="text-center">
                <h3 className="text-white font-semibold text-lg mb-4">
                  Explore
                </h3>
                <div className="flex flex-row justify-center space-x-3">
                  <Link
                    href="/videos"
                    className="text-blue-300 hover:text-white transition-colors duration-300 text-sm font-medium px-3 py-1 rounded-md bg-blue-800/20 hover:bg-blue-700/30"
                  >
                    Videos
                  </Link>
                  <Link
                    href="/tools"
                    className="text-blue-300 hover:text-white transition-colors duration-300 text-sm font-medium px-3 py-1 rounded-md bg-blue-800/20 hover:bg-blue-700/30"
                  >
                    Tools
                  </Link>
                  <Link
                    href="/about"
                    className="text-blue-300 hover:text-white transition-colors duration-300 text-sm font-medium px-3 py-1 rounded-md bg-blue-800/20 hover:bg-blue-700/30"
                  >
                    About
                  </Link>
                </div>
              </div>

              {/* Connect Column */}
              <div className="text-center md:text-left">
                <h3 className="text-white font-semibold text-lg mb-6">
                  Connect
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://www.youtube.com/@i3hub.official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 bg-blue-800/30 rounded-lg hover:bg-blue-700/50 transition-all duration-300 group"
                    aria-label="YouTube"
                  >
                    <FiYoutube className="w-5 h-5 mb-1" />
                    <span className="text-xs font-medium">YouTube</span>
                  </a>
                  <a
                    href="https://github.com/orgs/i3hub-official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 bg-blue-800/30 rounded-lg hover:bg-blue-700/50 transition-all duration-300 group"
                    aria-label="GitHub"
                  >
                    <FiGithub className="w-5 h-5 mb-1" />
                    <span className="text-xs font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://x.com/i3hubofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 bg-blue-800/30 rounded-lg hover:bg-blue-700/50 transition-all duration-300 group"
                    aria-label="Twitter"
                  >
                    <FiTwitter className="w-5 h-5 mb-1" />
                    <span className="text-xs font-medium">Twitter</span>
                  </a>
                  <a
                    href="https://discord.gg/EQyx535Bv3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 bg-blue-800/30 rounded-lg hover:bg-blue-700/50 transition-all duration-300 group"
                    aria-label="Discord"
                  >
                    <FiMessageCircle className="w-5 h-5 mb-1" />
                    <span className="text-xs font-medium">Discord</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-blue-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} i3Hub. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 text-sm">Made with</span>
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-blue-400 text-sm">for developers</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
