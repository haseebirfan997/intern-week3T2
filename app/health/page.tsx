async function fetchHealthData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Failed to fetch health data");
  }
  return response.json();
}

export default async function HealthPage() {
  const data = await fetchHealthData();

  return (
    <section className="space-y-10">
      <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">
        <h1 className="text-3xl font-semibold text-brand-navy sm:text-4xl">Health Check</h1>
        <p className="mt-4 text-slate-600">This page confirms data fetching is working end-to-end.</p>
      </div>

      <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
        <pre className="whitespace-pre-wrap break-words text-sm text-slate-700">{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
}
