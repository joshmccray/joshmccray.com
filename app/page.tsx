import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts, getAllCaseStudies } from "@/lib/markdown";
import { CaseStudyModalWrapper } from "@/components/case-study-modal-wrapper";
import { DeskShuffle } from "@/components/desk-shuffle";
import { vibeProjects } from "@/lib/vibe-projects";

export default function Home() {
  const allCaseStudies = getAllCaseStudies();
  const featured = allCaseStudies.slice(0, 3);
  const moreWork = allCaseStudies.slice(3, 6);
  const blogPosts = getAllBlogPosts().slice(0, 1);

  return (
    <CaseStudyModalWrapper caseStudies={allCaseStudies}>
      <div className="mx-auto max-w-5xl px-5 md:px-6 py-12 md:py-16">
        {/* Intro — person first, not billboard */}
        <section className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-start mb-16 md:mb-20">
          <div className="max-w-2xl">
            <p className="reveal text-sm text-[var(--muted)] mb-4">
              Product designer · Come Near · Chicago area
            </p>
            <h1 className="reveal reveal-delay-1 font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,4.25rem)] tracking-[-0.03em] leading-[1.05] mb-6">
              Josh McCray
            </h1>
            <p className="reveal reveal-delay-2 text-[var(--muted)] text-lg leading-relaxed mb-6">
              I design digital products that connect people to purpose—across
              nonprofit, e-commerce, and early-stage work. I stay close to the
              craft: research, systems, interfaces, and enough code to ship what
              I draw.
            </p>
            <div className="reveal reveal-delay-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link
                href="/case-studies"
                className="text-[var(--accent)] hover:text-[var(--accent-hover)]"
              >
                Browse work →
              </Link>
              <Link
                href="/about"
                className="text-[var(--muted)] hover:text-[var(--foreground)]"
              >
                About
              </Link>
              <a
                href="mailto:hello@joshmccray.com"
                className="text-[var(--muted)] hover:text-[var(--foreground)]"
              >
                hello@joshmccray.com
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2 flex md:flex-col gap-5 items-start">
            <Image
              src="/pfp.webp"
              alt="Josh McCray"
              width={128}
              height={128}
              className="w-24 h-24 md:w-28 md:h-28 object-cover"
              priority
            />
            <div className="inline-flex items-center gap-2 text-sm text-[var(--muted)] pt-1">
              <span
                className="h-2 w-2 rounded-full bg-[var(--accent)]"
                style={{ animation: "pulseDot 2s ease-in-out infinite" }}
              />
              Open to select freelance
            </div>
          </div>
        </section>

        {/* Collection mosaic */}
        <section className="mb-6">
          <div className="flex items-baseline justify-between gap-4 mb-5">
            <h2 className="text-sm font-medium tracking-wide text-[var(--muted)] uppercase">
              Selected work
            </h2>
            <Link
              href="/case-studies"
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
            >
              All case studies →
            </Link>
          </div>

          <div className="grid md:grid-cols-5 gap-4 md:gap-5">
            {featured[0] && (
              <Link
                href={`/?modal=${featured[0].slug}`}
                scroll={false}
                className="tile tile-link md:col-span-3 group overflow-hidden"
              >
                <div className="relative aspect-[16/10] bg-[var(--surface-2)] overflow-hidden">
                  {(featured[0].cardImage || featured[0].coverImage) && (
                    <Image
                      src={featured[0].cardImage || featured[0].coverImage!}
                      alt={featured[0].title}
                      fill
                      className="tile-image object-cover"
                      sizes="(max-width: 768px) 100vw, 60vw"
                      priority
                    />
                  )}
                </div>
                <div className="pt-4 pb-1">
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)] mb-2">
                    {featured[0].client}
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {featured[0].title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-2">
                    {featured[0].excerpt}
                  </p>
                </div>
              </Link>
            )}

            <div className="md:col-span-2 flex flex-col gap-4 md:gap-5">
              {featured.slice(1, 3).map((study) => (
                <Link
                  key={study.slug}
                  href={`/?modal=${study.slug}`}
                  scroll={false}
                  className="tile tile-link group overflow-hidden flex-1"
                >
                  <div className="relative aspect-[16/10] bg-[var(--surface-2)] overflow-hidden">
                    {(study.cardImage || study.coverImage) && (
                      <Image
                        src={study.cardImage || study.coverImage!}
                        alt={study.title}
                        fill
                        className="tile-image object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    )}
                  </div>
                  <div className="pt-3 pb-1">
                    <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)] mb-1.5">
                      {study.client}
                    </p>
                    <h3 className="font-[family-name:var(--font-display)] text-lg tracking-tight group-hover:text-[var(--accent)] transition-colors">
                      {study.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {moreWork.length > 0 && (
            <ul className="mt-4 divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {moreWork.map((study) => (
                <li key={study.slug}>
                  <Link
                    href={`/?modal=${study.slug}`}
                    scroll={false}
                    className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4 hover:bg-white/50 -mx-2 px-2 transition-colors"
                  >
                    <span className="sm:w-44 shrink-0 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                      {study.client}
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-lg tracking-tight group-hover:text-[var(--accent)] transition-colors">
                      {study.title}
                    </span>
                    <span className="sm:ml-auto text-sm text-[var(--muted)]">
                      {study.role}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Personality row: desk shuffle + side builds + now */}
        <section className="grid md:grid-cols-2 gap-4 md:gap-5 mt-12 md:mt-16 mb-12 md:mb-16">
          <div className="tile border-t border-[var(--border)] pt-5">
            <DeskShuffle />
          </div>

          <div className="flex flex-col gap-8 md:gap-10">
            <div className="tile border-t border-[var(--border)] pt-5">
              <h2 className="text-sm font-medium tracking-wide text-[var(--muted)] uppercase mb-4">
                On the side
              </h2>
              <ul className="space-y-5">
                {vibeProjects.map((project) => (
                  <li key={project.id}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="flex items-baseline justify-between gap-3 mb-1">
                        <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight group-hover:text-[var(--accent)] transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs tabular-nums text-[var(--muted)]">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--muted)] leading-relaxed">
                        {project.description}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tile border-t border-[var(--border)] pt-5">
              <h2 className="text-sm font-medium tracking-wide text-[var(--muted)] uppercase mb-3">
                Right now
              </h2>
              <p className="font-[family-name:var(--font-display)] text-xl tracking-tight mb-2">
                Designing at Come Near
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                Building products that raise meaningful public conversations.
                Previously: Compassion International, Dwell, Jockey.
              </p>
              <p className="text-sm text-[var(--muted)]">
                Also: taught Interactive Design at UW–Parkside · mentored through
                Out of Office Hours
              </p>
            </div>
          </div>
        </section>

        {/* Notes */}
        {blogPosts.length > 0 && (
          <section className="mb-8">
            <div className="flex items-baseline justify-between gap-4 mb-5">
              <h2 className="text-sm font-medium tracking-wide text-[var(--muted)] uppercase">
                Notes
              </h2>
              <Link
                href="/blog"
                className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
              >
                All notes →
              </Link>
            </div>
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="tile tile-link group block border-t border-[var(--border)] pt-5"
              >
                <time className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                  <span className="mx-2 opacity-40">·</span>
                  {post.readingTime}
                </time>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-tight group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-[var(--muted)] leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </section>
        )}
      </div>
    </CaseStudyModalWrapper>
  );
}
