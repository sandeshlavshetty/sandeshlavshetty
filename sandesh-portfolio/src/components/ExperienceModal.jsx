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
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-3 sm:px-4 py-4 sm:py-6 overflow-y-auto"
    >
      {/* Modal Container - Centered with max width */}
      <div className="relative w-full max-w-2xl bg-[#111] rounded-xl sm:rounded-2xl overflow-hidden max-h-[90vh] sm:max-h-[85vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white/60 hover:text-white transition z-10"
        >
          <X size={20} />
        </button>

        {/* Header Section with padding */}
        <div className="p-5 sm:p-8 pb-4 sm:pb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white pr-8 mb-2 sm:mb-3">
            {experience.company}
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
            {experience.role}
          </p>

          <p className="text-xs sm:text-sm md:text-base text-gray-500">
            {experience.duration}
          </p>

          <div className="border-t border-white/10 mt-6" />
        </div>

        {/* Scrollable Content */}
        <div className="px-5 sm:px-8 pb-6 sm:pb-8">
          {/* Markdown Content */}
          <ReactMarkdown
            components={{
              h3: ({ children }) => (
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mt-4 sm:mt-6 mb-2 sm:mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
                  {children}
                </p>
              ),
              a: ({ children, href }) => (
                <a 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline transition"
                >
                  {children}
                </a>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-4 sm:pl-5 md:pl-6 space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 text-gray-300 text-xs sm:text-sm md:text-base">
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li className="ml-1">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="text-white">{children}</strong>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-4 sm:pl-5 md:pl-6 space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 text-gray-300 text-xs sm:text-sm md:text-base">
                  {children}
                </ol>
              ),
              code: ({ children }) => (
                <code className="bg-black/50 text-orange-400 px-2 py-1 rounded text-xs">
                  {children}
                </code>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-orange-500 pl-3 sm:pl-4 py-2 my-3 sm:my-4 text-gray-400 italic text-xs sm:text-sm">
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
