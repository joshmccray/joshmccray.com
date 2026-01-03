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
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mb-16">
        <h1 className="text-5xl font-bold mb-6">Blog</h1>
        <p className="text-xl text-gray-600">
          Thoughts on product design, development, and the creative process.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600 text-lg">
            No blog posts yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="max-w-3xl space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="border rounded-lg p-8 hover:shadow-xl transition-all">
                <div className="flex gap-2 mb-3">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4 text-lg">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
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
