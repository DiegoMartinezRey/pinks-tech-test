import { useOrders } from "@/contexts/Orders.context";
import Column from "../Column";
import s from "./Kanban.module.scss";

export default function Kanban() {
  const { orders } = useOrders();

  return (
    <section className={s["pk-kanban"]}>
      <Column
        title="Pendiente"
        orders={orders.filter((i) => i.state === "PENDING")}
        state="PENDING"
      />
      <Column
        title="En preparación"
        orders={orders.filter((i) => i.state === "IN_PROGRESS")}
        state="IN_PROGRESS"
      />
      <Column
        title="Listo"
        orders={orders.filter((i) => i.state === "READY")}
        state="READY"
      />
    </section>
  );
}
