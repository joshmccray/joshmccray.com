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

      {/* MDX Content - with custom components */}
      <div className="prose prose-sm max-w-none prose-headings:font-normal prose-headings:tracking-tight prose-h2:text-lg prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-700 prose-p:text-xs prose-p:leading-relaxed prose-p:font-light">
        <MDXRemote source={caseStudy.content} components={mdxComponents} />
      </div>

      {/* Results Section - auto-rendered from frontmatter */}
      {caseStudy.results && (
        <ResultsSection results={caseStudy.results} />
      )}
    </div>
  );
}
