"use client";

import { useEffect, useRef, useState } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px 0px 0px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id={id} ref={ref} className="w-full [overflow-anchor:none]">
      <div
        className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] w-full ${
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
