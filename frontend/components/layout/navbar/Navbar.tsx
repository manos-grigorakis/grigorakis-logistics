"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  const [scrolled, setScroller] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detects scroll event
  useEffect(() => {
    const handleScroll = () => setScroller(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <m.nav
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || mobileOpen ? "bg-background" : "bg-transparent"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="p-4 mx-auto max-w-7xl">
        <DesktopNav />
        <MobileNav isOpen={mobileOpen} setIsOpen={setMobileOpen} />
      </div>

      {/* Ruler */}
      <div
        className={`w-full h-px bg-ruler transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}
      />
    </m.nav>
  );
}
