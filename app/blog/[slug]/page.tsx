import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost, getAllBlogPosts } from "@/lib/markdown";
import type { Metadata } from "next";
import Link from "next/link";
import { ContentWrapper } from "@/components/content-wrapper";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} — Josh McCray`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
      <div className="max-w-3xl">
        <nav className="mb-10" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-[var(--muted)]">
            <li>
              <Link
                href="/blog"
                className="hover:text-[var(--accent)] transition-colors"
              >
                Writing
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li
              className="text-[var(--foreground)] truncate max-w-[220px]"
              aria-current="page"
            >
              {post.title}
            </li>
          </ol>
        </nav>

        <header className="mb-12">
          <time className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
            <span className="mx-2 opacity-40">·</span>
            {post.readingTime}
          </time>
          <h1 className="mt-4 text-4xl md:text-5xl tracking-tight mb-4">
            {post.title}
          </h1>
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[var(--muted)] border border-[var(--border)] px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <ContentWrapper>
          <MDXRemote source={post.content} />
        </ContentWrapper>
      </div>
    </article>
  );
}
