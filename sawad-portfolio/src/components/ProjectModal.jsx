import { useEffect } from "react";
import { X } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function ProjectModal({ project, onClose }) {
  /* -----------------------------
     Close on ESC
  ------------------------------ */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  /* -----------------------------
     Lock background scroll
  ------------------------------ */
  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  // ✅ Conditional render AFTER hooks
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-6">
      {/* Modal */}
      <div className="relative bg-[#111] w-full max-w-5xl rounded-2xl p-8 max-h-[90vh] overflow-y-auto">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/60 hover:text-white transition"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-4xl font-bold text-white mb-1">
          {project.title}
        </h2>

        <p className="text-gray-400 mb-6">
          {project.subtitle}
        </p>

        {/* Action Buttons (OPTIONAL) */}
        {(project.demo || project.github) && (
          <div className="flex gap-4 mb-10">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition"
              >
                Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg border border-white/20 text-white text-sm hover:bg-white/10 transition"
              >
                GitHub
              </a>
            )}
          </div>
        )}

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl object-cover mb-10 opacity-95"
        />

        {/* YouTube (OPTIONAL) */}
        {project.youtube && (
          <div className="mb-12 aspect-video">
            <iframe
              src={project.youtube}
              title={project.title}
              className="w-full h-full rounded-xl"
              allowFullScreen
            />
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-white/10 mb-10" />

        {/* Markdown Content */}
        <ReactMarkdown
          components={{
            h3: ({ children }) => (
              <h3 className="text-xl font-semibold text-white mt-8 mb-3">
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
          {project.description}
        </ReactMarkdown>
      </div>
    </div>
  );
}
