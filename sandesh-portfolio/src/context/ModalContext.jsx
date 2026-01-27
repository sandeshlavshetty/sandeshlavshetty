import { createContext, useContext, useState, useCallback } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modals, setModals] = useState({
    experience: null,
    project: null,
    service: null,
  });

  const openModal = useCallback((type, data) => {
    setModals((prev) => ({
      ...prev,
      [type]: data,
    }));
  }, []);

  const closeModal = useCallback((type) => {
    setModals((prev) => ({
      ...prev,
      [type]: null,
    }));
  }, []);

  const closeAllModals = useCallback(() => {
    setModals({
      experience: null,
      project: null,
      service: null,
    });
  }, []);

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal, closeAllModals }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return context;
}
