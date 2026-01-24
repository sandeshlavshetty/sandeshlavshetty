import { ArrowUpRight } from "lucide-react";

export default function ExperienceCard({ company, desc, date, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        relative cursor-pointer
        rounded-2xl p-8
        border border-white/10
        transition-all duration-300
        hover:bg-white/[0.06]
        hover:shadow-lg
      "
    >
      <ArrowUpRight
        size={18}
        className="absolute top-6 right-6 text-orange-400 opacity-70"
      />

      <h3 className="text-lg font-semibold text-white">{company}</h3>
      <p className="mt-3 text-gray-400 max-w-2xl">{desc}</p>
      <p className="mt-6 text-sm text-gray-500">{date}</p>
    </div>
  );
}
