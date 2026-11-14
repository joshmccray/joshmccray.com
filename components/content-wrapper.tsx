import type { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
}

/**
 * Shared content wrapper for long-form content (blog posts, case studies)
 * Provides consistent typography and spacing across all markdown/MDX content
 */
export function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <div className="prose max-w-none [&_p]:mb-6 [&_p]:leading-relaxed [&_p]:text-[var(--muted)] [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-5 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:mt-8 [&_h3]:mb-4 [&_ul]:my-6 [&_ol]:my-6 [&_li]:my-2 [&_li]:text-[var(--muted)] [&_a]:text-[var(--accent)] [&_strong]:text-[var(--foreground)]">
      {children}
    </div>
  );
}
