import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts, getAllCaseStudies } from "@/lib/markdown";
import { CaseStudyModalWrapper } from "@/components/case-study-modal-wrapper";
import { vibeProjects } from "@/lib/vibe-projects";

export default function Home() {
  const allCaseStudies = getAllCaseStudies();
  const featured = allCaseStudies.slice(0, 4);
  const blogPosts = getAllBlogPosts().slice(0, 2);
  const heroStudy = allCaseStudies[0];
  const heroImage =
    heroStudy?.coverImage ||
    heroStudy?.cardImage ||
    "/case-studies/compassion-causes/Causes-hero.png";

  return (
    <CaseStudyModalWrapper caseStudies={allCaseStudies}>
      {/* Hero — one composition: brand, line, CTA, dominant work image */}
      <section className="relative min-h-[min(92vh,920px)] flex items-end overflow-hidden">
        <div className="absolute inset-0 hero-media">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,14,24,0.35) 0%, rgba(8,14,24,0.55) 45%, rgba(8,14,24,0.88) 100%)",
            }}
            aria-hidden
          />
        </div>

        <div className="relative z-10 w-full mx-auto max-w-6xl px-5 md:px-8 pb-14 md:pb-20 pt-32">
          <p className="reveal text-sm uppercase tracking-[0.22em] text-[var(--hero-muted)] mb-5">
            Product Designer
          </p>
          <h1 className="reveal reveal-delay-1 font-[family-name:var(--font-syne)] text-[clamp(3.25rem,10vw,7.5rem)] font-extrabold tracking-[-0.04em] leading-[0.92] text-[var(--hero-ink)] max-w-4xl mb-6">
            Josh McCray
          </h1>
          <p className="reveal reveal-delay-2 text-base md:text-lg text-[var(--hero-muted)] max-w-xl mb-9 leading-relaxed">
            I design digital products that connect people to purpose—across
            nonprofit, e-commerce, and early-stage work.
          </p>
          <div className="reveal reveal-delay-3 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center bg-[var(--hero-ink)] text-[var(--foreground)] px-5 py-3 text-sm font-medium rounded-md hover:bg-white transition-colors"
            >
              View selected work
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/30 text-[var(--hero-ink)] px-5 py-3 text-sm font-medium rounded-md hover:bg-white/10 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Selected work — editorial strips, not cards */}
      <section id="work" className="mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 mb-14 md:mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl tracking-tight mb-3">
              Selected work
            </h2>
            <p className="text-[var(--muted)] max-w-md">
              Product design from 0→1 platforms to systems, marketing, and
              brand-adjacent experiences.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="hidden sm:inline text-sm text-[var(--muted)] hover:text-[var(--accent)] shrink-0"
          >
            All case studies →
          </Link>
        </div>

        <div className="flex flex-col">
          {featured.map((study, index) => (
            <Link
              key={study.slug}
              href={`/?modal=${study.slug}`}
              scroll={false}
              className="work-row group border-t border-[var(--border)] py-10 md:py-14 last:border-b"
            >
              <article
                className={`grid gap-8 md:gap-12 items-center ${
                  index % 2 === 0
                    ? "md:grid-cols-[1.15fr_0.85fr]"
                    : "md:grid-cols-[0.85fr_1.15fr]"
                }`}
              >
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
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                  )}
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
                    {study.client}
                    <span className="mx-2 opacity-40">·</span>
                    {study.role}
                  </p>
                  <h3 className="text-2xl md:text-3xl tracking-tight mb-4 group-hover:text-[var(--accent)] transition-colors">
                    {study.title}
                  </h3>
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

        <div className="sm:hidden mt-8">
          <Link
            href="/case-studies"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
          >
            All case studies →
          </Link>
        </div>
      </section>

      {/* Quiet client line — not a logo strip box */}
      <section className="border-y border-[var(--border)] bg-white/40">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-10 md:py-12">
          <p className="text-sm text-[var(--muted)]">
            <span className="text-[var(--foreground)] font-medium">
              Previously with
            </span>{" "}
            Compassion International, Dwell, Jockey International — now designing
            at Come Near.
          </p>
        </div>
      </section>

      {/* Experiments */}
      {vibeProjects.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-28">
          <div className="mb-12 max-w-xl">
            <h2 className="text-3xl md:text-4xl tracking-tight mb-3">
              Experiments
            </h2>
            <p className="text-[var(--muted)]">
              Side builds where I explore ideas, ship for fun, and stay close to
              the craft of making.
            </p>
          </div>
          <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {vibeProjects.map((project) => (
              <li key={project.id}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-6 hover:bg-white/50 -mx-3 px-3 transition-colors"
                >
                  <span className="sm:w-48 shrink-0 font-[family-name:var(--font-syne)] text-lg tracking-tight group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </span>
                  <span className="flex-1 text-[var(--muted)] text-sm md:text-base">
                    {project.description}
                  </span>
                  <span className="text-xs tabular-nums text-[var(--muted)]/70 shrink-0">
                    {project.year}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Writing teaser */}
      {blogPosts.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 md:px-8 pb-24 md:pb-32">
          <div className="flex items-end justify-between gap-6 mb-10">
            <h2 className="text-3xl md:text-4xl tracking-tight">Writing</h2>
            <Link
              href="/blog"
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
            >
              All posts →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border-t border-[var(--border)] pt-6"
              >
                <time className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                  <span className="mx-2 opacity-40">·</span>
                  {post.readingTime}
                </time>
                <h3 className="mt-3 text-xl tracking-tight group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-[var(--muted)] text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 pb-28">
        <div className="relative overflow-hidden rounded-2xl bg-[var(--foreground)] text-[var(--hero-ink)] px-8 py-14 md:px-14 md:py-16">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(600px 280px at 90% 10%, rgba(15,110,86,0.55), transparent 60%)",
            }}
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl md:text-5xl tracking-tight mb-4">
              Have a product that needs clearer thinking?
            </h2>
            <p className="text-[var(--hero-muted)] mb-8 max-w-lg">
              I take on a small number of freelance projects—audits, 0→1 product
              design, and research-led strategy.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[var(--accent)] text-white px-5 py-3 text-sm font-medium rounded-md hover:bg-[var(--accent-hover)] transition-colors"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </CaseStudyModalWrapper>
  );
}
