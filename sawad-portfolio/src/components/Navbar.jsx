import { Home, Folder, Briefcase, Wrench, Pen } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleExperienceClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "experience" } });
    } else {
      document
        .getElementById("experience")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex justify-center pt-6">
      <nav className="flex items-center gap-6 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
        <NavIcon icon={Home} label="Home" onClick={() => navigate("/")} />
        <NavIcon icon={Folder} label="Projects" onClick={() => navigate("/projects")} />
        <NavIcon icon={Briefcase} label="Experience" onClick={handleExperienceClick} />
        <NavIcon icon={Wrench} label="Skills" onClick={() => navigate("/skills")} />
        <NavIcon icon={Pen} label="Thoughts" />
      </nav>
    </div>
  );
}

function NavIcon({ icon: Icon, label, onClick }) {
  return (
    <div
      className="relative group flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <Icon size={18} className="text-white/70 hover:text-white transition" />

      <span
        className="
          absolute -top-9 px-3 py-1 text-xs rounded-md
          bg-black/80 text-white
          opacity-0 translate-y-1
          transition-all duration-200
          group-hover:opacity-100
          group-hover:translate-y-0
          whitespace-nowrap
        "
      >
        {label}
      </span>
    </div>
  );
}
