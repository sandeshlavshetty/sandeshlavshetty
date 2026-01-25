import ThoughtCard from "./ThoughtCard";
import { thoughts } from "../data/thoughts";

export default function ThoughtsSection() {
  return (
    <section id="thoughts" className="mt-32">
      {/* High-Impact Heading matching UI */}
      <h2 className="text-[48px] sm:text-[72px] lg:text-[100px] font-black text-white leading-[0.85] tracking-tighter uppercase">
        ENGINEERING
        <span className="block text-[#1a1a1a]">THOUGHTS</span>
      </h2>

      <div className="mt-14 space-y-6"> {/* Reduced space-y because cards now have their own padding */}
        {thoughts.posts.map((post) => (
          <ThoughtCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}