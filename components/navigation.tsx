'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const linkClass = (path: string) => {
    const base = "text-xs transition-colors font-light";
    return isActive(path)
      ? `${base} text-[var(--accent)]`
      : `${base} text-gray-600 hover:text-[var(--accent)]`;
  };

  return (
    <nav className="border-b border-gray-200 bg-[var(--background)]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`text-sm font-normal tracking-tight transition-colors ${
              isActive('/') && pathname === '/'
                ? 'text-[var(--accent)]'
                : 'text-gray-900 hover:text-[var(--accent)]'
            }`}
          >
            Josh McCray
          </Link>
          <div className="flex gap-6">
            <Link href="/about" className={linkClass('/about')}>
              About
            </Link>
            <Link href="/case-studies" className={linkClass('/case-studies')}>
              Case Studies
            </Link>
            <Link href="/blog" className={linkClass('/blog')}>
              Blog
            </Link>
            <Link href="/contact" className={linkClass('/contact')}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
