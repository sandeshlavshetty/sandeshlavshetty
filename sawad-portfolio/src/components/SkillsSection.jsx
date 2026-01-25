import VerticalSkills from "./VerticalSkills";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SkillsSection() {
  const navigate = useNavigate();

  return (
    <section className="mt-32">
      <h2 className="text-[100px] font-black text-white leading-[0.85] tracking-tighter uppercase">
        EXPERTISE
        <span className="block text-[#1a1a1a]">LAYER</span>
      </h2>

      {/* Skills preview */}
      <div className="mt-20">
        <VerticalSkills
          skills={[
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Docker",
            "AWS",
            "Linux",
            "Python",
            "FastAPI",
            "TensorFlow",
            "PyTorch",
            "LangChain",
            "Git",
            "CI/CD",
          ]}
        />
      </div>

      {/* CTA → Skills Page */}
      <div className="mt-14 flex justify-end">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "instant" });
            navigate("/skills");
          }}
          className="
            group flex items-center gap-2
            text-sm text-white/70
            border border-white/15
            px-5 py-3 rounded-full
            hover:text-white
            hover:border-white/30
            transition
          "
        >
          View all skills
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
          />
        </button>
      </div>
    </section>
  );
}
