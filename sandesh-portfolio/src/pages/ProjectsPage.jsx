import { useState, useEffect } from "react";
import { Link } from "lucide-react";
import ProjectRow from "../components/ProjectRow";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);
  const [copiedLink, setCopiedLink] = useState(null);

  // Handle hash navigation on page load
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const copyToClipboard = (sectionId) => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(sectionId);
    setTimeout(() => setCopiedLink(null), 2000);
  };

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
          <ProjectRow {...projects.threatvision} onClick={() => setActiveProject(projects.threatvision)} />
        </div>

        {/* AI / ML */}
        <ProjectCategory
          id="ai-ml"
          title="AI & ML Projects"
          items={[projects.najmai]}
          onOpen={setActiveProject}
          onCopyLink={copyToClipboard}
          isCopied={copiedLink === "ai-ml"}
        />

        {/* Backend */}
        <ProjectCategory
          id="backend"
          title="Backend Engineering Projects"
          items={[projects.bayt, projects.damas]}
          onOpen={setActiveProject}
          onCopyLink={copyToClipboard}
          isCopied={copiedLink === "backend"}
        />

        {/* Systems Engineering */}
        <ProjectCategory
          id="systems"
          title="Systems Engineering Projects"
          items={[projects.threatvision]}
          onOpen={setActiveProject}
          onCopyLink={copyToClipboard}
          isCopied={copiedLink === "systems"}
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

function ProjectCategory({ id, title, items, onOpen, onCopyLink, isCopied }) {
  return (
    <div className="mt-32" id={id}>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[48px] font-bold text-white">
          {title}
        </h2>
        <button
          onClick={() => onCopyLink(id)}
          title="Copy shareable link to this section"
          className="
            p-2 rounded-lg
            bg-white/5 hover:bg-white/10
            text-white/60 hover:text-white
            transition
            flex items-center gap-2 whitespace-nowrap text-sm
          "
        >
          <Link size={18} />
          <span className="hidden sm:inline">
            {isCopied ? "Copied!" : "Share"}
          </span>
        </button>
      </div>

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
