"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { shuffleItems } from "@/lib/shuffle-items";

export default function ShufflePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentItem = shuffleItems[currentIndex];

  const handleShuffle = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      let nextIndex: number;
      do {
        nextIndex = Math.floor(Math.random() * shuffleItems.length);
      } while (nextIndex === currentIndex && shuffleItems.length > 1);
      setCurrentIndex(nextIndex);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="mx-auto max-w-5xl px-5 md:px-6 py-14 md:py-20">
      <div className="max-w-2xl mb-12 md:mb-14">
        <p className="text-sm text-[var(--muted)] mb-3">Desk drawer</p>
        <h1 className="text-4xl md:text-5xl tracking-tight mb-5">Shuffle</h1>
        <p className="text-[var(--muted)] leading-relaxed">
          A random walk through logos, screenshots, illustrations, and other
          design artifacts. Hit shuffle to see what comes up.
        </p>
      </div>

      <div className="max-w-3xl">
        <div
          style={{
            animation: isAnimating
              ? "shuffleOut 300ms ease-in forwards"
              : "shuffleIn 400ms ease-out forwards",
          }}
        >
          <div className="aspect-video relative overflow-hidden bg-gray-200">
            <Image
              src={currentItem.imagePath}
              alt={currentItem.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="pt-7">
            <h2 className="text-2xl tracking-tight">{currentItem.title}</h2>
            <p className="text-[var(--muted)] mt-2 leading-relaxed">
              {currentItem.description}
            </p>

            <div className="flex gap-2 flex-wrap mt-4">
              {currentItem.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[var(--muted)] border border-[var(--border)] px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-5 mt-5">
              {currentItem.projectUrl && (
                <Link
                  href={currentItem.projectUrl}
                  className="text-sm text-[var(--accent)] hover:underline"
                >
                  View project →
                </Link>
              )}
              {currentItem.dribbbleUrl && (
                <a
                  href={currentItem.dribbbleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
                >
                  View on Dribbble →
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            onClick={handleShuffle}
            disabled={isAnimating}
            className="bg-[var(--accent)] text-white px-6 py-3 text-sm font-medium rounded-md hover:bg-[var(--accent-hover)] transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
          >
            Shuffle again
          </button>
          <span className="text-sm text-[var(--muted)] tabular-nums">
            {currentIndex + 1} of {shuffleItems.length}
          </span>
        </div>
      </div>
    </div>
  );
}
