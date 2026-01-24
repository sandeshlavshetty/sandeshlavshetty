import { Home, Folder, Briefcase, Wrench, Pen } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center pt-6">
      <nav className="flex items-center gap-6 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
        <NavIcon Icon={Home} />
        <NavIcon Icon={Folder} />
        <NavIcon Icon={Briefcase} />
        <NavIcon Icon={Wrench} />
        <NavIcon Icon={Pen} />
      </nav>
    </div>
  );
}

function NavIcon({ Icon }) {
  return (
    <Icon
      size={18}
      className="text-white/70 hover:text-white cursor-pointer transition"
    />
  );
}
