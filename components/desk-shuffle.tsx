"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { shuffleItems } from "@/lib/shuffle-items";

function pickRandom(excludeId?: string) {
  let next = shuffleItems[Math.floor(Math.random() * shuffleItems.length)];
  if (shuffleItems.length > 1 && excludeId) {
    let guard = 0;
    while (next.id === excludeId && guard < 8) {
      next = shuffleItems[Math.floor(Math.random() * shuffleItems.length)];
      guard++;
    }
  }
  return next;
}

export function DeskShuffle() {
  const [item, setItem] = useState(() => shuffleItems[0]);
  const [animating, setAnimating] = useState(false);

  const reshuffle = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setItem(pickRandom(item.id));
      setAnimating(false);
    }, 220);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-baseline justify-between gap-3 mb-4">
        <h2 className="text-sm font-medium tracking-wide text-[var(--muted)] uppercase">
          From the desk
        </h2>
        <button
          type="button"
          onClick={reshuffle}
          disabled={animating}
          className="text-sm text-[var(--accent)] hover:text-[var(--accent-hover)] disabled:opacity-50"
        >
          Shuffle
        </button>
      </div>

      <div
        className="flex-1 flex flex-col min-h-0"
        style={{
          animation: animating
            ? "shuffleOut 220ms ease-in forwards"
            : "shuffleIn 320ms ease-out forwards",
        }}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-2)] mb-4">
          <Image
            src={item.imagePath}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 360px"
          />
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-lg tracking-tight mb-1">
          {item.title}
        </h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 flex-1">
          {item.description}
        </p>
        <Link
          href="/shuffle"
          className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
        >
          Open the full drawer →
        </Link>
      </div>
    </div>
  );
}
