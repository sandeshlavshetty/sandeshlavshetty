import ProfileCard from "./ProfileCard";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 pb-24 sm:pb-0">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:gap-24">
          
          {/* PROFILE - STICKY */}
          <div className="w-full lg:w-[320px] lg:shrink-0 flex justify-center lg:block">
            <div className="sticky top-6 sm:top-8 lg:top-28">
              <ProfileCard />
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="flex-1 mt-8 sm:mt-10 lg:mt-0">
            {children}
            <ContactSection />
            <Footer />
          </div>

        </div>
      </div>
    </div>
  );
}