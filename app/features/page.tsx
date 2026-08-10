export default function FeaturesPage() {
  return (
    <section className="space-y-10">
      <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">
        <h1 className="text-3xl font-semibold text-brand-navy sm:text-4xl">Features</h1>
        <p className="mt-4 text-slate-600">Detailed feature breakdown placeholder page for FlowTrack.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {['Workflow automation', 'Analytics dashboard', 'Team collaboration', 'Integrations'].map((feature) => (
          <article key={feature} className="rounded-3xl bg-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{feature}</h2>
            <p className="mt-3 text-slate-600">Description placeholder for {feature}.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
