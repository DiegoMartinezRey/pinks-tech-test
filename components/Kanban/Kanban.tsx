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

  return (
    <section className={s["pk-kanban"]}>
      <Column
        title="Pendiente"
        orders={orders.filter((i) => i.state === "PENDING")}
        state="IN_PROGRESS"
        onClick={() => openModal("PENDING")}
      />
      <Column
        title="En preparación"
        orders={orders.filter((i) => i.state === "IN_PROGRESS")}
        state="READY"
        onClick={() => openModal("IN_PROGRESS")}
      />
      <Column
        title="Listo"
        orders={orders.filter((i) => i.state === "READY")}
        state="DELIVERED"
        onClick={() => openModal("READY")}
      />
    </section>
  );
}
