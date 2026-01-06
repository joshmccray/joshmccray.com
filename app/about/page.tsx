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

        {/* CTA Section */}
        <section className="border-t border-gray-200 pt-12">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="/contact"
              className="bg-[var(--accent)] text-white px-6 py-3 text-xs rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-200 shadow-sm hover:shadow-md font-normal"
            >
              Let's Work Together
            </Link>
            <a
              href="/resume.pdf"
              download
              className="border border-gray-300 px-6 py-3 text-xs rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-normal"
            >
              Download Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
