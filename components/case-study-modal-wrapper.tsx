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

  useEffect(() => {
    const modal = searchParams.get("modal");
    if (modal) {
      const caseStudy = caseStudies.find((cs) => cs.slug === modal);
      setModalCaseStudy(caseStudy || null);
    } else {
      setModalCaseStudy(null);
    }
  }, [searchParams, caseStudies]);

  const handleCloseModal = () => {
    router.push(pathname);
  };

  if (!modalCaseStudy) {
    return null;
  }

  return (
    <CaseStudyDrawerClient
      caseStudy={modalCaseStudy}
      onClose={handleCloseModal}
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
