"use client";

import Image from "next/image";
import type { CaseStudy } from "@/lib/markdown";
import { QuickStats } from "./case-study/quick-stats";
import { ResultsSection } from "./case-study/results-section";

interface CaseStudyContentClientProps {
  caseStudy: CaseStudy;
}

export function CaseStudyContentClient({ caseStudy }: CaseStudyContentClientProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Minimal header - just title and tags */}
      <div className="mb-6">
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
        <h1 className="text-2xl font-normal mb-3">{caseStudy.title}</h1>
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

      {/* Simple content rendering without MDX for client components */}
      <div className="prose prose-sm max-w-none prose-headings:font-normal prose-headings:tracking-tight prose-h2:text-lg prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-700 prose-p:text-xs prose-p:leading-relaxed prose-p:font-light">
        <div className="text-gray-700 text-sm leading-relaxed font-light whitespace-pre-wrap">
          {caseStudy.excerpt}
        </div>
        <p className="text-sm text-gray-600 mt-4 font-light italic">
          View the full case study on its dedicated page for the complete story with images and details.
        </p>
      </div>

      {/* Results Section - auto-rendered from frontmatter */}
      {caseStudy.results && (
        <ResultsSection results={caseStudy.results} />
      )}
    </div>
  );
}
