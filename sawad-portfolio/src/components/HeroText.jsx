export default function HeroText() {
  return (
    <div className="flex flex-col justify-center max-w-4xl mb-16">
      
      {/* Big Heading - Increased size and weight */}
      <h1 className="text-[110px] font-black leading-[0.9] text-white tracking-tighter">
        SOFTWARE
        <span className="block text-[#1a1a1a] dark:text-white/10">ENGINEER</span>
      </h1>

      {/* Description - Slightly larger text with better line height */}
      <p className="mt-8 text-[19px] text-gray-400 max-w-2xl leading-relaxed">
        Software Engineer specializing in backend architecture and applied AI,
        with a focus on performance, scalability, and real-world deployment.
      </p>

      {/* Stats Section - Much larger impact numbers */}
      <div className="flex gap-16 mt-16">
        <Stat number="+1" label={["YEARS OF", "EXPERIENCE"]} />
        <Stat number="+10" label={["PROJECTS", "COMPLETED"]} />
        <Stat number="+3000" label={["ACTIVE", "USERS"]} />
      </div>

    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="flex flex-col">
      <p className="text-[72px] font-bold text-white leading-none tracking-tighter">
        {number}
      </p>
      <div className="text-[13px] text-gray-500 mt-3 font-semibold uppercase tracking-widest leading-tight">
        {label[0]} <br /> {label[1]}
      </div>
    </div>
  );
}