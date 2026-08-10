export default function BlogPage() {
  return (
    <section className="space-y-10">
      <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">
        <h1 className="text-3xl font-semibold text-brand-navy sm:text-4xl">Blog</h1>
        <p className="mt-4 text-slate-600">Blog index placeholder with a card grid for blog posts.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {['Post one', 'Post two', 'Post three', 'Post four'].map((post) => (
          <article key={post} className="rounded-3xl bg-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{post}</h2>
            <p className="mt-3 text-slate-600">Blog card placeholder content.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
