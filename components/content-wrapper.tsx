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
    <div className="prose max-w-none [&_p]:mb-6 [&_p]:leading-relaxed [&_p]:font-light [&_p]:text-gray-700 [&_h2]:text-lg [&_h2]:font-normal [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-6 [&_h3]:text-base [&_h3]:font-normal [&_h3]:tracking-tight [&_h3]:mt-8 [&_h3]:mb-4 [&_ul]:my-6 [&_ol]:my-6 [&_li]:my-2 [&_img]:rounded-lg [&_img]:my-8">
      {children}
    </div>
  );
}
