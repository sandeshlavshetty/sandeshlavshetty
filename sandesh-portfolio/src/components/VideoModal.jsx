import { X } from "lucide-react";

export default function VideoModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-[1000] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-black rounded-lg shadow-2xl w-full max-w-4xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition"
        >
          <X size={24} />
        </button>

        {/* Video Container */}
        <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/QDrv_xuzhe8"
            title="Portfolio Walkthrough | Backend & AI Systems I've Built"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
