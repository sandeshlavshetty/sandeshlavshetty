import ProfileCard from "./ProfileCard";
import HeroText from "./HeroText";
import ServicesSection from "./ServicesSection";

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-96px)] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-10">
        <div className="grid grid-cols-[320px_1fr] gap-24">
          
          {/* Left */}
          <ProfileCard />

          {/* Right */}
          <div>
            <HeroText />
            <ServicesSection />
          </div>

        </div>
      </div>
    </section>
  );
}
