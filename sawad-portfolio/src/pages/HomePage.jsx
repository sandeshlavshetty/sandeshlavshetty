import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroText from "../components/HeroText";
import ServicesSection from "../components/ServicesSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import ThoughtsSection from "../components/ThoughtsSection";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      document
        .getElementById(location.state.scrollTo)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

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
