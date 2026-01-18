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
            href="mailto:hello@joshmccray.com"
            className="text-lg font-normal hover:text-[var(--accent)] transition-colors block mb-4"
          >
            hello@joshmccray.com
          </a>
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
              href="https://github.com/joshmccray"
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

        {/* Services Section */}
        <section className="border-t border-gray-200 pt-12 mb-12">
          <h2 className="text-lg font-normal mb-3 tracking-tight">
            How I Can Help
          </h2>
          <p className="text-xs text-gray-600 mb-12 font-light max-w-2xl mx-auto">
            Whether you're refining an existing product or building something new,
            I offer focused engagements designed to move your product forward.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Service 1: UX/Design Audit */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 text-left">
              <h3 className="text-sm font-normal mb-2">UX/Design Audit</h3>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed font-light">
                Get expert analysis of your product's user experience with actionable
                recommendations to improve usability and conversion.
              </p>
              <div className="mb-4">
                <p className="text-xs text-gray-600 font-normal mb-2">What's included:</p>
                <ul className="text-xs text-gray-600 space-y-1 font-light">
                  <li>• Heuristic evaluation</li>
                  <li>• Usability analysis</li>
                  <li>• Prioritized recommendations</li>
                  <li>• 1-hour presentation call</li>
                </ul>
              </div>
              <div className="mb-4 pt-4 border-t border-gray-200">
                <p className="text-2xl font-normal text-gray-900">$1,500</p>
                <p className="text-xs text-gray-500 font-light">2-week turnaround</p>
              </div>
              <a
                href="mailto:hello@joshmccray.com"
                className="block w-full text-center bg-[var(--accent)] text-white px-4 py-2 text-xs rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-200 font-normal"
              >
                Get Started
              </a>
            </div>

            {/* Service 2: Product Design (0-1) */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 text-left">
              <h3 className="text-sm font-normal mb-2">Product Design (0-1)</h3>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed font-light">
                Transform your product idea into polished, user-tested designs ready
                for development. From concept to high-fidelity prototypes.
              </p>
              <div className="mb-4">
                <p className="text-xs text-gray-600 font-normal mb-2">What's included:</p>
                <ul className="text-xs text-gray-600 space-y-1 font-light">
                  <li>• Discovery & requirements</li>
                  <li>• Wireframes & user flows</li>
                  <li>• High-fidelity designs</li>
                  <li>• Interactive prototypes</li>
                  <li>• Design system foundations</li>
                </ul>
              </div>
              <div className="mb-4 pt-4 border-t border-gray-200">
                <p className="text-2xl font-normal text-gray-900">$8,500</p>
                <p className="text-xs text-gray-500 font-light">4-6 week engagement</p>
              </div>
              <a
                href="mailto:hello@joshmccray.com"
                className="block w-full text-center bg-[var(--accent)] text-white px-4 py-2 text-xs rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-200 font-normal"
              >
                Get Started
              </a>
            </div>

            {/* Service 3: UX Research & Strategy */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 text-left">
              <h3 className="text-sm font-normal mb-2">UX Research & Strategy</h3>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed font-light">
                Validate assumptions and guide product decisions with user research.
                Understand your users deeply before investing in design and development.
              </p>
              <div className="mb-4">
                <p className="text-xs text-gray-600 font-normal mb-2">What's included:</p>
                <ul className="text-xs text-gray-600 space-y-1 font-light">
                  <li>• User interviews (5-8)</li>
                  <li>• Persona development</li>
                  <li>• Journey mapping</li>
                  <li>• Strategic recommendations</li>
                  <li>• Findings presentation</li>
                </ul>
              </div>
              <div className="mb-4 pt-4 border-t border-gray-200">
                <p className="text-2xl font-normal text-gray-900">$3,500</p>
                <p className="text-xs text-gray-500 font-light">3-week engagement</p>
              </div>
              <a
                href="mailto:hello@joshmccray.com"
                className="block w-full text-center bg-[var(--accent)] text-white px-4 py-2 text-xs rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-200 font-normal"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Additional Options */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-600 mb-4 font-light">
              Need something different? I also offer design system optimization,
              ongoing consultation retainers, and custom engagements.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href="mailto:hello@joshmccray.com"
                className="border border-gray-300 px-4 py-2 text-xs rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-normal"
              >
                Discuss Custom Project
              </a>
              <a
                href="/resume.pdf"
                download
                className="border border-gray-300 px-4 py-2 text-xs rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-normal"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

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
