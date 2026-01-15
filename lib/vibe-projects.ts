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
    id: "loaded-questions",
    title: "Loaded Questions",
    description: "Big questions, expert answers. Insights from science, psychology, and philosophy on life's deepest questions. Password protected — contact me to view.",
    url: "https://curse-grasp-52303567.figma.site/",
    tech: ["Figma Sites"],
    year: "2025",
  },
  {
    id: "4321",
    title: "4321",
    description: "A weightlifting tracking application with the goal of hitting specific plate totals in the big 4 lifts.",
    url: "https://joshmccray.github.io/4321/",
    tech: ["React", "TypeScript"],
    year: "2025",
  },
];
