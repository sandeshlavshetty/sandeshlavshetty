import { ArrowUpRight } from "lucide-react";

export default function ProjectRow({ title, subtitle, image }) {
  return (
    <div className="group flex items-center justify-between">
      
      {/* Left */}
      <div className="flex items-center gap-6">
        <img
          src={image}
          alt={title}
          className="w-[72px] h-[72px] rounded-xl object-cover"
        />

        <div>
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>
          <p className="text-gray-400 text-sm">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Arrow */}
      <ArrowUpRight
        size={20}
        className="
          text-orange-400
          opacity-0
          translate-x-[-6px]
          transition-all
          group-hover:opacity-100
          group-hover:translate-x-0
        "
      />
    </div>
  );
}
