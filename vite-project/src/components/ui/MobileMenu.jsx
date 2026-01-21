import {
  Menu,
  Home,
  Briefcase,
  User,
  FileText,
  Grid,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const menuItems = [
  { label: "Home", icon: Home, id: "home" },
  { label: "Projects", icon: Briefcase, id: "projects" },
  { label: "About", icon: User, id: "about" },
  { label: "Resume", icon: FileText, id: "resume" },
  { label: "Tools", icon: Grid, id: "tools" },
  { label: "Contact", icon: Mail, id: "contact" },
];

export default function MobileMenu() {
  const scrollToSection = (id) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 250);
  };

  return (
    <div className="fixed top-4 right-4 z-50 lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="bg-zinc-900 border border-zinc-800"
          >
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          hideCloseButton
          className="bg-black text-white w-72 p-6 flex flex-col"
        >
          {/* HEADER */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold">Menu</h2>
          </div>

          {/* MENU ITEMS */}
          <nav className="flex flex-col gap-4 flex-1">
            {menuItems.map((item) => (
              <SheetClose asChild key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-3 text-zinc-300 hover:text-white transition"
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              </SheetClose>
            ))}
          </nav>

          {/* SOCIAL LINKS */}
          <div className="border-t border-zinc-800 pt-4 flex gap-4">
            <a
              href="https://github.com/sameerkumar236"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sameer-kumar-03b2b3326/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}