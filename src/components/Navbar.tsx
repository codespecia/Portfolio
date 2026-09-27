"use client";

import { useState, useEffect } from "react";
import { useScrollToSection } from "../hooks/scrollToSection";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const sections = ["home", "about", "projects", "services", "contact"];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="h-14 pr-12 pl-12 flex fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-400 items-center justify-between border-b border-border bg-backgound/80 backdrop-blur-sm">
        <h1
          onClick={() => scrollToSection("home")}
          className="font-logo lg:text-[18px] text-secondery cursor-pointer"
        >
          codespecia.in
        </h1>
        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className={`text-primary lg:font-medium lg:text-sm hover:text-secondery transition ${active == "home" ? "text-secondery" : ""}`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`text-primary lg:font-medium lg:text-sm hover:text-secondery transition ${active == "about" ? "text-secondery" : ""}`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`text-primary lg:font-medium lg:text-sm hover:text-secondery transition ${active == "projects" ? "text-secondery" : ""}`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className={`text-primary lg:font-medium lg:text-sm hover:text-secondery transition ${active == "services" ? "text-secondery" : ""}`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-100 lg:font-medium lg:text-sm px-3 py-1 rounded-sm border-2 border-secondery bg-secondery"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </>
  );
}
