"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="space-y-10">
      <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-12">
        <h1 className="text-3xl font-semibold text-brand-navy sm:text-4xl">Contact</h1>
        <p className="mt-4 text-slate-600">Contact or demo request form placeholder for FlowTrack.</p>
      </div>

      <form
        className="grid gap-4 rounded-3xl bg-slate-50 p-6 shadow-sm sm:grid-cols-2"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <label className="space-y-2 text-sm text-slate-700">
          <span>Name</span>
          <input className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900" placeholder="Your name" />
        </label>

        <label className="space-y-2 text-sm text-slate-700">
          <span>Email</span>
          <input className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900" placeholder="you@example.com" type="email" />
        </label>

        <label className="space-y-2 text-sm text-slate-700 sm:col-span-2">
          <span>Message</span>
          <textarea className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900" rows={5} placeholder="Tell us about your use case" />
        </label>

        <button className="sm:col-span-2 rounded-2xl bg-brand-navy px-6 py-3 text-white transition hover:bg-slate-900" type="submit">
          Submit placeholder
        </button>

        {submitted ? <p className="sm:col-span-2 text-sm text-green-700">Form submitted placeholder state.</p> : null}
      </form>
    </section>
  );
}
