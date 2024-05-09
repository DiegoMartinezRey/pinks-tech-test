import { useOrders } from "@/contexts/Orders.context";
import s from "./Dashboard.module.scss";

interface Items {
  id: string;
  name: string;
  image: string;
  price: {
    currency: string;
    amount: number;
  };
}

export default function Dashboard() {
  const { orders } = useOrders();

  const sumPrice = (items: Items[]) => {
    return items.reduce((price, item) => price + item.price.amount, 0);
  };

  return (
    <div className={s["pk-order"]}>
      <div className={s["pk-panel"]}>
        <h1>Historial de pedidos</h1>
        <div className={s["pk-panel__info"]}>
          <div className={s["pk-panel__order"]}>
            <h2>Orden</h2>
            <h2>No. de items</h2>
            <h2>Precio total</h2>
            <h2>Estado pedido</h2>
          </div>
          {orders.map((order) => (
            <div className={s["pk-panel__order_column"]} key={order.id}>
              <div className={s["pk-panel__order"]}>
                <h3 className={s["pk-panel__text"]}>{order.id}</h3>
                <h3 className={s["pk-panel__text"]}>{order.items.length}</h3>
                <h3 className={s["pk-panel__text"]}>{sumPrice(order.items)}</h3>
                <h3 className={s["pk-panel__text"]}>{order.state}</h3>
              </div>
              <div className={s["pk-panel__division"]}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
