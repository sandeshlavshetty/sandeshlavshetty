import {
  Home,
  Folder,
  Briefcase,
  Wrench,
  Pen,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Home", action: "/" },
  { icon: Folder, label: "Projects", action: "/projects" },
  { icon: Briefcase, label: "Experience", scroll: "experience" },
  { icon: Wrench, label: "Skills", action: "/skills" },
  { icon: Pen, label: "Thoughts", scroll: "thoughts" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (item) => {
    if (item.action) {
      navigate(item.action);
    } else if (item.scroll) {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: item.scroll } });
      } else {
        document
          .getElementById(item.scroll)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <div className="hidden lg:flex w-full justify-center pt-6">
        <nav className="flex items-center gap-6 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
          {navItems.map((item) => (
            <NavIcon
              key={item.label}
              icon={item.icon}
              label={item.label}
              onClick={() => handleNav(item)}
            />
          ))}
        </nav>
      </div>

      {/* ================= MOBILE / TABLET NAV ================= */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-t border-white/10">
        <nav className="flex justify-around py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => handleNav(item)}
                className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition"
              >
                <Icon size={20} />
                <span className="text-[10px] font-medium">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}

/* ---------------- ICON (DESKTOP ONLY) ---------------- */

function NavIcon({ icon: Icon, label, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative group flex items-center justify-center cursor-pointer"
    >
      <Icon
        size={18}
        strokeWidth={2}
        className="text-white/50 group-hover:text-white transition-colors"
      />

      {/* Tooltip */}
      <div className="absolute top-10 opacity-0 group-hover:opacity-100 transition pointer-events-none">
        <div className="bg-[#1a1a1a] text-white text-[10px] font-medium px-2.5 py-1 rounded-md border border-white/10 shadow-xl whitespace-nowrap">
          {label}
        </div>
      </div>
    </div>
  );
}
