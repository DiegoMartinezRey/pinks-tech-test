import { ReactNode, createContext, useContext, useState } from "react";

export type ModalsContextProps = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const ModalsContext = createContext<ModalsContextProps>(
  // @ts-ignore
  {}
);

export type ModalsProviderProps = {
  children: ReactNode;
};

export function ModalsProvider(props: ModalsProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const context = {
    isModalOpen,
    openModal,
    closeModal,
  };

  return (
    <ModalsContext.Provider value={context}>
      {props.children}
    </ModalsContext.Provider>
  );
}

export const useModals = () => useContext(ModalsContext);
