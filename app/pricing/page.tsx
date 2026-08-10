export default function PricingPage() {
  return (
    <section className="space-y-10">
      <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">
        <h1 className="text-3xl font-semibold text-brand-navy sm:text-4xl">Pricing</h1>
        <p className="mt-4 text-slate-600">Placeholder 3-tier pricing table for FlowTrack.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {['Starter', 'Growth', 'Enterprise'].map((plan) => (
          <div key={plan} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">{plan}</h2>
            <p className="mt-3 text-slate-600">Pricing tier overview placeholder.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
