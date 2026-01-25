import { useEffect } from "react";
import { X } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function ExperienceModal({ experience, onClose }) {
  /* Lock scroll */
  useEffect(() => {
    if (experience) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, [experience]);

  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
      {/* Drawer */}
      <div className="relative w-full max-w-xl h-full bg-[#111] p-8 overflow-y-auto">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/60 hover:text-white transition"
        >
          <X size={22} />
        </button>

        {/* Header */}
        <h2 className="text-3xl font-bold text-white">
          {experience.company}
        </h2>

        <p className="text-gray-400 mt-1">
          {experience.role}
        </p>

        <p className="text-sm text-gray-500 mb-8">
          {experience.duration}
        </p>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Markdown Content */}
        <ReactMarkdown
          components={{
            h3: ({ children }) => (
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-gray-300 leading-relaxed mb-4">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-300">
                {children}
              </ul>
            ),
            li: ({ children }) => <li>{children}</li>,
            strong: ({ children }) => (
              <strong className="text-white">{children}</strong>
            ),
          }}
        >
          {experience.details}
        </ReactMarkdown>
      </div>
    </div>
  );
}
