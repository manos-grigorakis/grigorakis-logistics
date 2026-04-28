"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import dynamic from "next/dynamic";
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});
import "yet-another-react-lightbox/styles.css";

export default function Fleet() {
  const [index, setIndex] = useState(-1);

  const images: { src: string; alt: string }[] = [
    { src: "/fleet/parked-truck.webp", alt: "Parked truck" },
    { src: "/fleet/truck-in-motion.webp", alt: "Truck in motion" },
    { src: "/fleet/trucks-fleet.webp", alt: "Trucks fleet" },
    { src: "/fleet/truck-in-logistics.webp", alt: "Truck in logistics" },
    { src: "/fleet/truck-with-boat.webp", alt: "Truck transporting a boat" },
  ];

  return (
    <section id="fleet" className="px-4 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Headers */}
        <motion.span
          className="block text-xs tracking-widest uppercase text-foreground/70"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          στολος
        </motion.span>

        <motion.h2
          className="mt-2 text-4xl font-semibold uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          δυναμη στον <span className="text-primary-500">δρομο</span>
        </motion.h2>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-2 mt-12 md:grid-cols-3">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className="relative h-48 overflow-hidden cursor-pointer lg:h-72 group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setIndex(idx)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover sepia-[.15] contrast-[1.05] brightness-90 saturate-[.90] group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-105 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={images}
          styles={{
            root: { "--yarl__color_backdrop": "rgba(0, 0, 0, 0.85)" },
            container: { backgroundColor: "rgba(0, 0, 0, 0.85)" },
          }}
          render={{
            slide: ({ slide }) => (
              <div className="relative w-full h-full">
                <Image
                  fill
                  src={slide.src}
                  alt={slide.alt || "Fleet image"}
                  className="object-contain"
                />
              </div>
            ),
          }}
        />
      </div>
    </section>
  );
}
