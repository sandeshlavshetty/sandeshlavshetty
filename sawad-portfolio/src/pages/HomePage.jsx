import HeroText from "../components/HeroText";
import ServicesSection from "../components/ServicesSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ThoughtsSection from "../components/ThoughtsSection";


export default function HomePage() {
  return (
    <>
      <HeroText />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ThoughtsSection />
    </>
  );
}
