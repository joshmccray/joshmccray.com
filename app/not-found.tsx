import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-normal mb-6 tracking-tight text-gray-300">404</h1>
        <h2 className="text-2xl font-normal mb-4 tracking-tight">Page Not Found</h2>
        <p className="text-sm text-gray-600 mb-8 leading-relaxed font-light">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-[var(--accent)] text-white px-4 py-2 text-xs rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-200 shadow-sm hover:shadow-md font-normal"
          >
            Go Home
          </Link>
          <Link
            href="/case-studies"
            className="border border-gray-300 px-4 py-2 text-xs rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-normal"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}
