"use client";

import { ArrowRight } from "lucide-react";

import { useScrollToSection } from "../hooks/scrollToSection.js";

interface HomeButtonProps {
  id: string;
  label: string;
  className: string;
}

function HomeButton({ id, label, className = "" }: HomeButtonProps) {
  const scrollToSection = useScrollToSection();

  return (
    <button
      onClick={() => scrollToSection(id)}
      className={`font-medium flex items-center gap-2 ${className}`}
    >
      {label}
      <ArrowRight size="15" color="white" strokeWidth={2.5} />
    </button>
  );
}

export default HomeButton;
