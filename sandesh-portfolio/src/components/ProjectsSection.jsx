import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../context/ModalContext";

import ProjectRow from "./ProjectRow";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  const { openModal } = useModal();
  const navigate = useNavigate();

  return (
    <section className="mt-32">
      {/* Heading */}
      <h2 className="text-[48px] sm:text-[72px] lg:text-[100px] font-black text-white leading-[0.85] tracking-tighter uppercase">
        RECENT
        <span className="block text-[#1a1a1a]">PROJECTS</span>
      </h2>

      {/* Projects preview */}
      <div className="mt-16 flex flex-col">
        <ProjectRow
          {...projects.damas}
          onClick={() => openModal("project", projects.damas)}
        />


        <ProjectRow
          {...projects.najmai}
          onClick={() => openModal("project", projects.najmai)}
          />

        <ProjectRow
          {...projects.threatvision}
          onClick={() => openModal("project", projects.threatvision)}
          />
      </div>

      

      {/* CTA → Projects Page */}
      <div className="mt-14 flex justify-end">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "instant" });
            navigate("/projects");
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
          View all projects
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
          />
        </button>
      </div>
    </section>
  );
}
