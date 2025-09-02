// src/app/about/page.tsx
export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">About My Method</h1>
      <p className="text-lg mb-4">
        Traditional coding tutorials focus on syntax memorization. They teach
        you HOW to write a for-loop in JavaScript, but not WHY or WHEN to use it
        to solve a real problem.
      </p>
      <p className="text-lg mb-4">
        I focus on the <strong>conceptual understanding</strong> and the{" "}
        <strong>process of collaborating with AI</strong>. You learn to
        articulate problems, evaluate solutions, and piece them together like a
        architect, not a bricklayer.
      </p>
      <p className="text-lg">
        The tools are just the beginning. The real skill is in the conversation.
      </p>
    </div>
  );
}
