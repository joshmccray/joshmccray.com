import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getCaseStudy, getAllCaseStudies } from "@/lib/markdown";
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

  return (
    <article className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
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
          <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
            <div>
              <span className="font-semibold">Client:</span> {caseStudy.client}
            </div>
            <div>
              <span className="font-semibold">Role:</span> {caseStudy.role}
            </div>
            <div>
              <span className="font-semibold">Date:</span>{" "}
              {new Date(caseStudy.date).toLocaleDateString()}
            </div>
            <div>{caseStudy.readingTime}</div>
          </div>
          {caseStudy.liveUrl && (
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              View Live Project →
            </a>
          )}
        </div>

        {caseStudy.coverImage && (
          <div className="aspect-video bg-gray-100 rounded-lg mb-12"></div>
        )}

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={caseStudy.content} />
        </div>
      </div>
    </article>
  );
}
