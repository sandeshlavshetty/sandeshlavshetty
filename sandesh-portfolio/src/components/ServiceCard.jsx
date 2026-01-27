import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  title,
  bg,
  icon,
  isAI,
  textColor = "text-black",
  onClick, // ✅ added
}) {
  return (
    <div
      onClick={onClick}
      className={`
        relative flex-1 min-h-[240px] sm:h-[260px] md:h-[280px]
        rounded-[20px] sm:rounded-[28px] md:rounded-[32px] p-6 sm:p-7 md:p-8
        ${bg} ${textColor}
        overflow-hidden
        transition-all duration-300
        hover:scale-[1.02]
        cursor-pointer group
      `}
    >
      {/* BACKGROUND DECORATIVE LINES */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {isAI ? (
          /* Zig-Zag Scribble for AI Card */
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M0 20 L20 80 L40 20 L60 80 L80 20 L100 80" 
              stroke="currentColor" 
              fill="transparent" 
              strokeWidth="1.5" 
            />
          </svg>
        ) : (
          /* Smooth Waves for Backend Card */
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 30 Q50 10 100 30" stroke="currentColor" fill="none" strokeWidth="1" />
            <path d="M0 60 Q50 40 100 60" stroke="currentColor" fill="none" strokeWidth="1" />
            <path d="M0 90 Q50 70 100 90" stroke="currentColor" fill="none" strokeWidth="1" />
          </svg>
        )}
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Icon Wrapper */}
        <div className="bg-black/10 w-12 h-12 rounded-xl flex items-center justify-center">
          {icon}
        </div>

        {/* Title - Matches Framer font settings */}
        <h3 className="text-sm sm:text-lg md:text-[22px] font-black leading-[1.1] uppercase tracking-tight">
          {title}
        </h3>

        {/* Bottom Arrow Icon */}
        <div className="self-end p-2 border border-black/20 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
          <ArrowRight size={20} />
        </div>
      </div>
    </div>
  );
}