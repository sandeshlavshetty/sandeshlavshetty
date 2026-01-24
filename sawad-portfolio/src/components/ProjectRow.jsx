import { ArrowUpRight } from "lucide-react";

export default function ProjectRow({ title, subtitle, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group flex items-center justify-between cursor-pointer"
    >
      <div className="flex items-center gap-6">
        <img
          src={image}
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

      <ArrowUpRight
        size={20}
        className="text-orange-400 opacity-0 group-hover:opacity-100 transition"
      />
    </div>
  );
}
