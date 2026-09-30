"use client";

import { useState, useEffect } from "react";
import { useScrollToSection } from "@/hooks/index";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "services", "contact"];

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useScrollToSection();

  return (
    <>
      <div className="h-14 pr-12 pl-12 flex fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-400 items-center justify-between border-b border-border bg-backgound/80 backdrop-blur-sm">
        <h1
          onClick={() => scrollToSection("home")}
          className="font-logo lg:text-[18px] text-secondery"
        >
          codespecia.in
        </h1>
        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className={`text-primary lg:font-medium lg:text-sm hover:text-secondery transition ${active === "home" ? "text-secondery" : ""}`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`text-primary lg:font-medium lg:text-sm hover:text-secondery transition ${active === "about" ? "text-secondery" : ""}`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`text-primary lg:font-medium lg:text-sm hover:text-secondery transition ${active === "projects" ? "text-secondery" : ""}`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className={`text-primary lg:font-medium lg:text-sm hover:text-secondery transition ${active === "services" ? "text-secondery" : ""}`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={
              "text-gray-100 lg:font-medium lg:text-sm px-3 py-1 rounded-sm border-2 border-secondery bg-secondery"
            }
          >
            Let's Talk
          </button>
        </div>
      </div>
    </>
  );
}
