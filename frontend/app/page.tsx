import Coverage from "@/components/sections/Coverage";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Fleet from "@/components/sections/fleet";

export default function Home() {
  return (
    <>
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
