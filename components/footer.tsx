import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl px-5 md:px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a
              href="mailto:hello@joshmccray.com"
              className="font-[family-name:var(--font-display)] text-xl tracking-tight hover:text-[var(--accent)] transition-colors"
            >
              hello@joshmccray.com
            </a>
            <p className="mt-3 text-sm text-[var(--muted)] max-w-sm">
              This site is a working shelf of projects, experiments, and notes.
              It changes as I do.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <div className="flex gap-5 text-sm text-[var(--muted)]">
              <a
                href="https://github.com/joshmccray"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--foreground)]"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/joshmccray"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--foreground)]"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/_joshmccray"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--foreground)]"
              >
                X
              </a>
              <Link href="/contact" className="hover:text-[var(--foreground)]">
                Contact
              </Link>
            </div>
            <p className="text-xs text-[var(--muted)]/70">
              © {new Date().getFullYear()} Josh McCray
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
