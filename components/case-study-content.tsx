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
