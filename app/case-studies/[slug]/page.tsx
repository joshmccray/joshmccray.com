import { notFound } from "next/navigation";
import { getCaseStudy, getAllCaseStudies } from "@/lib/markdown";
import { CaseStudyContent } from "@/components/case-study-content";
import { CaseStudyPagination } from "@/components/case-study-pagination";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} - Josh McCray`,
    description: caseStudy.excerpt,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  // Get all case studies for pagination
  const allCaseStudies = getAllCaseStudies();
  const currentIndex = allCaseStudies.findIndex(study => study.slug === slug);
  const previousStudy = currentIndex > 0 ? allCaseStudies[currentIndex - 1] : undefined;
  const nextStudy = currentIndex < allCaseStudies.length - 1 ? allCaseStudies[currentIndex + 1] : undefined;

  return (
    <article className="container mx-auto px-4 py-16">
      <CaseStudyContent caseStudy={caseStudy} />
      <CaseStudyPagination previous={previousStudy} next={nextStudy} />
    </article>
  );
}
