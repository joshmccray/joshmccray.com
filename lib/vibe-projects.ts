export interface VibeProject {
  id: string;
  title: string;
  description: string;
  url: string;
  tech?: string[];
  year?: string;
}

export const vibeProjects: VibeProject[] = [
  {
    id: "example-1",
    title: "Example Vibe Project",
    description: "A fun experimental project exploring new technologies and creative ideas.",
    url: "https://example.com",
    tech: ["React", "TypeScript", "Next.js"],
    year: "2024",
  },
  {
    id: "example-2",
    title: "Another Experiment",
    description: "Playing around with animations and interactive experiences.",
    url: "https://example.com",
    tech: ["Three.js", "WebGL"],
    year: "2023",
  },
  // Add more vibe projects here
];
