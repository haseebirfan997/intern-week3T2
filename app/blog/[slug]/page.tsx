interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <section className="space-y-10">
      <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">
        <h1 className="text-3xl font-semibold text-brand-navy sm:text-4xl">Blog Post</h1>
        <p className="mt-4 text-slate-600">Placeholder page for blog post slug: {params.slug}</p>
      </div>

      <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Post title placeholder</h2>
        <p className="mt-4 text-slate-600">This is the individual blog post template placeholder content.</p>
      </div>
    </section>
  );
}
