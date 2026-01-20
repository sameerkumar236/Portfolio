import { Sparkles, Github } from "lucide-react";
import Reveal from "@/components/ui/common/Reveal";
import { Button } from "@/components/ui/button";
import votingImg from "@/assets/voting.png";
import youtubeImg from "@/assets/youtubeimage.png"
import assistantImg from "@/assets/jarvis.png"
import weatherImg from "@/assets/weather.png"


export default function Projects() {
  const projects = [
    {
      id: 1,
      image: votingImg,
      github: "https://github.com/sameerkumar236/Voting",
    },
    {
      id: 2,
      image: youtubeImg,
      github: "https://github.com/sameerkumar236/Youtube-clone",
    },
    {
      id: 3,
      image: assistantImg,
      github: "https://github.com/sameerkumar236/AI-Assistant",
    },
    {
      id: 4,
      image: weatherImg,
      github: "https://github.com/sameerkumar236/weather-project",
    },
  ];

  return (
    <Reveal>
      <section id="projects" className="mt-24">
        {/* LABEL */}
        <span className="inline-flex items-center gap-1 text-xs border border-zinc-700 px-2 py-1 rounded relative bottom-4">
          <Sparkles className="w-3 h-3" />
          Projects
        </span>

        <h2 className="text-3xl font-semibold mb-6">
          My Featured Projects
        </h2>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative h-64 rounded-xl overflow-hidden border border-zinc-800 group"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt="Project preview"
                className="w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/70 opacity-0 
                group-hover:opacity-100 transition flex items-center justify-center">
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="flex items-center gap-2">
                    <Github size={18} />
                    View Code
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
