import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import FloatingActions from "./components/FloatingActions";
import ScrollToTop from "./components/ScrollToTop";
import ModalPortal from "./components/ModalPortal";
import { ModalProvider } from "./context/ModalContext";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-[#0b0b0b]">
        <Navbar />
        <FloatingActions />

        {/* 🔥 Global scroll fix */}
        <ScrollToTop />
        
        {/* 🔥 Global Modal Portal */}
        <ModalPortal />

      <div className="pt-6 sm:pt-8 lg:pt-16">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />

          {/* Projects */}
          <Route
            path="/projects"
            element={
              <Layout>
                <ProjectsPage />
              </Layout>
            }
          />

          {/* Skills */}
          <Route
            path="/skills"
            element={
              <Layout>
                <SkillsPage />
              </Layout>
            }
          />
        </Routes>
      </div>
      </div>
    </ModalProvider>
  );
}

export default App;
