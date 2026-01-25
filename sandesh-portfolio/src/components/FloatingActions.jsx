import { Youtube, FileUser } from "lucide-react";

export default function FloatingActions() {
  return (
    <>
      {/* Left — Intro Video */}
      <a
        href="https://youtube.com/your-intro-video"
        target="_blank"
        className="
          fixed bottom-20 lg:bottom-6 left-6 z-50
          flex items-center gap-2
          bg-red-600 hover:bg-red-700
          text-white px-4 py-3
          rounded-full shadow-lg
          transition
        "
      >
        <Youtube size={18} />
        <span className="text-sm font-medium">Intro</span>
      </a>

      {/* Right — Resume */}
      <a
        href="/Sandesh_Lavshetty_Resume.pdf"
        target="_blank"
        className="
          fixed bottom-20 lg:bottom-6 right-6 z-50
          flex items-center gap-2
          bg-white text-black
          px-4 py-3
          rounded-full shadow-lg
          hover:bg-gray-100
          transition
        "
      >
        <FileUser size={18} />
        <span className="text-sm font-medium">Resume</span>
      </a>
    </>
  );
}
