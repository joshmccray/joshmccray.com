"use client";

import Image from "next/image";
import type { CaseStudy } from "@/lib/markdown";
import { QuickStats } from "./case-study/quick-stats";
import { ResultsSection } from "./case-study/results-section";
import { ContentWrapper } from "./content-wrapper";

interface CaseStudyContentClientProps {
  caseStudy: CaseStudy;
}

// Simple markdown to HTML conversion for client-side rendering
function parseMarkdown(content: string): string {
  let html = content
    // Headers
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // Bold and italic
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Images - using Next.js compatible img tags
    .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="rounded-lg my-8 w-full" loading="lazy" />')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[var(--accent)] hover:underline">$1</a>')
    // Unordered lists - wrap consecutive li items
    .replace(/^- (.*$)/gm, '<li>$1</li>');

  // Wrap consecutive <li> items in <ul>
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);

  // Convert double newlines to paragraph breaks
  const paragraphs = html.split(/\n\n+/);
  html = paragraphs
    .map(p => {
      const trimmed = p.trim();
      if (!trimmed) return '';
      // Don't wrap if already an HTML block element
      if (trimmed.startsWith('<h') || trimmed.startsWith('<ul') || trimmed.startsWith('<ol') || trimmed.startsWith('<img') || trimmed.startsWith('<blockquote')) {
        return trimmed;
      }
      return `<p>${trimmed}</p>`;
    })
    .join('\n');

  return html;
}

export function CaseStudyContentClient({ caseStudy }: CaseStudyContentClientProps) {
  const htmlContent = parseMarkdown(caseStudy.content);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-normal tracking-tight mb-4">{caseStudy.title}</h1>
        <div className="flex flex-wrap gap-2">
          {caseStudy.tags?.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 border border-gray-200 rounded-full text-gray-400 font-light uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Quick Stats Section - auto-rendered from frontmatter */}
      {caseStudy.quickStats && (
        <QuickStats stats={caseStudy.quickStats} liveUrl={caseStudy.liveUrl} />
      )}

      {/* Cover Image - full bleed */}
      {caseStudy.coverImage && (
        <div className="aspect-video bg-gray-100 rounded-lg mb-12 relative overflow-hidden">
          <Image
            src={caseStudy.coverImage}
            alt={caseStudy.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Full MDX Content rendered as HTML */}
      <ContentWrapper>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </ContentWrapper>

      {/* Results Section - auto-rendered from frontmatter */}
      {caseStudy.results && (
        <ResultsSection results={caseStudy.results} />
      )}
    </div>
  );
}
