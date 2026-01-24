import VerticalSkills from "./VerticalSkills";

export default function SkillsSection() {
  return (
    <section className="mt-32">
      <h2 className="text-[64px] font-extrabold text-white leading-none">
        EXPERTISE
        <span className="block text-white/20">LAYER</span>
      </h2>

      <div className="mt-20">
        <VerticalSkills
          skills={[
            "React", "Next.js", "Node.js", "Express",
            "PostgreSQL", "MongoDB", "Redis",
            "Docker", "AWS", "Linux",
            "Python", "FastAPI", "TensorFlow",
            "PyTorch", "LangChain", "Git", "CI/CD"
          ]}
        />
      </div>
    </section>
  );
}
