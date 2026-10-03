"use client";

import { useIntersectionObserver } from "@/hooks";

interface ScrollRevealProps {
  children: React.ReactNode;
  id?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  id,
  delay = 0,
}: ScrollRevealProps) {
  const { ref, isVisible } = useIntersectionObserver(0.1, "0px 0px 0px 0px");

  return (
    <div id={id} ref={ref} className="w-full [overflow-anchor:none]">
      <div
        className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] w-full will-change-[transform,opacity,filter] ${
          isVisible
            ? "opacity-100 blur-0 translate-y-0"
            : "opacity-0 blur-md translate-y-6"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}
