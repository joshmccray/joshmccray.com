import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Josh McCray",
  description: "Product designer specializing in user-centered experiences, design systems, and design-development collaboration.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            <div className="flex-shrink-0">
              {/* Placeholder for photo - replace with actual photo */}
              <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-500 font-light">Photo</span>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-normal mb-3 tracking-tight">
                Josh McCray
              </h1>
              <p className="text-sm text-gray-600 mb-2 font-light">
                Product Designer @ Compassion International
              </p>
              <p className="text-xs text-gray-500 font-light">
                Currently available for freelance projects
              </p>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="mb-24">
          <h2 className="text-lg font-normal mb-6 tracking-tight">About Me</h2>
          <div className="space-y-4">
            <p className="text-sm text-gray-700 leading-relaxed font-light">
              [Replace with your bio: 300-400 words about your journey, design philosophy,
              and what drives you as a designer. Include your career progression from Jockey
              to Compassion International, and what you're passionate about in product design.]
            </p>
            <p className="text-sm text-gray-700 leading-relaxed font-light">
              [Second paragraph: Talk about your approach to design, how you balance user needs
              with business goals, and your experience bridging design and development teams.]
            </p>
            <p className="text-sm text-gray-700 leading-relaxed font-light">
              [Third paragraph: What makes you unique as a designer, your specializations
              (design systems, UX research), and what you're excited about in the field.]
            </p>
          </div>
        </section>

        {/* Skills & Tools Section */}
        <section className="mb-24">
          <h2 className="text-lg font-normal mb-6 tracking-tight">Skills & Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-normal mb-4 text-gray-900">Design</h3>
              <ul className="space-y-2 text-xs text-gray-600 font-light">
                <li>Figma</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Sketch</li>
                <li>Principle</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-normal mb-4 text-gray-900">Development</h3>
              <ul className="space-y-2 text-xs text-gray-600 font-light">
                <li>React</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>HTML/CSS</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-normal mb-4 text-gray-900">Process</h3>
              <ul className="space-y-2 text-xs text-gray-600 font-light">
                <li>User Research</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Design Systems</li>
                <li>Usability Testing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Timeline Section */}
        <section className="mb-24">
          <h2 className="text-lg font-normal mb-6 tracking-tight">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-gray-200 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-sm font-normal text-gray-900">Product Designer</h3>
                  <p className="text-xs text-gray-600 font-light">Compassion International</p>
                </div>
                <span className="text-xs text-gray-500 font-light">2020 - Present</span>
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                [Key achievements and responsibilities at Compassion]
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-sm font-normal text-gray-900">UX Designer</h3>
                  <p className="text-xs text-gray-600 font-light">Jockey</p>
                </div>
                <span className="text-xs text-gray-500 font-light">2017 - 2020</span>
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                [Key achievements and responsibilities at Jockey]
              </p>
            </div>

            {/* Add more positions as needed */}
          </div>
        </section>

        {/* Personal Interests (Optional) */}
        <section className="mb-24">
          <h2 className="text-lg font-normal mb-6 tracking-tight">Beyond Design</h2>
          <p className="text-sm text-gray-700 leading-relaxed font-light">
            [Optional: Share personal interests, hobbies, side projects, or community involvement
            that humanizes you and shows culture fit]
          </p>
        </section>

        {/* Services Section */}
        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-lg font-normal mb-3 tracking-tight text-center">
            How I Can Help
          </h2>
          <p className="text-xs text-gray-600 mb-12 text-center font-light max-w-2xl mx-auto">
            Whether you're refining an existing product or building something new,
            I offer focused engagements designed to move your product forward.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Service 1: UX/Design Audit */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
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
              <Link
                href="/contact"
                className="block w-full text-center bg-[var(--accent)] text-white px-4 py-2 text-xs rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-200 font-normal"
              >
                Get Started
              </Link>
            </div>

            {/* Service 2: Product Design (0-1) */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
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
              <Link
                href="/contact"
                className="block w-full text-center bg-[var(--accent)] text-white px-4 py-2 text-xs rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-200 font-normal"
              >
                Get Started
              </Link>
            </div>

            {/* Service 3: UX Research & Strategy */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
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
              <Link
                href="/contact"
                className="block w-full text-center bg-[var(--accent)] text-white px-4 py-2 text-xs rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-200 font-normal"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Additional Options */}
          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-600 mb-4 font-light">
              Need something different? I also offer design system optimization,
              ongoing consultation retainers, and custom engagements.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href="/contact"
                className="border border-gray-300 px-4 py-2 text-xs rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-normal"
              >
                Discuss Custom Project
              </Link>
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
      </div>
    </div>
  );
}
