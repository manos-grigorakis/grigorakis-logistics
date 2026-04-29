import { localBusinessJsonLd } from "./lib/seo/local-business-schema";

import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Services from "@/components/sections/Services";
import Coverage from "@/components/sections/Coverage";
import Process from "@/components/sections/Process";
import Fleet from "@/components/sections/Fleet";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Hero />
      <Trust />
      <Services />
      <Coverage />
      <Process />
      <Fleet />
      <Faq />
      <Contact />
    </>
  );
}
