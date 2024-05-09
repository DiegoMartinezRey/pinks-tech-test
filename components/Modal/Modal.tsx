import { useModals } from "@/contexts/Modals.context";
import { useOrders } from "@/contexts/Orders.context";
import { Order } from "@/dtos/Order.dto";
import s from "./Modal.module.scss";

export type ModalProps = {
  // onClose: () => void;
  // children?: React.ReactNode;
};

export default function Modal(props: ModalProps) {
  const { updateOrderStatus } = useOrders();
  const { isModalOpen, orderModal, closeModal } = useModals();

  const updateStatus = (order: Order) => {
    closeModal();
    if (order.state === "PENDING") {
      updateOrderStatus(order.id, "IN_PROGRESS");
    } else if (order.state === "IN_PROGRESS") {
      updateOrderStatus(order.id, "READY");
    } else if (order.state === "READY") {
    }
  };

  return (
    <>
      {isModalOpen && orderModal ? (
        <div className={s["pk-overlay"]} onClick={closeModal}>
          <div className={s["pk-modal"]} onClick={(e) => e.stopPropagation()}>
            <h1>Detalles de la orden</h1>
            <h2 className={s["pk-detail__name"]}>
              No. de orden:{" "}
              <span className={s["pk-detail__info"]}>{orderModal?.id}</span>
            </h2>
            <h2 className={s["pk-detail__name"]}>
              Estado de la orden:{" "}
              <span className={s["pk-detail__info"]}>{orderModal?.state}</span>
            </h2>
            <h2>Items:</h2>
            <ul className={s["pk-detail"]}>
              {orderModal?.items.map((item) => (
                <li className={s["pk-detail__list"]} key={item.id}>
                  <div>
                    <h3>{item.id}.</h3>
                  </div>
                  <div className={s["pk-detail__items"]}>
                    <h3 className={s["pk-detail__name"]}>
                      Producto:{" "}
                      <span className={s["pk-detail__info"]}>{item.name}</span>
                    </h3>
                    <h3 className={s["pk-detail__name"]}>
                      Precio:{" "}
                      <span className={s["pk-detail__info"]}>
                        {item.price.amount}
                      </span>
                    </h3>
                    <h3 className={s["pk-detail__name"]}>
                      Moneda:{" "}
                      <span className={s["pk-detail__info"]}>
                        {item.price.currency}
                      </span>
                    </h3>
                    <h3 className={s["pk-detail__name"]}>Imagen: </h3>
                    <img
                      className={s["pk-detail__image"]}
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className={s["pk-detail__button_group"]}>
              {!(orderModal.state === "READY") && (
                <button
                  className={`${s["pk-detail__button"]} 
              ${orderModal.state === "PENDING" && s["pk-detail__button__wait"]}
              ${
                orderModal.state === "IN_PROGRESS" &&
                s["pk-detail__button__done"]
              }`}
                  onClick={() => updateStatus(orderModal)}
                >
                  {orderModal.state === "PENDING" && <>Preparar pedido</>}
                  {orderModal.state === "IN_PROGRESS" && <>Pedido listo</>}
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
