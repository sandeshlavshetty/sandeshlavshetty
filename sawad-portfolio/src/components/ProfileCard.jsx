import profileImg from "../assets/profile.png";
import { Github, Linkedin, Youtube, Mail, FileUser } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="relative bg-white text-black w-full max-w-[320px] h-[540px] rounded-[32px] overflow-hidden shadow-sm font-['Poppins']">
      
      {/* CONTENT WRAPPER */}
      <div className="flex flex-col items-center h-full px-8">

        {/* Name - Tighter and Bolder */}
        <div className="pt-10 text-center">
          <h2 className="text-[32px] font-black leading-[0.9] tracking-tight">
            Sandesh<br />Lavshetty
          </h2>
        </div>

        {/* Image Container - Matches "Fit" and "Relative" settings */}
        <div className="relative mt-8 w-fit h-fit">
          <img
            src={profileImg}
            alt="Sandesh Lavshetty"
            className="w-[200px] h-[280px] object-cover rounded-2xl"
          />
        </div>

        {/* Subtitle - Exact Framer Specs: 18px, Medium, 110% Line Height */}
        <p className="mt-8 text-center text-[18px] font-medium text-neutral-500 leading-[1.1] max-w-[220px]">
          Backend & Ai Engineer building scalable system
        </p>

        <div className="flex-1" />

        {/* Icons - Styled to match the orange/red UI mockup */}
        <div className="pb-10 flex gap-5 text-[#ef562f]">
          <Github className="cursor-pointer hover:scale-110 transition-transform" size={24} />
          <Linkedin className="cursor-pointer hover:scale-110 transition-transform" size={24} />
          <Mail className="cursor-pointer hover:scale-110 transition-transform" size={24} />
          <Youtube className="cursor-pointer hover:scale-110 transition-transform" size={24} />
          <FileUser className="cursor-pointer hover:scale-110 transition-transform" size={24} />
        </div>

      </div>
    </div>
  );
}