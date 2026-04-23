"use client";

import Image from "next/image";
import BrokenTruck from "@/public/illustrations/broken-truck.webp";
import Link from "next/link";

export default function Error() {
  return (
    <section className="min-h-screen px-4 items-center flex justify-center">
      <div className="flex flex-col items-center text-center max-w-md">
        <Image
          src={BrokenTruck}
          width={320}
          height={320}
          loading="eager"
          style={{ width: "auto", height: "auto" }}
          alt="Illustration of broken truck"
          className="mb-8 max-w-xs"
        />
        <span className="text-8xl font-bold text-primary-500 leading-none">
          500
        </span>
        <h2 className="mt-3 text-2xl font-semibold text-foreground uppercase tracking-wide">
          κατι εσπασε στον δρομο
        </h2>
        <h3 className="mt-3 text-sm text-foreground/50 leading-relaxed">
          Κάτι πήγε στραβά από τη μεριά μας. Δουλεύουμε να το φτιάξουμε.
        </h3>
        <Link
          href="/"
          className="mt-8 px-6 py-3 text-sm font-medium uppercase tracking-widest text-white bg-primary-500 hover:bg-primary-600 transition-colors"
        >
          επιστροφη στην αρχικη
        </Link>
      </div>
    </section>
  );
}
