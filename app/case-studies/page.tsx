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
      <div className="container mx-auto px-4 py-20">
        <section className="max-w-3xl mb-20">
          <h1 className="text-4xl font-normal mb-8 tracking-tight">Case Studies</h1>
          <p className="text-sm text-gray-600 font-light leading-relaxed">
            A collection of product design projects showcasing my approach to solving
            user problems and creating impactful experiences.
          </p>
        </section>

        {caseStudies.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">
              No case studies yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies?modal=${study.slug}`}
              scroll={false}
              className="group h-full"
            >
              <article className="h-full flex flex-col border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1">
                {(study.cardImage || study.coverImage) && (
                  <div className="aspect-video bg-gray-100 relative">
                    <Image
                      src={study.cardImage || study.coverImage!}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-base font-normal mb-3 group-hover:text-[var(--accent)] transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 font-light">{study.client} • {study.role}</p>
                  <p className="text-gray-700 text-sm line-clamp-3 leading-relaxed font-light">{study.excerpt}</p>
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
