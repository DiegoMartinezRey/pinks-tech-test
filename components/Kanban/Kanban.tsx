import { useOrders } from "@/contexts/Orders.context";
import Column from "../Column";
import Modal from "../Modal";
import s from "./Kanban.module.scss";

export default function Kanban() {
  const { orders } = useOrders();

  return (
    <section className={s["pk-kanban"]}>
      <Column
        title="Pendiente"
        orders={orders.filter((i) => i.state === "PENDING")}
        state="IN_PROGRESS"
        // onClick={() =>
        //   alert(
        //     "mmmmm..., deberias de modificar esto! tenemos que hacer que las ordenes lleguen hasta listo y se entreguen!"
        //   )
        // }
      />
      <Column
        title="En preparación"
        orders={orders.filter((i) => i.state === "IN_PROGRESS")}
        state="READY"
      />
      <Column
        title="Listo"
        orders={orders.filter((i) => i.state === "READY")}
        state="DELIVERED"
      />
      <Modal />
    </section>
  );
}
