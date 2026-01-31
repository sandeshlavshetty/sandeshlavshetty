import Reveal from "./Reveal";
export default function HeroText() {
  return (
     <Reveal y={0} duration={900}>
    <div className="flex flex-col justify-center max-w-4xl mb-16">
      {/* Big Heading - Increased size and weight */}
      <h1
        className="
  text-[56px] sm:text-[72px] lg:text-[110px]
  font-black leading-[0.9]
  text-white tracking-tighter
"
      >
        SOFTWARE
        <span className="block text-[#1a1a1a] dark:text-white/10">
          ENGINEER
        </span>
      </h1>

      {/* Description - Slightly larger text with better line height */}
      <p className="mt-8 text-[19px] text-gray-400 max-w-2xl leading-relaxed">
        Focused on scalable systems, performance-critical backends, and real-world AI deployments.
      </p>

      {/* Stats Section - Much larger impact numbers */}
      <div className="flex flex-row sm:flex-row flex-wrap sm:flex-nowrap sm:gap-8 md:gap-12 lg:gap-20 mt-8 sm:mt-12 md:mt-16 pt-8 sm:pt-10 md:pt-12">
        <Stat number="+3000" label={["ACTIVE", "USERS"]} />
        <Stat number="+10" label={["PRODUCTION &", "RESEARCH PROJECTS"]} />
        <Stat number="+1" label={["YEARS INDUSTRY", "EXPERIENCE"]} />
      </div>
    </div>
    </Reveal>
  );
}

function Stat({ number, label }) {
  return (
    <div className="flex flex-col items-start sm:items-start flex-1 sm:flex-none mb-6 sm:mb-0 pr-4 sm:pr-0">
      <p className="text-4xl sm:text-5xl md:text-[56px] lg:text-[72px] font-black text-white leading-none">
        {number}
      </p>
      <div className="text-[9px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-gray-500 mt-2 sm:mt-4 md:mt-5 font-bold uppercase tracking-widest leading-tight">
        {label[0]} <br /> {label[1]}
      </div>
    </div>
  );
}
