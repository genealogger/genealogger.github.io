export default function DevLogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white py-16">
      <article className="max-w-2xl mx-auto px-6">
        <header className="mb-10">
          <a
            href="/devlog"
            className="text-indigo-600 font-semibold text-sm hover:underline"
          >
            ← All Logs
          </a>
        </header>

        <div className="flex gap-2 mb-4">
          <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded border border-slate-200">
            Project: Desktop App v0.1
          </span>
          <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded border border-green-200">
            Status: In Development
          </span>
        </div>

        {/* The MDX content injects here */}
        <div className="prose prose-slate prose-indigo lg:prose-lg">
          {children}
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-100 text-slate-500 text-sm">
          Thanks for following my build journey. Have questions?
          <a
            href="https://twitter.com/yourhandle"
            className="text-indigo-600 ml-1"
          >
            Reach out on X.
          </a>
        </footer>
      </article>
    </div>
  );
}
