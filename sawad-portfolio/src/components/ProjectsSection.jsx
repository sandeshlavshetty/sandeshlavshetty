import ProjectRow from "./ProjectRow";

export default function ProjectsSection() {
  return (
    <section className="mt-32">
      {/* Heading */}
      <h2 className="text-[64px] font-extrabold text-white leading-none">
        RECENT
        <span className="block text-white/20">PROJECTS</span>
      </h2>

      {/* Projects */}
      <div className="mt-16 flex flex-col gap-10">
        <ProjectRow
          title="Damas"
          subtitle="Free Framer Template"
          image="/projects/damas.png"
        />

        <ProjectRow
          title="Bayt"
          subtitle="Real Estate Framer Template"
          image="/projects/bayt.png"
        />

        <ProjectRow
          title="NajmAI"
          subtitle="SaaS Framer Template"
          image="/projects/najmai.png"
        />
      </div>
    </section>
  );
}
