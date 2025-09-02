import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] px-4 text-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Subtle Badge */}
          <div className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
            The Future of Coding Education
          </div>

          <h1 className="text-4xl font-bold sm:text-6xl lg:text-7xl mb-6">
            Code with <span className="text-primary">AI</span>, Not
            <span className="block mt-2">from Memory</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Master the art of AI-assisted development. i3Hub teaches you how to
            leverage cutting-edge tools to build real projects, focusing on
            problem-solving and architecture over syntax memorization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/videos"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition shadow-lg hover:shadow-xl"
            >
              Start Learning Free
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition"
            >
              Explore The Method
            </Link>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-gray-600">Developers Learning</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">50+</div>
              <div className="text-gray-600">Projects Built</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-gray-600">AI Assistance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why The i3Hub Method Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovate Faster</h3>
              <p className="text-gray-600">
                Build projects in hours, not weeks. AI handles the boilerplate
                while you focus on creative solutions.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧩</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Integrate Seamlessly
              </h3>
              <p className="text-gray-600">
                Learn to combine AI tools with modern development workflows for
                maximum efficiency.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inspire Others</h3>
              <p className="text-gray-600">
                Join a community of builders who are reshaping how software gets
                made with AI collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform How You Code?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Stop struggling with memorization. Start building with intelligence.
          </p>
          <Link
            href="/tools"
            className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition shadow-lg hover:shadow-xl"
          >
            Get Started with Free Tools
          </Link>
        </div>
      </section>
    </>
  );
}
