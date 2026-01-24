import profileImg from "../assets/profile.png";
import { Github, Linkedin, Youtube, Mail, FileUser } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center bg-white text-black w-full max-w-[320px] h-[540px] rounded-2xl overflow-hidden">
      
      {/* Name */}
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Sandesh
        </h2>
        <h3 className="text-3xl font-extrabold tracking-tight">
          Lavshetty
        </h3>
      </div>

      {/* Image */}
      <div className="mt-6">
        <img
          src={profileImg}
          alt="Sandesh Lavshetty"
          className="w-[220px] h-[300px] object-cover rounded-xl"
        />
      </div>

      {/* Subtitle */}
      <p className="mt-6 px-6 text-center text-sm text-neutral-600 leading-relaxed">
        Backend & AI Engineer focused on building scalable, production-ready systems.
      </p>

      {/* Social Icons */}
      <div className="mt-auto mb-8 flex gap-6">
        <Github className="hover:text-black/70 cursor-pointer" />
        <Linkedin className="hover:text-black/70 cursor-pointer" />
        <Youtube className="hover:text-black/70 cursor-pointer" />
        <Mail className="hover:text-black/70 cursor-pointer" />
        <FileUser className="hover:text-black/70 cursor-pointer" />
      </div>
    </div>
  );
}
