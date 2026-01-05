import Link from "next/link";
import type { CaseStudy } from "@/lib/markdown";

interface CaseStudyPaginationProps {
  previous?: CaseStudy;
  next?: CaseStudy;
}

export function CaseStudyPagination({ previous, next }: CaseStudyPaginationProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav className="mt-20 pt-12 border-t border-gray-200">
      <div className="grid md:grid-cols-2 gap-6">
        {previous ? (
          <Link
            href={`/case-studies/${previous.slug}`}
            className="group block border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-x-1"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Previous</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
              {previous.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{previous.excerpt}</p>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/case-studies/${next.slug}`}
            className="group block border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:translate-x-1 text-right"
          >
            <div className="flex items-center justify-end gap-2 text-sm text-gray-500 mb-3">
              <span>Next</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
              {next.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{next.excerpt}</p>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
