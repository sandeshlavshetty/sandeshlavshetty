import { ArrowUpRight } from "lucide-react";

export default function ProjectRow({ title, subtitle, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 cursor-pointer py-4 sm:py-6 border-b border-white/5"
    >
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-1">
        <img src={image} className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-lg sm:rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500 flex-shrink-0" />
        <div className="min-w-0 flex-1">
          <h3 className="text-lg sm:text-2xl md:text-[28px] font-bold text-white group-hover:text-orange-400 transition-colors truncate sm:truncate-none">
            {title}
          </h3>
          <p className="text-gray-500 text-xs sm:text-base md:text-lg line-clamp-2 sm:line-clamp-none">{subtitle}</p>
        </div>
      </div>
      <ArrowUpRight size={24} className="text-orange-500 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 flex-shrink-0 hidden sm:block" />
    </div>
  );
}