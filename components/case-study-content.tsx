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
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          {caseStudy.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-5xl font-bold mb-4">{caseStudy.title}</h1>
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
      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-gray-700 prose-p:leading-relaxed">
        <MDXRemote source={caseStudy.content} components={mdxComponents} />
      </div>

      {/* Results Section - auto-rendered from frontmatter */}
      {caseStudy.results && (
        <ResultsSection results={caseStudy.results} />
      )}
    </div>
  );
}
