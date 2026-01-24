import profileImg from "../assets/profile.png";
import { Github, Linkedin, Youtube, Mail, FileUser } from "lucide-react";

export default function ProfileCard() {
  return (
    <div
      className="
        flex flex-col justify-between items-center
        bg-white text-black
        w-full max-w-[320px]
        h-[520px]
        overflow-hidden
        rounded-xl
      "
    >
      {/* Name */}
      <h2 className="text-2xl font-bold text-center mt-6">
        Sandesh <br /> Lavshetty
      </h2>

      {/* Image */}
      <div className="mt-6">
        <img
          src={profileImg}
          alt="Sandesh Lavshetty"
          className="
            w-[220px] h-[300px]
            object-cover
            rounded-xl
          "
        />
      </div>

      {/* Subtitle */}
      <p className="text-center text-sm text-[#222222] px-6 mt-4">
        Backend & AI Engineer building scalable system
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 mt-auto mb-8">
        <Github size={24} className="hover:text-gray-600 cursor-pointer" />
        <Linkedin size={24} className="hover:text-blue-700 cursor-pointer" />
        <Youtube size={24} className="hover:text-red-600 cursor-pointer" />
        <Mail size={24} className="hover:text-orange-500 cursor-pointer" />
        <FileUser
          size={24}
          className="hover:text-green-600 cursor-pointer"
        />{" "}
        {/* Resume */}
      </div>
    </div>
  );
}

function Icon({ src }) {
  return (
    <img
      src={src}
      alt=""
      className="w-5 h-5 opacity-80 hover:opacity-100 transition"
    />
  );
}
