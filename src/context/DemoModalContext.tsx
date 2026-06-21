"use client";

import { createContext, useContext, useState } from "react";
import BookDemoModal from "@/components/BookDemoModal";

interface DemoModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <DemoModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <BookDemoModal isOpen={isOpen} onClose={closeModal} />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const context = useContext(DemoModalContext);
  if (!context) {
    throw new Error("useDemoModal must be used within a DemoModalProvider");
  }
  return context;
}
