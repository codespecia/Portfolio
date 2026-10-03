"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
] as const;

const SECTIONS = ["home", "about", "projects", "services", "contact"] as const;

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      for (const id of SECTIONS) {
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const width = window.innerWidth;
    const navbarHeight = 56;
    const gap = width >= 1024 ? 48 : width >= 640 ? 40 : 32;

    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const targetPosition = elementTop - navbarHeight - gap;

    setIsOpen(false);

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-transparent lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 w-full lg:left-1/2 lg:right-auto lg:w-full lg:max-w-400 lg:-translate-x-1/2"
      >
        <div className="w-full border-b border-border bg-background/80 backdrop-blur-md">
          <div className="flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-12">
            <button
              type="button"
              onClick={() => handleNavigation("home")}
              className="min-w-0 shrink-0 font-logo text-base text-secondery !cursor-default sm:text-[17px] lg:text-[18px]"
            >
              codespecia.in
            </button>

            <div className="hidden items-center gap-6 lg:flex xl:gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavigation(link.id)}
                  className={`whitespace-nowrap text-sm font-medium transition-colors duration-200 ${
                    active === link.id
                      ? "text-secondery"
                      : "text-primary hover:text-secondery"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => handleNavigation("contact")}
                className="shrink-0 whitespace-nowrap rounded-sm border-2 border-secondery bg-secondery px-3 py-1 text-sm font-medium text-gray-100 transition-opacity duration-200 hover:opacity-90"
              >
                Let&apos;s Talk
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative z-10 flex shrink-0 flex-col gap-1 p-2 -mr-2 lg:hidden sm:gap-1.5 sm:p-1 sm:-mr-0"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span
                className={`block h-0.5 w-5 rounded-full bg-primary transition-all duration-150 sm:w-6 sm:rounded-none ${
                  isOpen ? "translate-y-1.5 rotate-45 sm:translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-primary transition-all duration-150 sm:w-6 sm:rounded-none ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-primary transition-all duration-150 sm:w-6 sm:rounded-none ${
                  isOpen ? "-translate-y-1.5 -rotate-45 sm:-translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className={`absolute right-4 sm:right-6 top-16 z-50 w-48 sm:w-52 origin-top-right rounded-2xl border border-border bg-background/80 p-4 shadow-2xl backdrop-blur-md transition-all will-change-[transform,opacity] ${
            isOpen
              ? "duration-150 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] scale-100 opacity-100 pointer-events-auto"
              : "duration-150 ease-in scale-80 opacity-0 pointer-events-none"
          } lg:hidden`}
        >
          <div className="flex flex-col items-end gap-3.5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavigation(link.id)}
                className={`text-right text-sm font-medium transition-colors duration-200 ${
                  active === link.id
                    ? "text-secondery font-semibold"
                    : "text-primary hover:text-secondery"
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => handleNavigation("contact")}
              className="mt-1 w-full rounded-sm border-2 border-secondery bg-secondery px-3 py-1.5 text-center text-sm font-medium text-gray-100"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
