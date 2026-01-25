import ProjectRow from "./ProjectRow";

export default function ProjectsSection() {
  return (
    <section className="mt-32">
      {/* Heading */}

      <h2 className="text-[100px] font-black text-white leading-[0.85] tracking-tighter uppercase">
        RECENT
        <span className="block text-[#1a1a1a]">PROJECTS</span>
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
