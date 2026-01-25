import ProfileCard from "./ProfileCard";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10">
      <div className="lg:flex lg:gap-24">
        
        {/* PROFILE - STICKY */}
        <div className="lg:w-[320px] lg:shrink-0">
          <div className="sticky top-28 flex justify-center lg:block">
            <ProfileCard />
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 mt-16 lg:mt-0">
          {children}
          <ContactSection />
          <Footer />
        </div>

      </div>
    </div>
  );
}