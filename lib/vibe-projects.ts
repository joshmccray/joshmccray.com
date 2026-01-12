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
    id: "4321",
    title: "4321",
    description: "A weightlifting tracking application with the goal of hitting specific plate totals in the big 4 lifts.",
    url: "https://joshmccray.github.io/4321/",
    tech: ["React", "TypeScript"],
    year: "2025",
  },
  // Add more vibe projects here
];
