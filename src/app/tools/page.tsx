import Link from "next/link";

export default function ToolsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Essential Tools</h1>
      <p className="text-lg mb-8">
        Your setup to start building with AI. No memorization required.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Tool 1 */}
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 text-secondary">
            Visual Studio Code
          </h2>
          <p className="mb-4">
            Your mission control for code. Free, powerful, and extensible.
          </p>
          <Link
            href="https://code.visualstudio.com/"
            className="text-primary hover:underline font-medium"
          >
            Download VSCode →
          </Link>
        </div>

        {/* Tool 2 */}
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 text-secondary">
            AI Assistant
          </h2>
          <p className="mb-4">Your pair programmer. Choose your weapon:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>
              <Link
                href="https://chat.openai.com/"
                className="text-primary hover:underline"
              >
                ChatGPT
              </Link>
            </li>
            <li>
              <Link
                href="https://claude.ai/"
                className="text-primary hover:underline"
              >
                Claude
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/features/copilot"
                className="text-primary hover:underline"
              >
                GitHub Copilot
              </Link>
            </li>
          </ul>
        </div>

        {/* Tool 3 - UPDATED: GitHub Desktop */}
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 text-secondary">
            GitHub Desktop
          </h2>
          <p className="mb-4">
            The visual way to work with Git. Perfect for beginners—no command
            line memorization needed!
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
            <li>Easy version control with clicks instead of commands</li>
            <li>Visualize changes before committing</li>
            <li>Simple branching and merging</li>
          </ul>
          <Link
            href="https://desktop.github.com/"
            className="text-primary hover:underline font-medium"
          >
            Download GitHub Desktop →
          </Link>
        </div>

        {/* Tool 4 - Keep Git as reference */}
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 text-secondary">
            Git (Optional)
          </h2>
          <p className="mb-4">
            The underlying version control system. GitHub Desktop uses this, but
            you don&apos;t need to install it separately.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            ℹ️ GitHub Desktop includes Git automatically. Only install this
            separately if you want to use the command line.
          </p>
          <Link
            href="https://git-scm.com/"
            className="text-primary hover:underline font-medium"
          >
            Install Git (CLI) →
          </Link>
        </div>

        {/* Tool 5 */}
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 text-secondary">Browser</h2>
          <p className="mb-4">
            Chrome or Edge for testing and developer tools.
          </p>
          <div className="flex space-x-4 mt-3">
            <Link
              href="https://www.google.com/chrome/"
              className="text-primary hover:underline text-sm"
            >
              Chrome
            </Link>
            <Link
              href="https://www.microsoft.com/edge"
              className="text-primary hover:underline text-sm"
            >
              Edge
            </Link>
          </div>
        </div>

        {/* Empty card for grid balance or add another tool later */}
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 text-secondary">
            More to Come
          </h2>
          <p className="mb-4">
            As we build together, I&apos;ll share more tools and extensions that
            enhance the AI coding workflow.
          </p>
          <p className="text-primary font-medium">Stay tuned!</p>
        </div>
      </div>

      {/* Workflow Explanation */}
      <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Recommended Workflow
        </h2>
        <ol className="list-decimal list-inside space-y-3">
          <li className="font-medium">
            Use <span className="text-secondary">VSCode</span> as your main
            coding environment
          </li>
          <li className="font-medium">
            Keep your <span className="text-secondary">AI Assistant</span> open
            in a browser tab for quick questions
          </li>
          <li className="font-medium">
            Use <span className="text-secondary">GitHub Desktop</span> to save
            and manage your project versions
          </li>
          <li className="font-medium">
            Test your projects in your{" "}
            <span className="text-secondary">browser</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
