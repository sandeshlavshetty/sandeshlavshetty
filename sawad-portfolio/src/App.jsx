import Navbar from "./components/Navbar";
import HeroText from "./components/HeroText";
import ServicesSection from "./components/ServicesSection";
import ExperienceSection from "./components/ExperienceSection";
import Layout from "./components/Layout";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />

      <div className="pt-16">
      <Layout>
        <HeroText />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </Layout>
      </div>
    </div>
  );
}

export default App;
