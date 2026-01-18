import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { CaseStudy } from "@/lib/markdown";
import { ImageWithCaption } from "./mdx/image-with-caption";
import { ImageGrid } from "./mdx/image-grid";
import { ImageCompare } from "./mdx/image-compare";
import { ImageGallery } from "./mdx/image-gallery";
import { Callout } from "./mdx/callout";
import { SectionDivider } from "./mdx/section-divider";
import { QuickStats } from "./case-study/quick-stats";
import { ResultsSection } from "./case-study/results-section";
import { ContentWrapper } from "./content-wrapper";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

// Custom MDX components for visual-first layouts
const mdxComponents = {
  ImageWithCaption,
  ImageGrid,
  ImageCompare,
  ImageGallery,
  Callout,
  SectionDivider,
  img: (props: any) => (
    <Image
      {...props}
      width={1200}
      height={800}
      className="rounded-lg w-full h-auto"
    />
  ),
};

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
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

      {/* MDX Content - with custom components */}
      <ContentWrapper>
        <MDXRemote source={caseStudy.content} components={mdxComponents} />
      </ContentWrapper>

      {/* Results Section - auto-rendered from frontmatter */}
      {caseStudy.results && (
        <ResultsSection results={caseStudy.results} />
      )}
    </div>
  );
}
