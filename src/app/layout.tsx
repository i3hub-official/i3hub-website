import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Header with primary brand color */}
        <header className="bg-primary text-white p-4 sticky top-0 z-50">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* Logo with text */}
              <Image
                src="/logo.png"
                alt="i3Hub Logo"
                width={120}
                height={120}
                className="h-15 w-auto"
              />
              {/* <span className="text-xl font-bold">i3Hub</span> */}
            </Link>

            <div className="space-x-6">
              <Link
                href="/videos"
                className="hover:text-secondary transition-colors"
              >
                Videos
              </Link>
              <Link
                href="/tools"
                className="hover:text-secondary transition-colors"
              >
                Tools
              </Link>
              <Link
                href="/about"
                className="hover:text-secondary transition-colors"
              >
                About
              </Link>
            </div>
          </nav>
        </header>

        {/* Main content area */}
        <main className="flex-grow">{children}</main>

        {/* Footer with black brand color */}
        <footer className="bg-black text-white p-8 text-center">
          <div className="container mx-auto">
            {/* Footer Logo */}
            <div className="flex justify-center mb-4">
              <Image
                src="/logo.png"
                alt="i3Hub Logo"
                width={60}
                height={60}
                className="h-15 w-auto"
              />
            </div>

            <p className="text-lg font-semibold mb-2">i3Hub</p>
            <p className="text-secondary mb-4">
              Innovate · Integrate · Inspire
            </p>
            <div className="flex justify-center space-x-6 mb-4">
              <a
                href="https://www.youtube.com/@i3hub.official"
                className="hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                YouTube
              </a>
              <Link
                href="https://github.com/orgs/i3hub-official"
                className="hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                GitHub
              </Link>
              <Link
                href="https://x.com/i3hubofficial"
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                Twitter
              </Link>
              <Link
                href="https://discord.gg/EQyx535Bv3"
                className="hover:text-primary transition-colors"
                aria-label="Discord"
              >
                Discord
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} i3Hub. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
