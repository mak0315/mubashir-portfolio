import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { Work } from "@/components/sections/work";
import { Experience } from "@/components/sections/experience";
import { Testimonials } from "@/components/sections/testimonials";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Work />
      <Experience />
      <Testimonials />
      <Services />
      <Contact />
    </>
  );
}
