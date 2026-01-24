import ProfileCard from "./ProfileCard";

export default function Layout({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-10">
      <div className="grid grid-cols-[320px_1fr] gap-24">
        
        {/* LEFT — Sticky */}
        <div className="relative">
          <div className="sticky top-28">
            <ProfileCard />
          </div>
        </div>

        {/* RIGHT — Scroll content */}
        <div className="flex flex-col">
          {children}
        </div>

      </div>
    </div>
  );
}