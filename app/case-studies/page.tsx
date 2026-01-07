import Link from "next/link";
import Image from "next/image";
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
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-3xl font-normal mb-6 tracking-tight">Case Studies</h1>
          <p className="text-sm text-gray-600 font-light leading-relaxed max-w-3xl">
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
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies?modal=${study.slug}`}
              scroll={false}
              className="group"
            >
              <article className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1">
                {study.coverImage && (
                  <div className="aspect-video bg-gray-100 relative">
                    <Image
                      src={study.coverImage}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-sm font-normal mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-xs mb-3 font-light">{study.client} • {study.role}</p>
                  <p className="text-gray-700 text-xs line-clamp-3 leading-relaxed font-light">{study.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
      </div>
    </div>
    </CaseStudyModalWrapper>
  );
}
