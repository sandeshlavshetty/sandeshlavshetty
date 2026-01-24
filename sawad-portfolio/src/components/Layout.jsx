import ProfileCard from "./ProfileCard";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-10">
      <div className="grid grid-cols-[320px_1fr] gap-24">
        
        {/* LEFT — Sticky Profile */}
        <div className="relative">
          <div className="sticky top-28">
            <ProfileCard />
          </div>
        </div>

        {/* RIGHT — Scrollable Content */}
        <div className="flex flex-col">
          {children}

          {/* Global Contact */}
          <ContactSection />

          {/* Global Footer */}
          <Footer />
        </div>

      </div>
    </div>
  );
}
