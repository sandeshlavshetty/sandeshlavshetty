import { useState } from "react";
import ProjectRow from "../components/ProjectRow";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <section className="pb-32">
        <h1 className="text-[72px] font-extrabold text-white leading-none">
          RECENT
          <span className="block text-white/20">PROJECTS</span>
        </h1>

        {/* Featured */}
        <div className="mt-20 flex flex-col gap-10">
          <ProjectRow {...projects.damas} onClick={() => setActiveProject(projects.damas)} />
          <ProjectRow {...projects.bayt} onClick={() => setActiveProject(projects.bayt)} />
          <ProjectRow {...projects.najmai} onClick={() => setActiveProject(projects.najmai)} />
        </div>

        {/* AI / ML */}
        <ProjectCategory
          title="AI & ML Projects"
          items={[projects.najmai, projects.threatvision]}
          onOpen={setActiveProject}
        />

        {/* Backend */}
        <ProjectCategory
          title="Backend Engineering Projects"
          items={[projects.bayt, projects.damas]}
          onOpen={setActiveProject}
        />
      </section>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}

/* ---------------- Category ---------------- */

function ProjectCategory({ title, items, onOpen }) {
  return (
    <div className="mt-32">
      <h2 className="text-[48px] font-bold text-white">
        {title}
      </h2>

      <div className="mt-14 flex flex-col gap-10">
        {items
          .filter(Boolean)
          .map((p) => (
            <ProjectRow
              key={p.id}
              {...p}
              onClick={() => onOpen(p)}
            />
          ))}
      </div>
    </div>
  );
}
