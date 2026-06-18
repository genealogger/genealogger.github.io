export default function MarkdownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      {/* This article tag will automatically wrap and style your raw markdown files */}
      <article className="prose prose-slate dark:prose-invert max-w-none prose-h1:text-4xl">
        {children}
      </article>
    </main>
  );
}
