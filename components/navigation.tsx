'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const linkClass = (path: string) => {
    const base = "text-sm transition-colors font-light block py-3";
    return isActive(path)
      ? `${base} text-[var(--accent)]`
      : `${base} text-gray-600 hover:text-[var(--accent)]`;
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="border-b border-gray-200 bg-[var(--background)]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`transition-colors ${
              isActive('/') && pathname === '/'
                ? 'text-[var(--accent)]'
                : 'hover:text-[var(--accent)]'
            }`}
          >
            <div>
              <div className="text-sm font-normal tracking-tight text-gray-900">
                Josh McCray
              </div>
              <div className="text-xs text-gray-500 font-light">
                Product Designer
              </div>
            </div>
          </Link>

          {/* Hamburger button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Menu dropdown */}
      {isMenuOpen && (
        <div
          className="border-t border-gray-200 bg-[var(--background)] overflow-hidden"
          style={{
            animation: 'slideDown 300ms ease-out forwards'
          }}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col">
              <Link
                href="/about"
                className={linkClass('/about')}
                onClick={handleLinkClick}
                style={{ animation: 'fadeInUp 400ms ease-out forwards', animationDelay: '50ms', opacity: 0 }}
              >
                About
              </Link>
              <Link
                href="/case-studies"
                className={linkClass('/case-studies')}
                onClick={handleLinkClick}
                style={{ animation: 'fadeInUp 400ms ease-out forwards', animationDelay: '100ms', opacity: 0 }}
              >
                Case Studies
              </Link>
              <Link
                href="/blog"
                className={linkClass('/blog')}
                onClick={handleLinkClick}
                style={{ animation: 'fadeInUp 400ms ease-out forwards', animationDelay: '150ms', opacity: 0 }}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={linkClass('/contact')}
                onClick={handleLinkClick}
                style={{ animation: 'fadeInUp 400ms ease-out forwards', animationDelay: '200ms', opacity: 0 }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
