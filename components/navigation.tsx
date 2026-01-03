import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Josh McCray
          </Link>
          <div className="flex gap-6">
            <Link
              href="/case-studies"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
