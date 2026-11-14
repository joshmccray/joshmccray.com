import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="font-[family-name:var(--font-syne)] text-2xl tracking-tight mb-3">
              Let&apos;s make something worth shipping.
            </p>
            <a
              href="mailto:hello@joshmccray.com"
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              hello@joshmccray.com
            </a>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="inline-flex items-center gap-2 text-sm text-[var(--muted)]">
              <span
                className="h-2 w-2 rounded-full bg-[var(--accent)]"
                style={{ animation: "pulseDot 2s ease-in-out infinite" }}
              />
              Available for select freelance
            </div>
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
