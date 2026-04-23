"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/data/nav-links";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

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

  useEffect(() => {
    const handleScroll = () => setScroller(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-background" : "bg-transparent"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      }}
    >
      <div className="p-4 mx-auto max-w-7xl">
        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold uppercase whitespace-nowrap"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            γρηγορακης
          </Link>

          {/* Links */}
          <ul className="flex items-center justify-center gap-8 text-xs font-medium uppercase">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={"#" + link.section}
                  className="block py-2 transition-colors hover:text-orange-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            type="button"
            className="px-3 py-2 text-sm font-medium leading-5 text-white uppercase transition-colors bg-foreground hover:cursor-pointer hover:bg-foreground/80"
          >
            <a href="#contact">Προσφορα</a>
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center justify-between md:hidden">
          <Link
            href="/"
            className="text-xl font-semibold uppercase"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            γρηγορακης
          </Link>

          {/* Menu & Close Icon */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative w-10 h-10"
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
      <AnimatePresence>
        {" "}
        {isOpen && (
          <motion.div
            className="bg-background md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-4 pb-4 mx-auto max-w-7xl">
              <ul className="flex flex-col gap-2 text-xs font-medium uppercase">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.07,
                      ease: "easeOut",
                    }}
                  >
                    <a
                      href={"#" + link.section}
                      onClick={() => setIsOpen(false)}
                      className="block py-2"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  className="mt-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: navLinks.length * 0.07,
                    ease: "easeOut",
                  }}
                >
                  <button className="w-full px-3 py-2 text-sm font-medium text-white uppercase transition-colors bg-foreground hover:bg-primary-600 hover:cursor-pointer">
                    <a href="#contact">προσφορα</a>
                  </button>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ruler */}
      <div
        className={`w-full h-px bg-ruler transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}
      ></div>
    </motion.nav>
  );
}
