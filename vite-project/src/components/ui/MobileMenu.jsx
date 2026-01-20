import {
  Menu,
  Home,
  Briefcase,
  User,
  FileText,
  Grid,
  Mail,
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
    // ⏱️ wait for sheet close animation
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 250); // 👈 important delay
  };

  return (
    <div className="fixed top-4 right-4 z-50 lg:hidden">
      <Sheet>
        {/* ☰ MENU BUTTON */}
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="bg-zinc-900 border border-zinc-800"
          >
            <Menu />
          </Button>
        </SheetTrigger>

        {/* SLIDE MENU */}
        <SheetContent
          side="right"
          hideCloseButton
          className="bg-black text-white w-72 p-6"
        >
          {/* HEADER */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-semibold">Menu</h2>
          </div>

          {/* MENU ITEMS */}
          <nav className="flex flex-col gap-4">
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
        </SheetContent>
      </Sheet>
    </div>
  );
}