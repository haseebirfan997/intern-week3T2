export default function HomePage() {
  return (
    <section className="space-y-14">
      <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">
        <h1 className="text-3xl font-semibold text-brand-navy sm:text-4xl">Home</h1>
        <p className="mt-4 max-w-2xl text-slate-600">Placeholder hero, feature highlights, testimonial section, and a bottom call-to-action for FlowTrack.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Feature Highlights</h2>
          <p className="mt-3 text-slate-600">Highlight area for the product's top capabilities.</p>
        </article>
        <article className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Testimonials</h2>
          <p className="mt-3 text-slate-600">Customer feedback placeholder content.</p>
        </article>
        <article className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Bottom CTA</h2>
          <p className="mt-3 text-slate-600">A call-to-action section placeholder for demo requests.</p>
        </article>
      </div>
    </section>
  );
}
