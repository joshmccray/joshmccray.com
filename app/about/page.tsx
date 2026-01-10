import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About - Josh McCray",
  description: "Senior Product Designer with 10+ years of experience creating exceptional digital experiences across e-commerce, nonprofit, and early-stage tech sectors.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            <div className="flex-shrink-0">
              <Image
                src="/pfp.webp"
                alt="Josh McCray"
                width={192}
                height={192}
                className="w-48 h-48 rounded-full object-cover"
                priority
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-normal mb-3 tracking-tight">
                Josh McCray
              </h1>
              <p className="text-sm text-gray-600 mb-2 font-light">
                Senior Product Designer @ Come Near
              </p>
              <p className="text-xs text-gray-500 font-light">
                Greater Chicago Area (Remote)
              </p>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="mb-24">
          <h2 className="text-lg font-normal mb-6 tracking-tight">About Me</h2>
          <div className="space-y-4">
            <p className="text-sm text-gray-700 leading-relaxed font-light">
              I&apos;m a Senior Product Designer with over a decade of experience creating exceptional digital experiences across e-commerce, nonprofit, and early-stage tech sectors. Currently at Come Near, I&apos;m focused on raising meaningful public conversations through thoughtfully designed digital products. My journey has taken me from designing high-traffic e-commerce experiences at Jockey International to leading product design initiatives at Compassion International, where I developed new product experiences that connect people with meaningful causes.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed font-light">
              With a passion for visual design and branding, I specialize in crafting cohesive product experiences that balance user needs with business objectives. My approach combines deep user empathy with technical expertise—I believe the best design solutions emerge when designers understand both the human experience and the technical constraints. Having led design teams and worked alongside developers throughout my career, I excel at bridging the gap between design vision and technical implementation.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed font-light">
              What sets me apart is my hybrid skill set: I&apos;m equally comfortable conducting user research, creating high-fidelity designs, and writing front-end code. I&apos;ve built and maintained design systems, led UX teams, and mentored emerging designers and developers through programs like Out of Office Hours. I also taught Interactive Design at the University of Wisconsin-Parkside, sharing my passion for creating intuitive, user-centered digital experiences with the next generation of designers.
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
                  <h3 className="text-sm font-normal text-gray-900">Senior Product Designer</h3>
                  <p className="text-xs text-gray-600 font-light">Come Near</p>
                </div>
                <span className="text-xs text-gray-500 font-light">Apr 2025 - Present</span>
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Designing digital products focused on raising meaningful public conversations through thoughtful, user-centered experiences.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-sm font-normal text-gray-900">Senior User Experience Architect</h3>
                  <p className="text-xs text-gray-600 font-light">Compassion International</p>
                </div>
                <span className="text-xs text-gray-500 font-light">Apr 2022 - Apr 2025</span>
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Lead Product Designer for Compassion Causes, a new product experience connecting people with meaningful nonprofit initiatives. Drove user research, design strategy, and implementation across web and mobile platforms.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-sm font-normal text-gray-900">Manager, Interactive & UX Design</h3>
                  <p className="text-xs text-gray-600 font-light">Jockey International</p>
                </div>
                <span className="text-xs text-gray-500 font-light">Oct 2021 - Apr 2022</span>
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Led the User Experience and Web Design team, establishing design processes and standards for the e-commerce platform.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-sm font-normal text-gray-900">Lead Web Designer</h3>
                  <p className="text-xs text-gray-600 font-light">Jockey International</p>
                </div>
                <span className="text-xs text-gray-500 font-light">Apr 2017 - Oct 2021</span>
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Led the User Experience and Web Design team for Jockey.com, overseeing the design and evolution of the e-commerce experience for a global brand.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-sm font-normal text-gray-900">Front End Web Designer</h3>
                  <p className="text-xs text-gray-600 font-light">Jockey International</p>
                </div>
                <span className="text-xs text-gray-500 font-light">Mar 2015 - Apr 2017</span>
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Worked alongside web developers to create beautiful, usable solutions for Jockey.com, bridging design and development.
              </p>
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-sm font-normal text-gray-900">Lecturer - Interactive Design</h3>
                  <p className="text-xs text-gray-600 font-light">University of Wisconsin-Parkside</p>
                </div>
                <span className="text-xs text-gray-500 font-light">Sep 2020 - Oct 2021</span>
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Taught Interactive Design I & II, mentoring students in user-centered design principles and web design fundamentals.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Interests (Optional) */}
        <section className="mb-24">
          <h2 className="text-lg font-normal mb-6 tracking-tight">Beyond Design</h2>
          <p className="text-sm text-gray-700 leading-relaxed font-light">
            Outside of my professional work, I&apos;m passionate about giving back to the design community. I spent three years as a mentor through Out of Office Hours, helping students, designers, and developers who are new to the industry navigate their careers and develop their skills. I believe in the power of mentorship and community—many of the opportunities I&apos;ve had came from people who invested in me, and I&apos;m committed to paying that forward.
          </p>
        </section>

        {/* CTA Section */}
        <section className="border-t border-gray-200 pt-12 text-center">
          <h2 className="text-lg font-normal mb-3 tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-xs text-gray-600 mb-6 font-light max-w-2xl mx-auto">
            Interested in collaborating on your next product? I bring a unique blend of design expertise and technical knowledge to create exceptional user experiences.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-[var(--accent)] text-white px-6 py-2 text-xs rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-200 font-normal"
            >
              Get in Touch
            </Link>
            <a
              href="https://www.linkedin.com/in/joshmccray"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 px-6 py-2 text-xs rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-normal"
            >
              View LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
