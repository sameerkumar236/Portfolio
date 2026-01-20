import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Reveal from "@/components/ui/common/Reveal";

export default function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Reveal>
      <section id="home" className="max-w-4xl">
        <span className="inline-flex items-center gap-1 text-xs border border-zinc-700 px-2 py-1 rounded">
          <Sparkles className="w-3 h-3" />
          Introduction
        </span>

        <h1 className="text-5xl font-bold mt-4 leading-tight">
          I'm Sameer Full-Stack Developer Building Modern Web Applications.
        </h1>

        <div className="flex gap-4 mt-6">
          <Button onClick={scrollToProjects}>My Projects</Button>

          {/* ✅ DOWNLOAD CV */}
          <a
            href="/Sameer_Full_Stack_Developer_CV.pdf"
            download
          >
            <Button variant="outline">Download CV</Button>
          </a>
        </div>
      </section>
    </Reveal>
  );
}