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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 py-3 sm:py-4">
      {skills.map((skill) => (
        <div
          key={skill}
          className="px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white text-center font-medium"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}
