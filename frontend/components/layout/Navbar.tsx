"use client";

import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links: { name: string; section: string }[] = [
    {
      name: "υπηρεσιες",
      section: "services",
    },
    {
      name: "καλυψη",
      section: "coverage",
    },
    {
      name: "στολος",
      section: "fleet",
    },
    {
      name: "διαδικασια",
      section: "process",
    },
    {
      name: "ερωτησεις",
      section: "faqs",
    },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-background">
      <div className="p-4 mx-auto max-w-7xl">
        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-semibold uppercase whitespace-nowrap"
          >
            γρηγορακης
          </a>

          {/* Links */}
          <ul className="flex items-center justify-center gap-8 text-xs font-medium uppercase">
            {links.map((l) => (
              <li key={l.name}>
                <a
                  href={"#" + l.section}
                  className="block py-2 hover:text-orange-500"
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            type="button"
            className="px-3 py-2 text-sm font-medium leading-5 text-white uppercase bg-foreground hover:cursor-pointer hover:bg-primary-600"
          >
            Προσφορα
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center justify-between md:hidden">
          <a href="#" className="text-xl font-semibold uppercase">
            γρηγορακης
          </a>

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
      <div
        className={`overflow-hidden transition-all duration-300 bg-background ease-in-out md:hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 mx-auto max-w-7xl">
          <ul className="flex flex-col gap-2 text-xs font-medium uppercase">
            {links.map((l) => (
              <li key={l.name}>
                <a
                  href={"#" + l.section}
                  onClick={() => setIsOpen(!isOpen)}
                  className="block py-2"
                >
                  {l.name}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <button className="w-full px-3 py-2 text-sm font-medium text-white uppercase bg-foreground hover:bg-primary-600 hover:cursor-pointer">
                Προσφορα
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Ruler */}
      <div className="w-full h-px bg-ruler"></div>
    </nav>
  );
}
