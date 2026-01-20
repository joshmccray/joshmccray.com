import Link from "next/link";
import { getAllBlogPosts } from "@/lib/markdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Josh McCray",
  description: "Thoughts on product design, development, and the creative process",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="container mx-auto px-4 py-20">
        <section className="max-w-3xl mb-20">
          <h1 className="text-4xl font-normal mb-8 tracking-tight">Blog</h1>
          <p className="text-sm text-gray-600 font-light leading-relaxed">
            Thoughts on product design, development, and the creative process.
          </p>
        </section>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-sm font-light">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600 font-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2 className="text-base font-normal mb-3 group-hover:text-[var(--accent)] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 mb-4 text-sm font-light leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-light">
                    <time>{new Date(post.date).toLocaleDateString()}</time>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
    </div>
  );
}
