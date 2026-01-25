import { ArrowUpRight } from "lucide-react";

export default function ThoughtCard({ title, desc, date, read, link }) {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className="group cursor-pointer p-10 rounded-[32px] bg-[#0f0f0f] border border-white/5 hover:bg-[#151515] transition-all"
    >
      <div className="flex justify-between items-start gap-4">
        {/* Title: Larger and bolder to match UI */}
        <h3 className="text-[28px] font-bold text-white leading-tight max-w-2xl group-hover:text-orange-500 transition-colors">
          {title}
        </h3>

        <ArrowUpRight 
          className="text-orange-500 transition-transform group-hover:scale-125 group-hover:-translate-y-1" 
          size={28} 
        />
      </div>

      {/* Description: Lighter gray with better line height */}
      <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-3xl">
        {desc}
      </p>

      {/* Metadata: Matches the bottom row in the UI mockup */}
      <div className="mt-8 flex justify-between text-base text-gray-500 font-medium">
        <span>{date}</span>
        <span>{read}</span>
      </div>
    </div>
  );
}