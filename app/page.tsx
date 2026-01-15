import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts, getAllCaseStudies } from "@/lib/markdown";
import { CaseStudyModalWrapper } from "@/components/case-study-modal-wrapper";
import { vibeProjects } from "@/lib/vibe-projects";

export default function Home() {
  const allCaseStudies = getAllCaseStudies();
  const caseStudies = allCaseStudies.slice(0, 3);
  const blogPosts = getAllBlogPosts().slice(0, 3);

  return (
    <CaseStudyModalWrapper caseStudies={allCaseStudies}>
      <div className="container mx-auto px-4 py-20">
        <section className="max-w-3xl mb-32">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <Image
              src="/pfp.webp"
              alt="Josh McCray"
              width={120}
              height={120}
              className="w-[120px] h-[120px] rounded-full object-cover"
              priority
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-normal mb-6 tracking-tight">
              Hi, I&apos;m Josh McCray
            </h1>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed font-light">
              Senior Product Designer with 10+ years of experience creating exceptional digital experiences. I specialize in user experience design, visual design, and product development—with expertise spanning e-commerce, nonprofit, and early-stage tech sectors.
            </p>

            <div className="flex gap-3 items-center flex-wrap">
              <Link
                href="/case-studies"
                className="bg-[var(--accent)] text-white px-4 py-2 text-xs rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-200 shadow-sm hover:shadow-md font-normal"
              >
                View Case Studies
              </Link>
              <Link
                href="/about"
                className="border border-gray-300 px-4 py-2 text-xs rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-normal"
              >
                About Me
              </Link>
              <Link
                href="/contact"
                className="border border-gray-300 px-4 py-2 text-xs rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-normal"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {caseStudies.length > 0 && (
        <section className="mb-32">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-normal tracking-tight">Featured Case Studies</h2>
            <Link href="/case-studies" className="text-xs text-gray-600 hover:text-[var(--accent)] transition-colors font-light">
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/?modal=${study.slug}`}
                scroll={false}
                className="group h-full"
              >
                <article className="h-full flex flex-col border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1">
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
                  <div className="p-6 flex-1 flex flex-col">
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
        </section>
      )}

      {vibeProjects.length > 0 && (
        <section className="mb-32">
          <div className="mb-8">
            <h2 className="text-lg font-normal mb-3 tracking-tight">Vibe Coded Projects</h2>
            <p className="text-xs text-gray-600 max-w-2xl leading-relaxed font-light">
              Experimental projects and side builds where I explore new technologies,
              play with creative ideas, and code for the joy of it.
            </p>
          </div>
          <div className="space-y-1">
            {vibeProjects.map((project, index) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-6 border-b border-gray-200 hover:bg-gray-50 transition-all duration-200 -mx-4 px-4 rounded-lg"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-normal group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>
                      <svg
                        className="w-3 h-3 text-gray-400 group-hover:text-[var(--accent)] transition-colors flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-xs mb-2 leading-relaxed font-light">
                      {project.description}
                    </p>
                    {project.tech && project.tech.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-gray-500 font-light"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {project.year && (
                    <div className="text-xs text-gray-400 tabular-nums flex-shrink-0 font-light">
                      {project.year}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {blogPosts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-normal tracking-tight">Latest Posts</h2>
            <Link href="/blog" className="text-xs text-gray-600 hover:text-[var(--accent)] transition-colors font-light">
              View all →
            </Link>
          </div>
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-sm font-normal mb-2 group-hover:text-[var(--accent)] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-700 mb-3 leading-relaxed font-light">{post.excerpt}</p>
                      <div className="flex gap-3 text-xs text-gray-500 font-light">
                        <time>{new Date(post.date).toLocaleDateString()}</time>
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
      </div>
    </CaseStudyModalWrapper>
  );
}
