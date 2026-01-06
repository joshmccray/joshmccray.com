import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact - Josh McCray",
  description: "Get in touch to discuss design projects, collaborations, or opportunities.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Hero */}
        <h1 className="text-4xl font-normal mb-6 tracking-tight">
          Let's Build Something Together
        </h1>
        <p className="text-sm text-gray-600 mb-12 leading-relaxed font-light">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, I'll do my best to get
          back to you within 24-48 hours.
        </p>

        {/* Email */}
        <div className="mb-12 p-8 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-600 mb-3 font-light">Email me at</p>
          <a
            href="mailto:your.email@example.com"
            className="text-lg font-normal hover:text-[var(--accent)] transition-colors block mb-4"
          >
            your.email@example.com
          </a>
          <p className="text-xs text-gray-500 font-light">
            [Replace with your actual email address]
          </p>
        </div>

        {/* Availability Status */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-green-800 font-normal">
              Currently available for freelance projects
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-12">
          <p className="text-xs text-gray-600 mb-4 font-light">
            Or connect with me on
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-[var(--accent)] transition-colors font-light"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-[var(--accent)] transition-colors font-light"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-[var(--accent)] transition-colors font-light"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Back to work link */}
        <div className="pt-12 border-t border-gray-200">
          <Link
            href="/case-studies"
            className="text-xs text-gray-600 hover:text-[var(--accent)] transition-colors font-light"
          >
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}
