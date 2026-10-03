"use client";

import { useEffect, useState } from "react";

interface WordSlideInProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function WordSlideIn({
  text,
  className = "",
  delay = 100,
}: WordSlideInProps) {
  const words = text.split(" ");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden mr-[0.25em] last:mr-0"
        >
          <span
            className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-full opacity-0 blur-sm"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
