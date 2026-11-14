import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Josh McCray",
  description:
    "Get in touch to discuss design projects, collaborations, or opportunities.",
};

const services = [
  {
    title: "UX / Design Audit",
    price: "$1,500",
    timing: "2-week turnaround",
    blurb:
      "Expert analysis of your product's experience with prioritized, actionable recommendations.",
    includes: [
      "Heuristic evaluation",
      "Usability analysis",
      "Prioritized recommendations",
      "1-hour presentation call",
    ],
  },
  {
    title: "Product Design (0→1)",
    price: "$8,500",
    timing: "4–6 week engagement",
    blurb:
      "From concept to high-fidelity prototypes—designs ready for development.",
    includes: [
      "Discovery & requirements",
      "Wireframes & user flows",
      "High-fidelity designs",
      "Interactive prototypes",
      "Design system foundations",
    ],
  },
  {
    title: "UX Research & Strategy",
    price: "$3,500",
    timing: "3-week engagement",
    blurb:
      "Validate assumptions and guide product decisions before you invest in build.",
    includes: [
      "User interviews (5–8)",
      "Persona development",
      "Journey mapping",
      "Strategic recommendations",
      "Findings presentation",
    ],
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
      <section className="max-w-2xl mb-16 md:mb-20">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] mb-4">
          Contact
        </p>
        <h1 className="text-4xl md:text-6xl tracking-tight mb-6">
          Let&apos;s build something together
        </h1>
        <p className="text-lg text-[var(--muted)] leading-relaxed mb-8">
          I&apos;m always interested in hearing about new projects and
          opportunities. Reach out and I&apos;ll get back within 24–48 hours.
        </p>
        <a
          href="mailto:hello@joshmccray.com"
          className="inline-block font-[family-name:var(--font-syne)] text-2xl md:text-3xl tracking-tight hover:text-[var(--accent)] transition-colors"
        >
          hello@joshmccray.com
        </a>
        <div className="mt-8 inline-flex items-center gap-2 text-sm text-[var(--muted)]">
          <span
            className="h-2 w-2 rounded-full bg-[var(--accent)]"
            style={{ animation: "pulseDot 2s ease-in-out infinite" }}
          />
          Currently available for freelance projects
        </div>
        <div className="mt-6 flex gap-5 text-sm text-[var(--muted)]">
          <a
            href="https://github.com/joshmccray"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joshmccray/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)]"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/_joshmccray"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)]"
          >
            X
          </a>
        </div>
      </section>

      <section className="border-t border-[var(--border)] pt-14 md:pt-16">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl tracking-tight mb-3">How I can help</h2>
          <p className="text-[var(--muted)]">
            Focused engagements designed to move your product forward—whether
            you&apos;re refining what exists or starting from zero.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-14">
          {services.map((service) => (
            <div
              key={service.title}
              className="border-t border-[var(--border)] pt-6 flex flex-col"
            >
              <h3 className="text-xl tracking-tight mb-2">{service.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
                {service.blurb}
              </p>
              <ul className="space-y-1.5 text-sm text-[var(--muted)] mb-6 flex-1">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[var(--accent)]">–</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mb-5">
                <p className="font-[family-name:var(--font-syne)] text-3xl tracking-tight">
                  {service.price}
                </p>
                <p className="text-xs text-[var(--muted)] mt-1">
                  {service.timing}
                </p>
              </div>
              <a
                href="mailto:hello@joshmccray.com?subject=Inquiry:%20"
                className="inline-flex items-center justify-center bg-[var(--accent)] text-white px-4 py-2.5 text-sm font-medium rounded-md hover:bg-[var(--accent-hover)] transition-colors"
              >
                Get started
              </a>
            </div>
          ))}
        </div>

        <p className="text-sm text-[var(--muted)] mb-4">
          Need something different? Design systems, retainers, and custom
          engagements are available too.
        </p>
        <a
          href="mailto:hello@joshmccray.com"
          className="text-sm text-[var(--accent)] hover:underline"
        >
          Discuss a custom project →
        </a>
      </section>

      <div className="pt-16 mt-8 border-t border-[var(--border)]">
        <Link
          href="/case-studies"
          className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
        >
          ← Back to case studies
        </Link>
      </div>
    </div>
  );
}
