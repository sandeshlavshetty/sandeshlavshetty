import ThoughtCard from "./ThoughtCard";

export default function ThoughtsSection() {
  return (
    <section className="mt-24">
      <h2 className="text-[64px] font-extrabold text-white leading-none">
        ENGINEERING
        <span className="block text-white/20">THOUGHTS</span>
      </h2>

      <div className="mt-14 space-y-14 max-w-3xl">
        <ThoughtCard
          title="Starting and Growing a Career in Web Design"
          desc="As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development."
          date="Apr 8, 2022"
          read="6 min read"
        />

        <ThoughtCard
          title="Create a Landing Page That Performs Great"
          desc="Whether you work in marketing, sales, or product design, knowing how to structure a high-performing landing page is critical."
          date="Mar 12, 2022"
          read="5 min read"
        />
      </div>
    </section>
  );
}
