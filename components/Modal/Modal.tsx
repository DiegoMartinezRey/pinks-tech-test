import { useModals } from "@/contexts/Modals.context";
import { useOrders } from "@/contexts/Orders.context";
import s from "./Modal.module.scss";

export type ModalProps = {
  // onClose: () => void;
  // children?: React.ReactNode;
};

export default function Modal(props: ModalProps) {
  const { orders } = useOrders();
  const { isModalOpen, state, closeModal } = useModals();

  return (
    <>
      {isModalOpen ? (
        <div className={s["pk-overlay"]} onClick={closeModal}>
          <div className={s["pk-modal"]} onClick={(e) => e.stopPropagation()}>
            <button className={s["pk-closeButton"]}>X</button>

            {state === "PENDING" && (
              <div>
                <h1>Pending</h1>
              </div>
            )}
            {state === "IN_PROGRESS" && <h1>In progress</h1>}
            {state === "READY" && <h1>Ready</h1>}
            {state === "DELIVERED" && <h1>Delivered</h1>}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
