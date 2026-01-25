import ProfileCard from "./ProfileCard";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10">
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[320px_1fr]
          gap-16 lg:gap-24
          items-start
        "
      >
        {/* PROFILE COLUMN */}
        <div className="relative h-full">
          {/* Desktop: sticky | Mobile: normal */}
          <div className="lg:sticky lg:top-28 flex justify-center lg:block">
            <ProfileCard />
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col min-h-screen">
          {children}
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
