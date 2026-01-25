import { ArrowUpRight } from "lucide-react";

export default function ExperienceCard({ company, desc, date, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="p-10 rounded-[32px] bg-[#0f0f0f] border border-white/5 hover:bg-[#151515] transition-all cursor-pointer group"
    >
      <div className="flex justify-between items-start">
        <div className="max-w-xl">
          <h3 className="text-[32px] font-bold text-white mb-4">{company}</h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">{desc}</p>
          <p className="text-gray-600 font-medium uppercase tracking-widest text-sm">{date}</p>
        </div>
        <ArrowUpRight className="text-orange-500 group-hover:scale-125 transition-transform" size={24} />
      </div>
    </div>
  );
}