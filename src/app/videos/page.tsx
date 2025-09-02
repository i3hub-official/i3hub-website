export default function VideosPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">i3Hub Videos</h1>
      <p className="text-lg mb-4">
        Welcome to your video library. Here you&apos;ll find all tutorials on
        AI-assisted coding.
      </p>
      <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
        <p className="font-mono">🚧 Video catalog coming soon! 🚧</p>
        <p className="mt-2">
          For now, check out the latest on{" "}
          <a
            href="https://www.youtube.com/@i3hub.official"
            className="text-primary hover:underline font-semibold"
          >
            YouTube
          </a>
          .
        </p>
      </div>
    </div>
  );
}
