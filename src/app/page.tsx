import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl font-bold sm:text-6xl mb-6">
        Welcome to <span className="text-blue-600">i3Hub</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">
        I don&apos;t memorize code. I build things. Learn how to use AI to
        become a more effective developer and bring your ideas to life.
      </p>
      <div className="space-x-4">
        <Link
          href="/videos"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
        >
          Watch the Videos
        </Link>
        <Link
          href="/about"
          className="px-6 py-3 border border-black font-medium rounded-md hover:bg-gray-100 transition"
        >
          Learn My Method
        </Link>
      </div>
    </section>
  );
}
