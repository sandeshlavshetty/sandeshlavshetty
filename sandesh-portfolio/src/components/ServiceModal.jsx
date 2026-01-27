import { X, ArrowRight, Github, FileText } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

export default function ServiceModal({ service, onClose }) {
  const navigate = useNavigate();
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-6">
      
      {/* Modal */}
      <div className="relative bg-[#111] w-full max-w-4xl rounded-2xl p-10 max-h-[90vh] overflow-y-auto">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/60 hover:text-white transition"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-white mb-3">
          {service.title}
        </h2>

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
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                {children}
              </ul>
            ),
            li: ({ children }) => <li className="ml-2">{children}</li>,
          }}
        >
          {service.description}
        </ReactMarkdown>

        {/* ================= CTA BUTTONS ================= */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-4">
          
          {/* View Projects */}
          <button
            onClick={() => {
              onClose();
              navigate("/projects");
            }}
            className="
              flex items-center gap-2
              px-6 py-3
              rounded-xl
              bg-orange-500 text-white
              font-semibold
              hover:bg-orange-600
              transition
            "
          >
            View Projects
            <ArrowRight size={18} />
          </button>

          {/* GitHub (optional) */}
          {service.github && (
            <a
              href={service.github}
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-2
                px-6 py-3
                rounded-xl
                border border-white/20
                text-white
                hover:bg-white/10
                transition
              "
            >
              <Github size={18} />
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
                flex items-center gap-2
                px-6 py-3
                rounded-xl
                border border-white/20
                text-white
                hover:bg-white/10
                transition
              "
            >
              <FileText size={18} />
              Resume
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
