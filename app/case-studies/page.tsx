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
      <div className="mx-auto max-w-5xl px-5 md:px-6 py-14 md:py-20">
        <section className="max-w-2xl mb-12 md:mb-16">
          <p className="text-sm text-[var(--muted)] mb-3">Work</p>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-5">
            Case studies
          </h1>
          <p className="text-[var(--muted)] leading-relaxed">
            Product design across 0→1 platforms, systems, marketing experiences,
            and brand-adjacent craft.
          </p>
        </section>

        {caseStudies.length === 0 ? (
          <p className="text-[var(--muted)]">
            No case studies yet. Check back soon!
          </p>
        ) : (
          <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {caseStudies.map((study) => (
              <li key={study.slug}>
                <Link
                  href={`/case-studies?modal=${study.slug}`}
                  scroll={false}
                  className="group grid md:grid-cols-[200px_1fr] gap-5 md:gap-8 py-7 md:py-8"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-2)]">
                    {(study.cardImage || study.coverImage) && (
                      <Image
                        src={study.cardImage || study.coverImage!}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="200px"
                      />
                    )}
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)] mb-2">
                      {study.client}
                      <span className="mx-2 opacity-40">·</span>
                      {study.role}
                    </p>
                    <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {study.title}
                    </h2>
                    <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xl">
                      {study.excerpt}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </CaseStudyModalWrapper>
  );
}
