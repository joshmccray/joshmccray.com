import Link from "next/link";
import Image from "next/image";
import { getAllCaseStudies } from "@/lib/markdown";
import { CaseStudyModalWrapper } from "@/components/case-study-modal-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Josh McCray",
  description: "Product design case studies and project showcases",
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <CaseStudyModalWrapper caseStudies={caseStudies}>
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
        <section className="max-w-2xl mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] mb-4">
            Work
          </p>
          <h1 className="text-4xl md:text-6xl tracking-tight mb-6">
            Case studies
          </h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            Product design projects spanning 0→1 platforms, systems, marketing
            experiences, and brand-adjacent craft.
          </p>
        </section>

        {caseStudies.length === 0 ? (
          <p className="text-[var(--muted)]">
            No case studies yet. Check back soon!
          </p>
        ) : (
          <div className="flex flex-col">
            {caseStudies.map((study, index) => (
              <Link
                key={study.slug}
                href={`/case-studies?modal=${study.slug}`}
                scroll={false}
                className="work-row group border-t border-[var(--border)] py-10 md:py-12 last:border-b"
              >
                <article className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-center">
                  <div
                    className={`relative aspect-[16/10] overflow-hidden bg-gray-200 ${
                      index % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    {(study.cardImage || study.coverImage) && (
                      <Image
                        src={study.cardImage || study.coverImage!}
                        alt={study.title}
                        fill
                        className="work-image object-cover"
                        sizes="(max-width: 768px) 100vw, 55vw"
                      />
                    )}
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
                      {study.client}
                      <span className="mx-2 opacity-40">·</span>
                      {study.role}
                    </p>
                    <h2 className="text-2xl md:text-3xl tracking-tight mb-4 group-hover:text-[var(--accent)] transition-colors">
                      {study.title}
                    </h2>
                    <p className="text-[var(--muted)] leading-relaxed mb-5 max-w-md">
                      {study.excerpt}
                    </p>
                    <span className="text-sm text-[var(--accent)] inline-flex items-center gap-2">
                      View case study
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
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
