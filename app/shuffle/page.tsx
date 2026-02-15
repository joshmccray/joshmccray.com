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
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-normal tracking-tight mb-4">Shuffle</h1>
        <p className="text-sm text-gray-600 font-light">
          A random walk through logos, screenshots, illustrations, and other
          design artifacts. Hit shuffle to see what comes up.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div
          style={{
            animation: isAnimating
              ? "shuffleOut 300ms ease-in forwards"
              : "shuffleIn 400ms ease-out forwards",
          }}
        >
          <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={currentItem.imagePath}
              alt={currentItem.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="pt-6">
            <h2 className="text-sm font-normal">{currentItem.title}</h2>
            <p className="text-xs text-gray-600 font-light mt-1">
              {currentItem.description}
            </p>

            <div className="flex gap-2 flex-wrap mt-3">
              {currentItem.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full font-light"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-3">
              {currentItem.projectUrl && (
                <Link
                  href={currentItem.projectUrl}
                  className="text-xs text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                >
                  View project →
                </Link>
              )}
              {currentItem.dribbbleUrl && (
                <a
                  href={currentItem.dribbbleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-[var(--accent)] transition-colors"
                >
                  View on Dribbble →
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <button
            onClick={handleShuffle}
            disabled={isAnimating}
            className="bg-[var(--accent)] text-white px-6 py-3 text-xs rounded-lg hover:bg-[var(--accent-hover)] transition-all duration-200 shadow-sm hover:shadow-md font-normal disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
          >
            🎲 Shuffle
          </button>

          <span className="text-xs text-gray-500 font-light">
            {currentIndex + 1} of {shuffleItems.length}
          </span>
        </div>
      </div>
    </main>
  );
}
