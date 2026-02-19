export function ConstructionBanner() {
  const message =
    "Pardon the mess — we're renovating ✦ Pardon the mess — we're renovating ✦ ";

  return (
    <div
      className="bg-gray-900 text-gray-300 text-xs font-light overflow-hidden whitespace-nowrap select-none"
      aria-label="Site under construction"
    >
      <div className="inline-flex animate-marquee">
        {/* Duplicate the message enough times to fill wide screens seamlessly */}
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="px-8">
            {message}
          </span>
        ))}
      </div>
    </div>
  );
}
