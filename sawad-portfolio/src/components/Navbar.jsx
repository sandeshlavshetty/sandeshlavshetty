import { Home, Folder, Briefcase, Wrench, Pen } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleThoughtsClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "thoughts" } });
    } else {
      document
        .getElementById("thoughts")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex justify-center pt-6">
      <nav className="flex items-center gap-6 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
        <NavIcon icon={Home} label="Home" onClick={() => navigate("/")} />
        <NavIcon icon={Folder} label="Projects" onClick={() => navigate("/projects")} />
        <NavIcon icon={Briefcase} label="Experience" onClick={() => navigate("/", { state: { scrollTo: "experience" } })} />
        <NavIcon icon={Wrench} label="Skills" onClick={() => navigate("/skills")} />
        <NavIcon icon={Pen} label="Thoughts" onClick={handleThoughtsClick} />
      </nav>
    </div>
  );
}

function NavIcon({ icon: Icon, label, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative group flex items-center justify-center cursor-pointer"
    >
      {/* Icon with hover state */}
      <Icon 
        size={18} 
        strokeWidth={2} 
        className="text-white/50 group-hover:text-white transition-colors duration-200" 
      />

      {/* Adjusted Tooltip: Now positioned below to match UI images */}
      <div className="absolute top-10 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-y-[-4px] group-hover:translate-y-0">
        <div className="bg-[#1a1a1a] text-white text-[10px] font-medium px-2.5 py-1 rounded-md border border-white/10 shadow-xl whitespace-nowrap">
          {label}
        </div>
      </div>
    </div>
  );
}