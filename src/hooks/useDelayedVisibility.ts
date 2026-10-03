import { useEffect, useState } from "react";

export function useDelayedVisibility(delay: number = 100) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible;
}
