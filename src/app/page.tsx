import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      {/* Using text-primary for the brand name */}
      <h1 className="text-4xl font-bold sm:text-6xl mb-6">
        Welcome to <span className="text-primary">i3Hub</span>
      </h1>
      {/* Using a darker gray (text-gray-700) for better readability than pure black on white */}
      <p className="text-xl text-gray-700 mb-8 max-w-2xl">
        I don&apos;t memorize code. I build things. Learn how to use AI to become a more effective developer and bring your ideas to life.
      </p>
      <div className="space-x-4">
        {/* Primary button uses the primary color */}
        <Link
          href="/videos"
          className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition"
        >
          Watch the Videos
        </Link>
        {/* Secondary button uses a outline with primary color */}
        <Link
          href="/about"
          className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition"
        >
          Learn My Method
        </Link>
      </div>
    </section>
  );
}