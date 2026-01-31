import profileImg from "../assets/profile.png";
import resumePdf from "../assets/portfolio.pdf";
import { Github, Linkedin, Youtube, Mail, FileUser } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="
  relative bg-white text-black
  max-w-[260px] sm:max-w-[280px] md:max-w-[320px]
  min-h-[480px] sm:min-h-[520px]
  rounded-[24px] sm:rounded-[32px]
  overflow-hidden
">    
      {/* CONTENT WRAPPER */}
      <div className="flex flex-col items-center h-full px-6 sm:px-8">

        {/* Name - Tighter and Bolder */}
        <div className="pt-6 sm:pt-10 text-center">
          <h2 className="text-2xl sm:text-[32px] font-black leading-[0.9] tracking-tight">
            Sandesh<br />Lavshetty
          </h2>
        </div>

        {/* Image Container - Matches "Fit" and "Relative" settings */}
        <div className="relative mt-6 sm:mt-8 w-fit h-fit">
          <img
            src={profileImg}
            alt="Sandesh Lavshetty"
            className="w-[160px] h-[240px] sm:w-[200px] sm:h-[280px] object-cover rounded-xl sm:rounded-2xl"
          />
        </div>

        {/* Subtitle - Exact Framer Specs: 18px, Medium, 110% Line Height */}
        <p className="mt-6 sm:mt-8 text-center text-sm sm:text-[18px] font-medium text-neutral-500 leading-[1.1] max-w-[200px] sm:max-w-[220px]">
          Software Engineer (Backend & AI)
        </p>

        <div className="flex-1" />

        {/* Icons - Styled to match the orange/red UI mockup */}
        <div className="pb-6 sm:pb-10 flex gap-3 sm:gap-5 text-[#ef562f]">
          <a href="https://github.com/sandeshlavshetty" target="_blank" rel="noopener noreferrer">
            <Github className="cursor-pointer hover:scale-110 transition-transform" size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sandesh-lavshetty-143334281/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="cursor-pointer hover:scale-110 transition-transform" size={24} />
          </a>
          <a href="mailto:sandeshlavshetty@gmail.com">
            <Mail className="cursor-pointer hover:scale-110 transition-transform" size={24} />
          </a>
          <a href="https://www.youtube.com/channel/UCLq8xLiaNR0HF352JgWSvZw" target="_blank" rel="noopener noreferrer">
            <Youtube className="cursor-pointer hover:scale-110 transition-transform" size={24} />
          </a>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer">
            <FileUser className="cursor-pointer hover:scale-110 transition-transform" size={24} />
          </a>
        </div>

      </div>
    </div>
  );
}