import { ReactNode, createContext, useContext, useState } from "react";

export type ModalsContextProps = {
  isModalOpen: boolean;
  state: string;
  updateState: (actualState: string) => void;
  openModal: (actualState: string) => void;
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
  const [state, setState] = useState("");

  const openModal = (actualState: string) => {
    setState(actualState);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const updateState = (actualState: string) => {
    setState(actualState);
  };

  const context = {
    isModalOpen,
    state,
    updateState,
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
