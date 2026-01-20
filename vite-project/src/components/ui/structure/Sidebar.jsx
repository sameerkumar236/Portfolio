import { Button } from "@/components/ui/button";
import photo from "@/assets/real photo.png"

export default function Sidebar() {
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
    <aside
      className="
        relative lg:fixed
        top-auto lg:top-5
        left-auto lg:left-4
        w-full lg:w-80
        h-auto lg:h-[calc(75vh-2.5rem)]
        bg-zinc-900 border border-zinc-800
        rounded-2xl
        p-4 lg:p-6
        flex flex-col
        overflow-y-auto
      "
    >
      <h2 className="text-xl font-semibold">Sameer</h2>

      <p className="text-xs text-zinc-400 mb-4">
        Full-Stack Web Engineer
      </p>

      <img
        src= {photo}
        className="rounded-xl h-64 lg:h-72 object-cover mb-4"
        alt="Profile"
      />

      <p className="text-sm text-zinc-300">
        Crafting fast, scalable, and modern web applications.
      </p>

      <Button
        className="mt-6 lg:mt-auto"
        onClick={scrollToContact}
      >
        Let’s work!
      </Button>
    </aside>
  );
}
