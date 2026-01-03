import Link from "next/link";
import { getAllCaseStudies } from "@/lib/markdown";
import { CaseStudyModalWrapper } from "@/components/case-study-modal-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - Josh McCray",
  description: "Product design case studies and project showcases",
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <CaseStudyModalWrapper caseStudies={caseStudies}>
      <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mb-16">
        <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
        <p className="text-xl text-gray-600">
          A collection of product design projects showcasing my approach to solving
          user problems and creating impactful experiences.
        </p>
      </div>

      {caseStudies.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">
            No case studies yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies?modal=${study.slug}`}
              scroll={false}
              className="group"
            >
              <article className="border rounded-lg overflow-hidden hover:shadow-xl transition-all">
                {study.coverImage && (
                  <div className="aspect-video bg-gray-100"></div>
                )}
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {study.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {study.client} • {study.role}
                  </p>
                  <p className="text-gray-700 mb-4">{study.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <time>{new Date(study.date).toLocaleDateString()}</time>
                    <span className="mx-2">•</span>
                    <span>{study.readingTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
      </div>
    </CaseStudyModalWrapper>
  );
}
