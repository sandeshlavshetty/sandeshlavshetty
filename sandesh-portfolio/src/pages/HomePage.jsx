import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Reveal from "../components/Reveal";
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
      <Reveal y={0} duration={900}>
        <HeroText />
      </Reveal>

      <Reveal delay={0.05}>
        <ServicesSection />
      </Reveal>

      <Reveal delay={0.1}>
        <ExperienceSection />
      </Reveal>

      <Reveal delay={0.1}>
        <ProjectsSection />
      </Reveal>

      <Reveal delay={0.1}>
        <SkillsSection />
      </Reveal>

      <Reveal delay={0.1}>
        <ThoughtsSection />
      </Reveal>
    </>
  );
}
