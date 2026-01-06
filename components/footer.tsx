export function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Email section */}
          <div>
            <p className="text-xs text-gray-600 mb-2 font-light">Get in touch</p>
            <a
              href="mailto:your.email@example.com"
              className="text-sm text-gray-900 hover:text-[var(--accent)] transition-colors font-normal"
            >
              your.email@example.com
            </a>
          </div>

          {/* Availability status */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span className="text-xs text-green-800 font-light">
              Available for freelance projects
            </span>
          </div>

          {/* Social links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/joshmccray"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-[var(--accent)] transition-colors font-light"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/joshmccray"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-[var(--accent)] transition-colors font-light"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/joshmccray"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-[var(--accent)] transition-colors font-light"
            >
              Twitter
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500 font-light">
            © {new Date().getFullYear()} Josh McCray. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
