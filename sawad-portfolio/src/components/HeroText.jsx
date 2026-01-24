export default function HeroText() {
  return (
    <div className="flex flex-col justify-center max-w-2xl mb-10">
      
      {/* Big Heading */}
      <h1 className="text-[72px] font-extrabold leading-none text-white">
        SOFTWARE
        <span className="block text-white/20">ENGINEER</span>
      </h1>

      {/* Description */}
      <p className="mt-6 text-gray-400 max-w-xl">
        Software Engineer specializing in backend architecture and applied AI,
        with a focus on performance, scalability, and real-world deployment.
      </p>

      {/* Stats */}
      <div className="flex gap-12 mt-10">
        <Stat number="+1" label="YEARS OF EXPERIENCE" />
        <Stat number="+10" label="PROJECTS COMPLETED" />
        <Stat number="+3000" label="ACTIVE USERS" />
      </div>

      
      

    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="text-3xl font-bold text-white">{number}</p>
      <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}
