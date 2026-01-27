import ProfileCard from "./ProfileCard";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:gap-24">
          
          {/* PROFILE - STICKY */}
          <div className="lg:w-[320px] lg:shrink-0">
            <div className="sticky top-20 sm:top-24 lg:top-28 flex justify-center lg:block">
              <ProfileCard />
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="flex-1 mt-12 sm:mt-14 lg:mt-0">
            {children}
            <ContactSection />
            <Footer />
          </div>

        </div>
      </div>
    </div>
  );
}