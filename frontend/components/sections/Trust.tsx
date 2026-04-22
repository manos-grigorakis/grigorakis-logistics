import Marquee from "react-fast-marquee";
import Image, { StaticImageData } from "next/image";

import Zagori from "@/public/company-logos/zagori-logo.webp";
import Vikos from "@/public/company-logos/vikos-logo.webp";
import Intrakat from "@/public/company-logos/intrakat-logo.webp";
import Sklavenitis from "@/public/company-logos/sklavenitis-logo.webp";
import Vasilopoulos from "@/public/company-logos/vasilopoulos.webp";
import DeltaTexniki from "@/public/company-logos/delta-texniki-logo.webp";
import ElkaGroup from "@/public/company-logos/elka-group.webp";

export default function Trust() {
  const images: { image: StaticImageData; alt: string }[] = [
    {
      image: Intrakat,
      alt: "Intrakat Logo",
    },
    {
      image: Sklavenitis,
      alt: "Sklavenitis Logo",
    },
    {
      image: Vasilopoulos,
      alt: "Vasilopoulos Logo",
    },
    {
      image: Zagori,
      alt: "Zagori Logo",
    },
    {
      image: Vikos,
      alt: "Vikos Logo",
    },
    {
      image: DeltaTexniki,
      alt: "Delta Texniki Logo",
    },
    {
      image: ElkaGroup,
      alt: "Elka Group Logo",
    },
  ];
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <span className="text-xs tracking-widest uppercase text-foreground/60">
          μας εμπιστεύονται
        </span>
      </div>

      <div className="mt-12">
        <Marquee autoFill={true}>
          <div className="flex gap-8">
            {images.map((i, index) => (
              <Image
                key={index}
                src={i.image}
                width={130}
                height={100}
                alt={i.alt}
                className="object-contain grayscale transition"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
