"use client";

import { useRef } from "react";
import AboutSection from "../components/AboutSection";
import IntroSection from "../components/IntroSection";
import ProjectSection from "../components/ProjectSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <main
      ref={containerRef}
      className="flex flex-col gap-30 pt-30 sm:gap-40 sm:pt-40"
    >
      <IntroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  );
}
