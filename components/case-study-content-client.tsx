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
      {/* Minimal header - just title and tags */}
      <div className="mb-12">
        <div className="flex gap-2 mb-3">
          {caseStudy.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600 font-light"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-2xl font-normal mb-6">{caseStudy.title}</h1>

        {/* Client and Role */}
        <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200">
          <div>
            <p className="text-xs text-gray-500 mb-1 font-light uppercase tracking-wide">Client</p>
            <p className="text-sm text-gray-900 font-normal">{caseStudy.client}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1 font-light uppercase tracking-wide">Role</p>
            <p className="text-sm text-gray-900 font-normal">{caseStudy.role}</p>
          </div>
        </div>

        {/* Problem and Solution */}
        {caseStudy.quickStats && (
          <div className="space-y-6 mb-8">
            {caseStudy.quickStats.problem && (
              <div>
                <p className="text-xs text-gray-500 mb-2 font-light uppercase tracking-wide">Problem</p>
                <p className="text-sm text-gray-700 leading-relaxed font-light">{caseStudy.quickStats.problem}</p>
              </div>
            )}
            {caseStudy.quickStats.solution && (
              <div>
                <p className="text-xs text-gray-500 mb-2 font-light uppercase tracking-wide">Solution</p>
                <p className="text-sm text-gray-700 leading-relaxed font-light">{caseStudy.quickStats.solution}</p>
              </div>
            )}
          </div>
        )}
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
