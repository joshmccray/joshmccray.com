import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8 py-32 md:py-40">
      <div className="max-w-xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-6xl tracking-tight mb-5">
          Page not found
        </h1>
        <p className="text-[var(--muted)] mb-8 leading-relaxed">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[var(--accent)] text-white px-5 py-3 text-sm font-medium rounded-md hover:bg-[var(--accent-hover)] transition-colors"
          >
            Go home
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center border border-[var(--border)] px-5 py-3 text-sm font-medium rounded-md hover:bg-white/60 transition-colors"
          >
            View work
          </Link>
        </div>
      </div>
    </div>
  );
}
