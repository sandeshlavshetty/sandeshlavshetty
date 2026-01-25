export default function SkillCategory({ title, skills = [] }) {
  return (
    <div>
      <h2 className="text-[36px] font-bold text-white mb-10">
        {title}
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="
              px-4 py-2
              rounded-xl
              text-sm
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
