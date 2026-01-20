import Reveal from "@/components/ui/common/Reveal";
export default function Stats() {
  const stats = [
    ["0+", "Happy Clients"],
    ["0+", "Years Of Experience"],
    ["20+", "Projects Done"],
  ];

  return (
    <Reveal>
    <div className="grid md:grid-cols-3 gap-6 mt-16 ">
      {stats.map(([num, label]) => (
        <div
          key={label}
          className="border border-zinc-800 rounded-xl p-6 text-center"
        >
          <p className="text-3xl font-bold">{num}</p>
          <p className="text-sm text-zinc-400">{label}</p>
        </div>
      ))}
    </div>
    </Reveal>
  );
}
