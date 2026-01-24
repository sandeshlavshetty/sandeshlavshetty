import ServiceCard from "./ServiceCard";
import { Layers, Cpu } from "lucide-react";

export default function ServicesSection() {
  return (
    <div className="mt-20 flex gap-8">
      <ServiceCard
        title={
          <>
            BACKEND SYSTEMS <br />
            & API ENGINEERING
          </>
        }
        bg="bg-orange-500"
        icon={<Layers size={28} />}
      />

      <ServiceCard
        title={
          <>
            AI, ML & GEN-AI <br />
            APPLICATIONS
          </>
        }
        bg="bg-lime-400"
        icon={<Cpu size={28} />}
      />
    </div>
  );
}
