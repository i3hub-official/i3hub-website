export default function AboutPage() {
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-primary">About The i3Hub Method</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead mb-8">
          Traditional coding tutorials focus on syntax memorization. They teach you <em>how</em> to write a for-loop, but not <em>why</em> or <em>when</em> to use it to solve a real problem.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary">We Do Things Differently</h2>
        <p>
          At i3Hub, we focus on <strong>conceptual understanding</strong> and the <strong>process of collaborating with AI</strong>. You learn to:
        </p>
        <ul className="my-6 space-y-2">
          <li>Articulate problems clearly</li>
          <li>Evaluate and refine AI-generated solutions</li>
          <li>Piece components together like an architect, not a bricklayer</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary">The Three I&apos;s</h2>
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="text-center p-4 bg-primary/10 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Innovate</h3>
            <p>Conceive novel solutions and define what you want to build.</p>
          </div>
          <div className="text-center p-4 bg-secondary/10 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Integrate</h3>
            <p>Seamlessly combine modern tools and AI to build efficiently.</p>
          </div>
          <div className="text-center p-4 bg-accent/10 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Inspire</h3>
            <p>Share your creations and knowledge to empower others.</p>
          </div>
        </div>

        <p>
          The tools are just the beginning. The real skill is in the conversation between you and your AI pair programmer.
        </p>
      </div>
    </div>
  );
}