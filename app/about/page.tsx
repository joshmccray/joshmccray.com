import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Josh McCray",
  description:
    "Senior Product Designer with 10+ years of experience creating exceptional digital experiences across e-commerce, nonprofit, and early-stage tech sectors.",
};

const experience = [
  {
    role: "Senior Product Designer",
    company: "Come Near",
    dates: "Apr 2025 – Present",
    detail:
      "Designing digital products focused on raising meaningful public conversations through thoughtful, user-centered experiences.",
  },
  {
    role: "Senior User Experience Architect",
    company: "Compassion International",
    dates: "Apr 2022 – Apr 2025",
    detail:
      "Lead Product Designer for Compassion Causes, a 0→1 product connecting people with community-led initiatives. Drove research, design strategy, and implementation across web and mobile.",
  },
  {
    role: "Manager, Interactive & UX Design",
    company: "Jockey International",
    dates: "Oct 2021 – Apr 2022",
    detail:
      "Led the User Experience and Web Design team, establishing design processes and standards for the e-commerce platform.",
  },
  {
    role: "Lecturer — Interactive Design",
    company: "University of Wisconsin–Parkside",
    dates: "Sep 2020 – Oct 2021",
    detail:
      "Taught Interactive Design I & II, mentoring students in user-centered design principles and web design fundamentals.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 md:px-6 py-14 md:py-20">
      <section className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start mb-20 md:mb-28">
        <Image
          src="/pfp.webp"
          alt="Josh McCray"
          width={220}
          height={220}
          className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-sm"
          priority
        />
        <div className="max-w-2xl">
          <p className="text-sm text-[var(--muted)] mb-3">About</p>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-5">
            Josh McCray
          </h1>
          <p className="text-lg text-[var(--muted)] mb-2">
            Senior Product Designer @ Come Near
          </p>
          <p className="text-sm text-[var(--muted)]">
            Greater Chicago Area · Remote
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 mb-24 md:mb-32">
        <h2 className="text-2xl tracking-tight">The short version</h2>
        <div className="space-y-5 text-[var(--muted)] leading-relaxed max-w-2xl">
          <p>
            I&apos;m a Senior Product Designer with over a decade of experience
            creating digital experiences across e-commerce, nonprofit, and
            early-stage tech. At Come Near, I focus on products that raise
            meaningful public conversations. Before that I led product design at
            Compassion International and UX for Jockey&apos;s e-commerce
            platform.
          </p>
          <p>
            I specialize in cohesive product experiences that balance user needs
            with business goals. My approach pairs deep user empathy with
            technical fluency—the best solutions show up when designers
            understand both the human experience and the constraints of shipping.
          </p>
          <p>
            What sets me apart is a hybrid skill set: research, high-fidelity
            design, and front-end code. I&apos;ve built design systems, led UX
            teams, mentored through Out of Office Hours, and taught Interactive
            Design at UW–Parkside.
          </p>
        </div>
      </section>

      <section className="mb-24 md:mb-32">
        <h2 className="text-2xl tracking-tight mb-10">Experience</h2>
        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.role}`}
              className="grid md:grid-cols-[1.2fr_0.8fr_1.6fr] gap-2 md:gap-8 py-7"
            >
              <div>
                <h3 className="tracking-tight text-lg">{job.role}</h3>
                <p className="text-[var(--muted)] text-sm mt-1">{job.company}</p>
              </div>
              <p className="text-sm text-[var(--muted)] tabular-nums md:pt-1">
                {job.dates}
              </p>
              <p className="text-sm text-[var(--muted)] leading-relaxed md:pt-1">
                {job.detail}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-[var(--border)] pt-14">
        <h2 className="text-3xl md:text-4xl tracking-tight mb-4 max-w-lg">
          Let&apos;s work together
        </h2>
        <p className="text-[var(--muted)] mb-8 max-w-md">
          Interested in collaborating on your next product? I&apos;d love to
          hear what you&apos;re building.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[var(--accent)] text-white px-5 py-3 text-sm font-medium rounded-md hover:bg-[var(--accent-hover)] transition-colors"
          >
            Get in touch
          </Link>
          <a
            href="https://www.linkedin.com/in/joshmccray"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-[var(--border)] px-5 py-3 text-sm font-medium rounded-md hover:bg-white/60 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
