import { useModal } from "../context/ModalContext";
import ExperienceModal from "./ExperienceModal";
import ProjectModal from "./ProjectModal";
import ServiceModal from "./ServiceModal";

export default function ModalPortal() {
  const { modals, closeModal } = useModal();

  return (
    <>
      {modals.experience && (
        <ExperienceModal
          experience={modals.experience}
          onClose={() => closeModal("experience")}
        />
      )}
      {modals.project && (
        <ProjectModal
          project={modals.project}
          onClose={() => closeModal("project")}
        />
      )}
      {modals.service && (
        <ServiceModal
          service={modals.service}
          onClose={() => closeModal("service")}
        />
      )}
    </>
  );
}
