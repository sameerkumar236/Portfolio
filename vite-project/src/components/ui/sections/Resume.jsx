import Reveal from "@/components/ui/common/Reveal";
import { Sparkles } from "lucide-react";

export default function Resume() {
  return (
    <Reveal className="mt-24 max-w-6xl">
      <section id="resume">
        {/* SECTION LABEL */}
       <span className="inline-flex items-center gap-1 text-xs border border-zinc-700 px-2 py-1 rounded">
        <Sparkles className="w-3 h-3" />
        Resume
      </span>

        {/* HEADING */}
        <h2 className="text-4xl font-semibold mt-4 max-w-xl">
          Education And Practical Experience
        </h2>

      <p className="text-zinc-400 mt-4 max-w-3xl">
  I’m a full-stack developer with a Bachelor of Computer Applications
  background. I focus on building practical web applications and continuously
  improving my skills through projects and hackathons. These experiences have
  helped me develop problem-solving abilities, teamwork skills, and a strong
  foundation in full-stack development.
</p>


        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-16 mt-14">
          
          {/* EDUCATION */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Education</h3>

            <div className="relative border-l border-zinc-800 pl-6.5 space-y-10">
              <TimelineItem
                year="2024 – 2027"
                title="Bachelor of Computer Application"
                subtitle="Indra Gandhi National Open University"
                desc="Focused on full-stack development and problem solving."
              />

              <TimelineItem
                year="2025"
                title="Full-Stack Development course"
                subtitle="Dice Academy"
                desc="Learned modern JavaScript, React,Expressjs,MongoDB and responsive UI patterns through real-world projects."
              />

              <TimelineItem
                year="2024"
                title="English Speaking Course"
                subtitle="Freedom Employability Academy"
                desc="Learned English speaking and Personality Development."
              />
            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Experience</h3>

            <div className="relative border-l border-zinc-800 pl-6.5 space-y-10">
              <TimelineItem
                year="2025"
                title="Hackerthon"
                subtitle="Dice Academy"
                desc="Built responsive websites,Data Handling and learn team collaboration."
              />

            </div>
          </div>

        </div>
      </section>
    </Reveal>
  );
}

/* TIMELINE ITEM */
function TimelineItem({ year, title, subtitle, desc }) {
  return (
    <div className="relative">
      {/* DOT */}
      <span className="absolute -left-[33px] top-1.5 w-3 h-3 rounded-full bg-zinc-900 border border-zinc-600" />

      <p className="text-xs text-zinc-500">{year}</p>
      <h4 className="text-lg font-semibold mt-1">{title}</h4>
      <p className="text-sm text-zinc-400">{subtitle}</p>
      <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}