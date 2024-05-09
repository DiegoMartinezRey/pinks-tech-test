import { Order } from "@/dtos/Order.dto";
import { ReactNode, createContext, useContext, useState } from "react";

export type ModalsContextProps = {
  isModalOpen: boolean;
  state: string;
  orderModal: Order | null;
  updateState: (actualState: string) => void;
  openModal: (actualState: string, actualOrder?: Order) => void; // Hacer actualOrder opcional
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
  const [orderModal, setOrderModal] = useState<Order | null>(null);

  const openModal = (actualState: string, actualOrder?: Order) => {
    setState(actualState);
    setIsModalOpen(true);
    if (actualOrder) {
      setOrderModal(actualOrder);
    }
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
    orderModal,
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
