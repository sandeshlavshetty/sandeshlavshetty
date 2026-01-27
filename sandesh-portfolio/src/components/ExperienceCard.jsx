import { ArrowUpRight } from "lucide-react";

export default function ExperienceCard({ company, desc, date, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="p-6 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[32px] bg-[#0f0f0f] border border-white/5 hover:bg-[#151515] transition-all cursor-pointer group"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0 sm:items-start">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl md:text-[32px] font-bold text-white mb-2 sm:mb-4">{company}</h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-6">{desc}</p>
          <p className="text-gray-600 font-medium uppercase tracking-widest text-xs sm:text-sm">{date}</p>
        </div>
        <ArrowUpRight className="text-orange-500 group-hover:scale-125 transition-transform flex-shrink-0" size={20} />
      </div>
    </div>
  );
}