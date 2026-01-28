export default function SkillCategory({ title, skills = [] }) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-white mb-6 sm:mb-8 md:mb-10">
        {title}
      </h2>

      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-3 sm:px-4 py-1.5 sm:py-2
              rounded-lg sm:rounded-xl
              text-xs sm:text-sm
              bg-white/5
              border border-white/10
              text-gray-200
              hover:bg-white/10
              transition
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
