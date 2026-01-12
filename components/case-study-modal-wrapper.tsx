"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { CaseStudyDrawerClient } from "./case-study-drawer-client";
import type { CaseStudy } from "@/lib/markdown";

interface CaseStudyModalWrapperProps {
  caseStudies: CaseStudy[];
  children: React.ReactNode;
}

function ModalContent({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [modalCaseStudy, setModalCaseStudy] = useState<CaseStudy | null>(null);
  const [previousStudy, setPreviousStudy] = useState<CaseStudy | undefined>(undefined);
  const [nextStudy, setNextStudy] = useState<CaseStudy | undefined>(undefined);

  useEffect(() => {
    const modal = searchParams.get("modal");
    if (modal) {
      const caseStudy = caseStudies.find((cs) => cs.slug === modal);
      setModalCaseStudy(caseStudy || null);

      // Calculate previous and next case studies
      if (caseStudy) {
        const currentIndex = caseStudies.findIndex((cs) => cs.slug === modal);
        setPreviousStudy(currentIndex > 0 ? caseStudies[currentIndex - 1] : undefined);
        setNextStudy(currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : undefined);
      }
    } else {
      setModalCaseStudy(null);
      setPreviousStudy(undefined);
      setNextStudy(undefined);
    }
  }, [searchParams, caseStudies]);

  const handleCloseModal = () => {
    router.push(pathname, { scroll: false });
  };

  if (!modalCaseStudy) {
    return null;
  }

  return (
    <CaseStudyDrawerClient
      caseStudy={modalCaseStudy}
      onClose={handleCloseModal}
      previous={previousStudy}
      next={nextStudy}
    />
  );
}

export function CaseStudyModalWrapper({ caseStudies, children }: CaseStudyModalWrapperProps) {
  return (
    <>
      {children}
      <Suspense fallback={null}>
        <ModalContent caseStudies={caseStudies} />
      </Suspense>
    </>
  );
}
