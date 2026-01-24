import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import ExperienceModal from "./ExperienceModal";
import { experiences } from "../data/experiences";

export default function ExperienceSection() {
  const [activeExp, setActiveExp] = useState(null);

  return (
    <>
      <section id="experience" className="mt-32">
        <h2 className="text-[64px] font-extrabold text-white leading-none">
          PROFESSIONAL
          <span className="block text-white/20">EXPERIENCE</span>
        </h2>

        <div className="mt-14 flex flex-col gap-6">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              company={exp.company}
              desc={exp.short}
              date={exp.duration}
              onClick={() => setActiveExp(exp)}
            />
          ))}
        </div>
      </section>

      <ExperienceModal
        experience={activeExp}
        onClose={() => setActiveExp(null)}
      />
    </>
  );
}
