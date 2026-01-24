import Navbar from "./components/Navbar";
import HeroText from "./components/HeroText";
import ServicesSection from "./components/ServicesSection";
import ExperienceSection from "./components/ExperienceSection";
import Layout from "./components/Layout";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ThoughtsSection from "./components/ThoughtsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />
      <FloatingActions />

      <div className="pt-16">
      <Layout>
        <HeroText />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ThoughtsSection />
        <ContactSection />
        <Footer />
      </Layout>
      </div>
    </div>
  );
}

export default App;
