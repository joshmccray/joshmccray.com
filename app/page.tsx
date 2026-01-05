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
      <div className="container mx-auto px-4 py-16">
      <section className="max-w-3xl mb-24">
        <h1 className="text-5xl font-bold mb-6">
          Hi, I&apos;m Josh McCray
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          I&apos;m a product designer focused on creating intuitive, user-centered experiences.
          I combine design thinking with technical expertise to build products that people love.
        </p>
        <div className="flex gap-4">
          <Link
            href="/case-studies"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Case Studies
          </Link>
          <Link
            href="/blog"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors"
          >
            Read Blog
          </Link>
        </div>
      </section>

      {caseStudies.length > 0 && (
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Case Studies</h2>
            <Link href="/case-studies" className="text-gray-600 hover:text-gray-900">
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/?modal=${study.slug}`}
                scroll={false}
                className="group"
              >
                <article className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
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
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{study.client} • {study.role}</p>
                    <p className="text-gray-700 line-clamp-3">{study.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {vibeProjects.length > 0 && (
        <section className="mb-24">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-3">Vibe Coded Projects</h2>
            <p className="text-gray-600 max-w-2xl">
              Experimental projects and side builds where I explore new technologies,
              play with creative ideas, and code for the joy of it.
            </p>
          </div>
          <div className="max-w-3xl space-y-1">
            {vibeProjects.map((project, index) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-5 border-b border-gray-200 hover:bg-gray-50 transition-colors -mx-4 px-4"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold group-hover:underline decoration-2 underline-offset-4">
                        {project.title}
                      </h3>
                      <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors flex-shrink-0"
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
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    {project.tech && project.tech.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-gray-500 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {project.year && (
                    <div className="text-sm text-gray-400 font-mono tabular-nums flex-shrink-0">
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
            <h2 className="text-3xl font-bold">Latest Posts</h2>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              View all →
            </Link>
          </div>
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-700 mb-3">{post.excerpt}</p>
                      <div className="flex gap-4 text-sm text-gray-500">
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
