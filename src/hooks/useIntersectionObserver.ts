import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(
  threshold: number = 0.1,
  rootMargin: string = "0px 0px 0px 0px"
) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          if (entry.boundingClientRect.top > 0) {
            setIsVisible(false);
          }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
