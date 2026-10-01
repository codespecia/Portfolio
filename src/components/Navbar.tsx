"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "about",
      label: "About",
    },
    {
      id: "projects",
      label: "Projects",
    },
    {
      id: "services",
      label: "Services",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "services", "contact"];

      for (const id of sections) {
        const element = document.getElementById(id);

        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const isMobile = window.innerWidth < 1024;

    const scrollToElement = () => {
      const navbarHeight = 56;
      const gap = 20;

      const elementTop = element.getBoundingClientRect().top + window.scrollY;

      const targetPosition = elementTop - navbarHeight - gap;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      });
    };

    if (isMobile) {
      setIsOpen(false);

      setTimeout(() => {
        scrollToElement();
      }, 200);
    } else {
      scrollToElement();
    }
  };

  return (
    <nav className="fixed top-0 left-1/2 z-50 w-full max-w-400 -translate-x-1/2">
      <div className="overflow-hidden border-b border-border bg-backgound/80 backdrop-blur-sm">
        <div className="flex h-14 items-center justify-between px-6 lg:px-12">
          <h1
            onClick={() => handleNavigation("home")}
            className="font-logo text-[18px] text-secondery"
          >
            codespecia.in
          </h1>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active === link.id
                    ? "text-secondery"
                    : "text-primary hover:text-secondery"
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNavigation("contact")}
              className="rounded-sm border-2 border-secondery bg-secondery px-3 py-1 text-sm font-medium text-gray-100 transition-opacity duration-200 hover:opacity-90"
            >
              Let's Talk
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex flex-col gap-1.5 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-primary transition-all duration-200 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-6 bg-primary transition-all duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-6 bg-primary transition-all duration-200 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`grid transition-all duration-200 ease-out lg:hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="border-t border-border/60">
              <div className="flex flex-col items-end gap-5 px-6 py-6">
                {links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavigation(link.id)}
                    className={`text-right text-sm font-medium transition-colors duration-200 ${
                      active === link.id
                        ? "text-secondery"
                        : "text-primary hover:text-secondery"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}

                <button
                  onClick={() => handleNavigation("contact")}
                  className="rounded-sm border-2 border-secondery bg-secondery px-4 py-2 text-sm font-medium text-gray-100 transition-opacity duration-200 hover:opacity-90"
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
