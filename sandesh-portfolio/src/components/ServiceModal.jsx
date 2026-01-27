import { X, ArrowRight, Github, FileText } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

export default function ServiceModal({ service, onClose }) {
  const navigate = useNavigate();
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-3 sm:px-4 py-4 sm:py-6 overflow-y-auto">
      
      {/* Modal */}
      <div className="relative bg-[#111] w-full max-w-4xl rounded-xl sm:rounded-2xl p-5 sm:p-10 max-h-[90vh] overflow-y-auto">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white/60 hover:text-white transition"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
          {service.title}
        </h2>

        {/* Markdown Content */}
        <ReactMarkdown
          components={{
            h3: ({ children }) => (
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mt-6 sm:mt-8 mb-2 sm:mb-3">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside text-gray-300 mb-3 sm:mb-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base">
                {children}
              </ul>
            ),
            li: ({ children }) => <li className="ml-2">{children}</li>,
          }}
        >
          {service.description}
        </ReactMarkdown>

        {/* ================= CTA BUTTONS ================= */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4">
          
          {/* View Projects */}
          <button
            onClick={() => {
              onClose();
              navigate("/projects");
            }}
            className="
              flex items-center justify-center sm:justify-start gap-2
              px-4 sm:px-6 py-2.5 sm:py-3
              rounded-lg sm:rounded-xl
              bg-orange-500 text-white
              font-semibold text-sm
              hover:bg-orange-600
              transition
            "
          >
            View Projects
            <ArrowRight size={16} />
          </button>

          {/* GitHub (optional) */}
          {service.github && (
            <a
              href={service.github}
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center justify-center sm:justify-start gap-2
                px-4 sm:px-6 py-2.5 sm:py-3
                rounded-lg sm:rounded-xl
                border border-white/20
                text-white text-sm
                hover:bg-white/10
                transition
              "
            >
              <Github size={16} />
              GitHub
            </a>
          )}

          {/* Resume (optional) */}
          {service.resume && (
            <a
              href={service.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center sm:justify-start gap-2
                px-4 sm:px-6 py-2.5 sm:py-3
                rounded-lg sm:rounded-xl
                border border-white/20
                text-white text-sm
                hover:bg-white/10
                transition
              "
            >
              <FileText size={16} />
              Resume
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
