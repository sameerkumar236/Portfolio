import { Button } from "@/components/ui/button";
import photo from "@/assets/real photo.png";

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
        w-full
        max-w-md
        mx-auto
        mb-10

        lg:mb-0
        lg:fixed
        lg:top-5
        lg:left-4
        lg:w-80
        lg:h-[calc(80vh-2.5rem)]

        bg-zinc-900
        border border-zinc-800
        rounded-2xl
        p-4 lg:p-6
        flex flex-col
      "
    >
      <h2 className="text-xl font-semibold">Sameer</h2>

      <p className="text-xs text-zinc-400 mb-3">
        Full-Stack Web Engineer
      </p>

      <img
        src={photo}
        alt="Profile"
        className="rounded-xl w-full h-auto object-cover mb-4"
      />

      <p className="text-sm text-zinc-300 flex-1">
        Crafting fast, scalable, and modern web applications.
      </p>

      <Button className="mt-4 w-full" onClick={scrollToContact}>
        Let’s work!
      </Button>
    </aside>
  );
}
