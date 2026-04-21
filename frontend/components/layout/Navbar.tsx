"use client";

import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["υπηρεσιες", "καλυψη", "στολος", "διαδικασια"];

  return (
    <nav className="fixed top-0 z-50 w-full bg-background">
      <div className="p-4 mx-auto max-w-7xl">
        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8">
          {/* Logo */}
          <a href="#" className="text-xl font-semibold whitespace-nowrap">
            Grigorakis
          </a>

          {/* Links */}
          <ul className="flex items-center justify-center gap-8 text-xs font-medium uppercase">
            {links.map((l) => (
              <li key={l}>
                <a href="#" className="block py-2 hover:text-orange-500">
                  {l}
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
          <a href="#" className="text-xl font-semibold">
            Grigorakis
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2"
            aria-label="Open main menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
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
              <li key={l}>
                <a href="#" className="block py-2">
                  {l}
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
