export default function ServiceCard({ title, bg, icon }) {
  return (
    <div
      className={`
        relative
        w-[260px] h-[180px]
        rounded-2xl
        p-6
        ${bg}
        text-black
        overflow-hidden
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
        cursor-pointer
      `}
    >
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%">
          <path
            d="M0 40 Q130 10 260 40"
            stroke="black"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0 90 Q130 60 260 90"
            stroke="black"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Icon */}
      <div className="relative z-10 mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="relative z-10 font-semibold leading-snug text-sm">
        {title}
      </h3>

      {/* Arrow */}
      <div className="absolute bottom-4 right-4 text-xl">
        →
      </div>
    </div>
  );
}
