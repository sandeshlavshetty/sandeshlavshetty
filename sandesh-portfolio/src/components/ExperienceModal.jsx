import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function ExperienceModal({ experience, onClose }) {
  const modalRef = useRef(null);

  /* Close on ESC and lock scroll */
  useEffect(() => {
    if (!experience) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    const handleClickOutside = (e) => {
      if (modalRef.current === e.target) onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    modalRef.current?.addEventListener("click", handleClickOutside);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
      modalRef.current?.removeEventListener("click", handleClickOutside);
    };
  }, [experience, onClose]);

  if (!experience) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 py-6 overflow-y-auto"
    >
      {/* Modal Container - Centered with max width */}
      <div className="relative w-full max-w-2xl bg-[#111] rounded-2xl overflow-hidden max-h-[85vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/60 hover:text-white transition z-10"
        >
          <X size={22} />
        </button>

        {/* Header Section with padding */}
        <div className="p-8 pb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white pr-8 mb-3">
            {experience.company}
          </h2>

          <p className="text-gray-400 text-base md:text-lg mb-2">
            {experience.role}
          </p>

          <p className="text-sm md:text-base text-gray-500">
            {experience.duration}
          </p>

          <div className="border-t border-white/10 mt-6" />
        </div>

        {/* Scrollable Content */}
        <div className="px-8 pb-8">
          {/* Markdown Content */}
          <ReactMarkdown
            components={{
              h3: ({ children }) => (
                <h3 className="text-lg md:text-xl font-semibold text-white mt-6 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-5 md:pl-6 space-y-2 mb-4 text-gray-300 text-sm md:text-base">
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li className="ml-2">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="text-white">{children}</strong>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-5 md:pl-6 space-y-2 mb-4 text-gray-300 text-sm md:text-base">
                  {children}
                </ol>
              ),
              code: ({ children }) => (
                <code className="bg-black/50 text-orange-400 px-2 py-1 rounded text-xs md:text-sm">
                  {children}
                </code>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-orange-500 pl-4 py-2 my-4 text-gray-400 italic">
                  {children}
                </blockquote>
              ),
            }}
          >
            {experience.details}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
