"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CaseStudyContent } from "./case-study-content";
import type { CaseStudy } from "@/lib/markdown";

interface CaseStudyDrawerClientProps {
  caseStudy: CaseStudy;
}

export function CaseStudyDrawerClient({ caseStudy }: CaseStudyDrawerClientProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true after hydration
    setMounted(true);

    // Lock body scroll when drawer is open
    document.body.style.overflow = "hidden";

    // Handle ESC key to close drawer
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [router]);

  const handleClose = () => {
    router.back();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking the backdrop itself, not the drawer content
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Don't render until mounted on client to avoid hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
    >
      <div className="relative h-[90vh] w-full bg-white rounded-t-2xl shadow-2xl animate-in slide-in-from-bottom duration-500">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900"
          aria-label="Close drawer"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Scrollable content */}
        <div className="h-full overflow-y-auto px-4 py-16 md:px-8">
          <CaseStudyContent caseStudy={caseStudy} />
        </div>
      </div>
    </div>
  );
}
