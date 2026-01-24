export default function SkillMarquee({ skills, reverse = false }) {
  return (
    <div className="overflow-hidden">
      <div
        className={`
          flex gap-6 w-max
          animate-marquee
          ${reverse ? "animate-marquee-reverse" : ""}
          hover:[animation-play-state:paused]
        `}
      >
        {[...skills, ...skills].map((skill, i) => (
          <SkillChip key={i} label={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillChip({ label }) {
  return (
    <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm whitespace-nowrap">
      {label}
    </div>
  );
}
