import { notFound } from "next/navigation";
import { getCaseStudy } from "@/lib/markdown";
import { CaseStudyDrawerClient } from "@/components/case-study-drawer-client";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function InterceptedCaseStudy({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDrawerClient caseStudy={caseStudy} />;
}
