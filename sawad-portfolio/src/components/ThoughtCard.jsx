export default function ThoughtCard({ title, desc, date, read }) {
  return (
    <div className="group cursor-pointer">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-white max-w-xl group-hover:underline">
          {title}
        </h3>

        <span className="text-orange-500 text-lg group-hover:translate-x-1 transition">
          ↗
        </span>
      </div>

      <p className="mt-4 text-gray-400 max-w-2xl">
        {desc}
      </p>

      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <span>{date}</span>
        <span>{read}</span>
      </div>
    </div>
  );
}
