"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/case-studies", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Writing" },
  { href: "/shuffle", label: "Shuffle" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = pathname === "/";

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors ${
        isHome
          ? "bg-[var(--background)]/70 backdrop-blur-md border-b border-transparent"
          : "bg-[var(--background)]/85 backdrop-blur-md border-b border-[var(--border)]"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="group min-w-0" onClick={handleLinkClick}>
            <span className="font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
              Josh McCray
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-[var(--accent)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-md hover:bg-black/5 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-5 h-3.5 flex flex-col justify-between">
              <span
                className={`block h-[1.5px] w-full bg-[var(--foreground)] transition-all duration-300 origin-center ${
                  isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-full bg-[var(--foreground)] transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-full bg-[var(--foreground)] transition-all duration-300 origin-center ${
                  isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden border-t border-[var(--border)] bg-[var(--background)] overflow-hidden"
          style={{ animation: "slideDown 300ms ease-out forwards" }}
        >
          <div className="mx-auto max-w-6xl px-5 py-3 flex flex-col">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`py-3 text-base ${
                  isActive(link.href)
                    ? "text-[var(--accent)]"
                    : "text-[var(--muted)]"
                }`}
                style={{
                  animation: "fadeInUp 400ms ease-out forwards",
                  animationDelay: `${50 + index * 50}ms`,
                  opacity: 0,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
