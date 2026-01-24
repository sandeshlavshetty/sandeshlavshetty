export default function VerticalSkills({ skills }) {
  return (
    <div className="relative h-[260px] overflow-hidden">
      
      {/* Fade mask (top & bottom) */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#0b0b0b] to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#0b0b0b] to-transparent z-10" />

      {/* Rolling grid */}
      <div className="animate-vertical-scroll hover:[animation-play-state:paused]">
        <SkillGrid skills={skills} />
        <SkillGrid skills={skills} />
      </div>
    </div>
  );
}

function SkillGrid({ skills }) {
  return (
    <div className="grid grid-cols-3 gap-4 py-4">
      {skills.map((skill, i) => (
        <div
          key={i}
          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white text-center"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}
