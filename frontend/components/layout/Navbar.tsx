"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/data/nav-links";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/logo.webp";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScroller] = useState(false);

  // Closes mobile navigation bar on scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Detects scroll event
  useEffect(() => {
    const handleScroll = () => setScroller(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // Closes mobile dropdown if window is above threshold
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || isOpen ? "bg-background" : "bg-transparent"
      }`}
    >
      <div className="p-4 mx-auto max-w-7xl">
        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center md:gap-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image
              src={Logo}
              alt="Grigorakis Logistics"
              width={120}
              height={120}
              loading="eager"
              className="w-30 h-30"
            />
          </Link>

          {/* Links */}
          <ul className="flex items-center justify-center gap-8 text-xs font-medium uppercase">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={"#" + link.section}
                  className="block py-2 transition-colors hover:text-primary-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="block px-3 py-2 text-sm font-medium leading-5 text-center text-white uppercase transition-colors bg-foreground hover:cursor-pointer hover:bg-foreground/80"
          >
            προσφορα
          </a>
        </div>

        {/* Mobile */}
        <div className="flex items-center justify-between lg:hidden">
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image
              src={Logo}
              alt="Grigorakis Logistics"
              width={120}
              height={120}
              loading="eager"
              className="w-auto h-20 md:h-30"
            />
          </Link>

          {/* Menu & Close Icon */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative w-10 h-10 hover:cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute left-2 right-2 h-0.5 bg-current transition-all duration-300 ${
                isOpen ? "top-1/2 rotate-45" : "top-3"
              }`}
            />
            <span
              className={`absolute left-2 right-2 h-0.5 bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : "top-1/2"
              }`}
            />
            <span
              className={`absolute left-2 right-2 h-0.5 bg-current transition-all duration-300 ${
                isOpen ? "top-1/2 -rotate-45" : "bottom-3"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}

      {isOpen && (
        <div className="min-h-screen bg-background lg:hidden">
          <div className="px-4 pb-4 mx-auto max-w-7xl">
            {/* Mobile links */}
            <ul className="flex flex-col gap-2 text-xs font-medium uppercase">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={"#" + link.section}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 transition-colors hover:text-primary-600"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                {/* CTA */}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-3 py-2 text-sm font-medium text-center text-white uppercase transition-colors bg-foreground hover:cursor-pointer hover:bg-foreground/80"
                >
                  προσφορα
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Ruler */}
      <div
        className={`w-full h-px bg-ruler transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}
      ></div>
    </nav>
  );
}
