import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm font-normal tracking-tight hover:text-[var(--accent)] transition-colors">
            Josh McCray
          </Link>
          <div className="flex gap-6">
            <Link
              href="/case-studies"
              className="text-xs text-gray-600 hover:text-[var(--accent)] transition-colors font-light"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="text-xs text-gray-600 hover:text-[var(--accent)] transition-colors font-light"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
