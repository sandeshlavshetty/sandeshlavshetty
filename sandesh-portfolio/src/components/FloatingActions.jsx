import { Youtube, FileUser } from "lucide-react";
import { useModal } from "../context/ModalContext";
import resumePdf from "../assets/portfolio.pdf";

export default function FloatingActions() {
  const { openModal } = useModal();

  const handleIntroClick = (e) => {
    e.preventDefault();
    openModal("video", true);
  };

  return (
    <>
      {/* Left — Intro Video */}
      <button
        onClick={handleIntroClick}
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
        <span className="text-sm font-medium">Got 2 minutes?</span>
      </button>

      {/* Right — Resume */}
      <a
        href={resumePdf}
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
