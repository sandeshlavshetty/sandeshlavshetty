import SkillMarquee from "./SkillMarquee";

export default function SkillsSection() {
  return (
    <section className="mt-32">
      <h2 className="text-[64px] font-extrabold text-white leading-none">
        EXPERTISE
        <span className="block text-white/20">LAYER</span>
      </h2>

      <div className="mt-20 space-y-8">
        <SkillMarquee
          skills={[
            "React", "Next.js", "Node.js", "Express",
            "PostgreSQL", "MongoDB", "Redis",
            "Docker", "AWS", "Nginx"
          ]}
        />

        <SkillMarquee
          reverse
          skills={[
            "Python", "FastAPI", "TensorFlow", "PyTorch",
            "LangChain", "OpenAI API",
            "Linux", "Git", "CI/CD"
          ]}
        />
      </div>
    </section>
  );
}
