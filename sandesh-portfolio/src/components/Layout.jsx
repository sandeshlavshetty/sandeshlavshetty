import ProfileCard from "./ProfileCard";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="w-full px-3 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:gap-16 xl:gap-24">
          
          {/* PROFILE - STICKY */}
          <div className="w-full lg:w-[280px] xl:w-[320px] lg:shrink-0 flex justify-center lg:block mb-6 sm:mb-8 lg:mb-0">
            <div className="sticky top-14 sm:top-16 lg:top-24">
              <ProfileCard />
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="flex-1 min-w-0">
            {children}
            <ContactSection />
            <Footer />
          </div>

        </div>
      </div>
    </div>
  );
}