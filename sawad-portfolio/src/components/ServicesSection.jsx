import ServiceCard from "./ServiceCard";
import { Layers, Cpu } from "lucide-react";

export default function ServicesSection() {
  return (
    <div className="flex gap-6 mt-20 w-full">
      <ServiceCard
        title={
          <>
            Backend Systems <br />
            & API Engineering
          </>
        }
        bg="bg-[#ff5722]"
        textColor="text-white"
        icon={<Layers size={24} className="text-white" />}
        isAI={false}
      />

      <ServiceCard
        title={
          <>
            AI, ML & Gen-AI <br />
            Applications
          </>
        }
        bg="bg-[#bfff00]"
        textColor="text-black"
        icon={<Cpu size={24} className="text-black" />}
        isAI={true}
      />
    </div>
  );
}