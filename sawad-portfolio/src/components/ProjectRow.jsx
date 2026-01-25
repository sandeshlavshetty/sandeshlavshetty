import { ArrowUpRight } from "lucide-react";

export default function ProjectRow({ title, subtitle, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group flex items-center justify-between cursor-pointer py-6 border-b border-white/5 hover:border-white/10 transition-all"
    >
      <div className="flex items-center gap-8">
        <img src={image} className="w-[100px] h-[100px] rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        <div>
          <h3 className="text-[28px] font-bold text-white group-hover:text-orange-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-500 text-lg">{subtitle}</p>
        </div>
      </div>
      <ArrowUpRight size={28} className="text-orange-500 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0" />
    </div>
  );
}