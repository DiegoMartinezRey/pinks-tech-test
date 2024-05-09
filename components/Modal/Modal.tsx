import { useModals } from "@/contexts/Modals.context";
import { useOrders } from "@/contexts/Orders.context";
import s from "./Modal.module.scss";

export type ModalProps = {
  // onClose: () => void;
  // children?: React.ReactNode;
};

export default function Modal(props: ModalProps) {
  const { orders } = useOrders();
  const { isModalOpen, state, orderModal, closeModal } = useModals();

  return (
    <>
      {isModalOpen ? (
        <div className={s["pk-overlay"]} onClick={closeModal}>
          <div className={s["pk-modal"]} onClick={(e) => e.stopPropagation()}>
            <h1>Detalles de la orden</h1>
            <h2>
              No. de orden: <span>{orderModal?.id}</span>
            </h2>
            <h2>
              Estado de la orden: <span>{orderModal?.state}</span>
            </h2>
            <h2>Items:</h2>
            <ul>
              {orderModal?.items.map((item) => (
                <li className={s["pk-detail"]} key={item.id}>
                  <div>
                    <h3>{item.id}.</h3>
                  </div>
                  <div className={s["pk-detail__items"]}>
                    <h3>
                      Producto: <span>{item.name}</span>
                    </h3>
                    <h3>
                      Precio: <span>{item.price.amount}</span>
                    </h3>
                    <h3>
                      Moneda: <span>{item.price.currency}</span>
                    </h3>
                    <h3>Imagen: </h3>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={s["pk-detail__image"]}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
