import ThoughtCard from "./ThoughtCard";
import { thoughts } from "../data/thoughts";

export default function ThoughtsSection() {
  return (
    <section id="thoughts" className="mt-24">
      <h2 className="text-[64px] font-extrabold text-white leading-none">
        ENGINEERING
        <span className="block text-white/20">THOUGHTS</span>
      </h2>

      <div className="mt-14 space-y-14 max-w-3xl">
        {thoughts.posts.map((post) => (
          <ThoughtCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
