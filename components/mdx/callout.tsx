interface CalloutProps {
  type?: "insight" | "learning" | "challenge";
  children: React.ReactNode;
}

export function Callout({ type = "insight", children }: CalloutProps) {
  const styles = {
    insight: "bg-blue-50 border-blue-200 text-blue-900",
    learning: "bg-green-50 border-green-200 text-green-900",
    challenge: "bg-orange-50 border-orange-200 text-orange-900"
  };

  return (
    <div className={`my-6 p-4 border-l-4 rounded-r ${styles[type]}`}>
      <div className="font-medium">{children}</div>
    </div>
  );
}
