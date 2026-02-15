import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shuffle - Josh McCray",
  description:
    "A design playground — random snippets of design work, experiments, and visual explorations.",
};

export default function ShuffleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
