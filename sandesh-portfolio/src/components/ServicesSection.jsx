import ServiceCard from "./ServiceCard";
import { services } from "../data/services";
import { useModal } from "../context/ModalContext";
import { Layers, Cpu } from "lucide-react";

export default function ServicesSection() {
  const { openModal } = useModal();

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-16 sm:mt-20 w-full">
      <ServiceCard
        title={<>Backend Systems <br /> & API Engineering</>}
        bg="bg-[#ff5722]"
        textColor="text-white"
        icon={<Layers size={24} className="text-white" />}
        isAI={false}
        onClick={() => openModal("service", services.backend)}
      />

      <ServiceCard
        title={<>AI, ML & Gen-AI <br /> Applications</>}
        bg="bg-[#bfff00]"
        textColor="text-black"
        icon={<Cpu size={24} className="text-black" />}
        isAI={true}
        onClick={() => openModal("service", services.ai)}
      />
    </div>
  );
}