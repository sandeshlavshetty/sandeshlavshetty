import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import ProjectRow from "./ProjectRow";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <section className="mt-32">
        {/* Heading */}
        <h2 className="text-[100px] font-black text-white leading-[0.85] tracking-tighter uppercase">
          RECENT
          <span className="block text-[#1a1a1a]">PROJECTS</span>
        </h2>

        {/* Projects preview */}
        <div className="mt-16 flex flex-col">
          <ProjectRow
            {...projects.damas}
            onClick={() => setActiveProject(projects.damas)}
          />

          <ProjectRow
            {...projects.bayt}
            onClick={() => setActiveProject(projects.bayt)}
          />

          <ProjectRow
            {...projects.najmai}
            onClick={() => setActiveProject(projects.najmai)}
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

      {/* Shared Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
