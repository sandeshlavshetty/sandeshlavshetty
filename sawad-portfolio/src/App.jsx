import Navbar from "./components/Navbar";
import HeroText from "./components/HeroText";
import ServicesSection from "./components/ServicesSection";
import ExperienceSection from "./components/ExperienceSection";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />

      <Layout>
        <HeroText />
        <ServicesSection />
        <ExperienceSection />
      </Layout>
    </div>
  );
}

export default App;
