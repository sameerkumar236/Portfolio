import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Reveal from "@/components/ui/common/Reveal";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    "Full-Stack Developer",
    "Backend Developer",
    "Frontend Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Reveal>
      <section id="home" className="max-w-4xl">
        {/* Badge */}
        <span className="inline-flex items-center gap-1 text-xs border border-zinc-700 px-2 py-1 rounded">
          <Sparkles className="w-3 h-3" />
          Introduction
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 leading-snug sm:leading-tight text-white">
          I'm Sameer{" "}
          <span className="text-red-800 ">
            {text}
            <span className="text-red-500 animate-pulse">|</span>
          </span>
          <br />
          Building Modern Web Applications.
        </h1>

       
        <div className="flex gap-4 mt-6">
          <Button onClick={scrollToProjects}>My Projects</Button>

          <a href="/Sameer_Full_Stack_Developer_CV.pdf" download>
            <Button variant="outline">Download CV</Button>
          </a>
        </div>
      </section>
    </Reveal>
  );
}