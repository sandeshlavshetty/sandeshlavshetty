import { useModal } from "../context/ModalContext";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../data/experiences";

export default function ExperienceSection() {
  const { openModal } = useModal();

  return (
    <section id="experience" className="mt-32">
      <h2 className="text-[48px] sm:text-[72px] lg:text-[100px] font-black text-white leading-[0.85] tracking-tighter uppercase">
        PROFESSIONAL
        <span className="block text-[#1a1a1a]">EXPERIENCE</span>
      </h2>

      <div className="mt-14 flex flex-col gap-6">
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.id}
            company={exp.company}
            desc={exp.short}
            date={exp.duration}
            onClick={() => openModal("experience", exp)}
          />
        ))}
      </div>
    </section>
  );
}
