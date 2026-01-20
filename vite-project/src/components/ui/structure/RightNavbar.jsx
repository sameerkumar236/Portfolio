import { Home, User, FileText, Briefcase, Grid, Mail } from "lucide-react";

export default function RightNavbar() {
  const items = [
    { icon: Home, target: "home" },
    { icon: Briefcase, target: "projects" },
    { icon: User, target: "about" },
    { icon: FileText, target: "resume" },
    { icon: Grid, target: "tools" },
    { icon: Mail, target: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 bg-black border border-zinc-800 p-1 rounded-full">
      {items.map(({ icon: Icon, target }, i) => (
        <button
          key={i}
          onClick={() => scrollToSection(target)}
          className="p-2 rounded-full hover:bg-zinc-800 transition"
        >
          <Icon size={18} />
        </button>
      ))}
    </div>
  );
}