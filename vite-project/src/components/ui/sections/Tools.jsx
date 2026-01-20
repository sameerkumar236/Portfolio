import html from "@/assets/html.svg";
import css from "@/assets/css.svg";
import tailwind from "@/assets/tailwind.svg";
import react from "@/assets/react.svg";
import javascript from "@/assets/javascript.svg";
import node from "@/assets/node.svg";
import express from "@/assets/express.svg";
import mongodb from "@/assets/mongodb.svg";
import redux from "@/assets/redux.svg"
import Reveal from "@/components/ui/common/Reveal";

export default function Tools() {
  const tools = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "React", icon: react },
    { name: "JavaScript", icon: javascript },
    { name: "Node.js", icon: node },
    { name: "Express.js", icon: express },
    { name: "MongoDB", icon: mongodb },
     { name: "Redux", icon: redux },
  ];

  return (
    <Reveal>
    <section id="tools" className="mt-24">
      <h2 className="text-3xl font-semibold mb-8">My Favorite Tools</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="border border-zinc-800 rounded-xl p-6
              flex flex-col items-center justify-center
              hover:border-zinc-600 transition"
          >
            <img
              src={tool.icon}
              alt={tool.name}
              className={`w-10 h-10 mb-3 ${
                tool.name === "Express.js" ? "invert" : ""
              }`}
            />

            <p className="text-sm text-zinc-300">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
    </Reveal>
  );
}