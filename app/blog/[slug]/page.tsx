import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost, getAllBlogPosts } from "@/lib/markdown";
import type { Metadata } from "next";
import Image from "next/image";
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
    title: `${post.title} - Josh McCray`,
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
    <article className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2 mb-4">
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
          <h1 className="text-4xl font-normal mb-6 tracking-tight">{post.title}</h1>
          <div className="flex items-center gap-3 text-xs text-gray-500 font-light">
            <time>{new Date(post.date).toLocaleDateString()}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </div>

        {post.coverImage && (
          <div className="aspect-video bg-gray-100 rounded-xl mb-12"></div>
        )}

        <ContentWrapper>
          <MDXRemote source={post.content} />
        </ContentWrapper>
      </div>
    </article>
  );
}
