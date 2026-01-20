import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Reveal from "@/components/ui/common/Reveal";

export default function About() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Reveal>
    <section id="about" className="mt-24 max-w-4xl">
      <span className="inline-flex items-center gap-1 text-xs border border-zinc-700 px-2 py-1 rounded">
        <Sparkles className="w-3 h-3" />
        About
      </span>

      <h2 className="text-4xl font-semibold mt-4 leading-tight max-w-xl">
        Turning Ideas Into Scalable Full-Stack Solutions
      </h2>

      <p className="text-zinc-400 mt-6 leading-relaxed">
        I'm a full-stack developer who enjoys building complete web
        applications—from designing clean, intuitive user interfaces
        to developing reliable backend systems. I focus on writing
        maintainable code, creating smooth user experiences, and
        solving real-world problems with modern web technologies.
      </p>

      <p className="text-zinc-400 mt-6 leading-relaxed">
        From building modern front-end interfaces to designing robust
        back-end systems, I work across the full stack to deliver
        complete web solutions. I focus on clean architecture,
        maintainable code, and performance-driven development to ensure
        applications scale smoothly as they grow.
      </p>

      <Button className="mt-6" onClick={scrollToContact}>
        Contact Me
      </Button>
    </section>
    </Reveal>
  );
}