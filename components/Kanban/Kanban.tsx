import { useModals } from "@/contexts/Modals.context";
import { useOrders } from "@/contexts/Orders.context";
import { Order } from "@/dtos/Order.dto";
import { useState } from "react";
import Column from "../Column";
import s from "./Kanban.module.scss";

export default function Kanban() {
  const { orders } = useOrders();
  const { openModal, updateState } = useModals();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = (order: Order) => {
  //   setSelectedOrder(order);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setSelectedOrder(null);
  //   setIsModalOpen(false);
  // };
  const handleClick = (order: Order) => {
    console.log("order: ", order);
  };

  return (
    <section className={s["pk-kanban"]}>
      <Column
        title="Pendiente"
        orders={orders.filter((i) => i.state === "PENDING")}
        state="PENDING"
        onClick={handleClick}
      />
      <Column
        title="En preparación"
        orders={orders.filter((i) => i.state === "IN_PROGRESS")}
        state="IN_PROGRESS"
        onClick={handleClick}
      />
      <Column
        title="Listo"
        orders={orders.filter((i) => i.state === "READY")}
        state="READY"
        onClick={handleClick}
      />
    </section>
  );
}
