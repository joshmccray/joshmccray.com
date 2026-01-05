interface ImageGridProps {
  columns?: 1 | 2 | 3;
  gap?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function ImageGrid({
  columns = 2,
  gap = "md",
  children
}: ImageGridProps) {
  const gapClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-8"
  };

  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3"
  };

  return (
    <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]} my-8`}>
      {children}
    </div>
  );
}
