"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.webp";
import { navLinks } from "@/data/nav-links";
import { m } from "framer-motion";
import { DesktopServicesDropdown } from "./DesktopServicesDropdown";

export function DesktopNav() {
  return (
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
        {navLinks.map((link, index) => (
          <m.li
            key={link.name}
            className="relative"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 + index * 0.07 }}
          >
            {link.section === "services" ? (
              <DesktopServicesDropdown title={link.name} />
            ) : (
              <Link
                href={`/#${link.section}`}
                className="block py-2 transition-colors hover:text-primary-600"
              >
                {link.name}
              </Link>
            )}
          </m.li>
        ))}
      </ul>

      {/* CTA */}
      <m.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 + navLinks.length * 0.07 }}
      >
        <Link
          href={"/#contact"}
          className="block px-3 py-2 text-sm font-medium leading-5 text-center text-white uppercase transition-colors bg-foreground hover:cursor-pointer hover:bg-foreground/80"
        >
          προσφορα
        </Link>
      </m.div>
    </div>
  );
}
