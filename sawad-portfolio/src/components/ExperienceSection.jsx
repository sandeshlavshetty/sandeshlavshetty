import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  return (
    <section className="mt-32">
      {/* Heading */}
      <h2 className="text-[64px] font-extrabold text-white leading-none">
        PROFESSIONAL
        <span className="block text-white/20">EXPERIENCE</span>
      </h2>

      {/* Experience List */}
      <div className="mt-14 flex flex-col gap-6 group">
        <ExperienceCard
          company="PixelForge Studios"
          desc="Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement."
          date="Jan 2020 – Present"
        />

        <ExperienceCard
          company="BlueWave Innovators"
          desc="Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers."
          date="Jun 2017 – Dec 2019"
        />
      </div>
    </section>
  );
}
