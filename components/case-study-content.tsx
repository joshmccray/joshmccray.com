import Image from "next/image";
import { Children } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { CaseStudy } from "@/lib/markdown";
import { ImageWithCaption } from "./mdx/image-with-caption";
import { ImageGrid } from "./mdx/image-grid";
import { ImageCompare } from "./mdx/image-compare";
import { ImageGallery } from "./mdx/image-gallery";
import { FullBleedImage } from "./mdx/full-bleed-image";
import { Callout } from "./mdx/callout";
import { SectionDivider } from "./mdx/section-divider";
import { PhoneMockup } from "./mdx/phone-mockup";
import { QuickStats } from "./case-study/quick-stats";
import { ResultsSection } from "./case-study/results-section";
import { ContentWrapper } from "./content-wrapper";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

const BLEED_COLORS = ["#0A1628", "#F5F0E8"] as const;

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  let imageIndex = 0;

  const getNextColor = () => {
    const color = BLEED_COLORS[imageIndex % BLEED_COLORS.length];
    imageIndex++;
    return color;
  };

  const getTextColor = (bg: string) =>
    bg === "#0A1628" ? "text-gray-400" : "text-gray-600";

  // Custom MDX components for visual-first layouts
  const mdxComponents = {
    ImageWithCaption,
    ImageGrid,
    ImageCompare,
    ImageGallery,
    Callout,
    SectionDivider,
    PhoneMockup: (props: any) => {
      const bgColor = getNextColor();
      return <PhoneMockup {...props} bgColor={bgColor} />;
    },
    p: ({ children, ...props }: any) => {
      // MDX wraps standalone images in <p>. Since our img override returns
      // a block-level FullBleedImage, unwrap the <p> to avoid invalid HTML.
      const childArray = Children.toArray(children);
      const hasBlockChild = childArray.some(
        (child: any) => child?.props?.bgColor !== undefined
      );
      if (hasBlockChild) return <>{children}</>;
      return <p {...props}>{children}</p>;
    },
    img: (props: any) => {
      const bgColor = getNextColor();
      const textColor = getTextColor(bgColor);
      return (
        <FullBleedImage
          {...props}
          bgColor={bgColor}
          textColor={textColor}
        />
      );
    },
  };

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
