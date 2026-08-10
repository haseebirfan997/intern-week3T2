import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlowTrack | SaaS marketing site",
  description: "FlowTrack is a modern SaaS marketing site placeholder built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
          <header className="mb-10">
            <nav className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
              <div className="text-xl font-semibold text-brand-navy">FlowTrack</div>
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-700">
                <a href="/" className="hover:text-brand-navy">Home</a>
                <a href="/features" className="hover:text-brand-navy">Features</a>
                <a href="/pricing" className="hover:text-brand-navy">Pricing</a>
                <a href="/blog" className="hover:text-brand-navy">Blog</a>
                <a href="/about" className="hover:text-brand-navy">About</a>
                <a href="/contact" className="hover:text-brand-navy">Contact</a>
                <a href="/health" className="hover:text-brand-navy">Health</a>
              </div>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="mt-16 rounded-3xl border border-slate-200 bg-white/90 p-6 text-sm text-slate-600 shadow-sm">
            <p>FlowTrack placeholder site | Built with Next.js App Router and Tailwind CSS.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
