import Link from "next/link";
import { getAllBlogPosts } from "@/lib/markdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Josh McCray",
  description:
    "Thoughts on product design, development, and the creative process",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
      <section className="max-w-2xl mb-16 md:mb-20">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] mb-4">
          Writing
        </p>
        <h1 className="text-4xl md:text-6xl tracking-tight mb-6">Blog</h1>
        <p className="text-lg text-[var(--muted)] leading-relaxed">
          Thoughts on product design, development, and the creative process.
        </p>
      </section>

      {posts.length === 0 ? (
        <p className="text-[var(--muted)]">
          No blog posts yet. Check back soon!
        </p>
      ) : (
        <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)] max-w-3xl">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block py-8">
                <time className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                  <span className="mx-2 opacity-40">·</span>
                  {post.readingTime}
                </time>
                <h2 className="mt-3 text-2xl tracking-tight group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-[var(--muted)] leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
