import { useOrders } from "@/contexts/Orders.context";
import { Order } from "@/dtos/Order.dto";
import { useEffect } from "react";
import s from "./Column.module.scss";

export type ColumnProps = {
  orders: Array<Order>;
  title: string;
  state: string;
  onClick?: (order: Order) => void;
};

export default function Column(props: ColumnProps) {
  const { updateOrderStatus } = useOrders();

  useEffect(() => {}, [props.orders]);

  const setInfoOrders = () => {};

  return (
    <div className={s["pk-column"]}>
      <div className={s["pk-column__title"]}>
        <h3>{props.title}</h3>
      </div>
      {props.orders.map((order) => (
        <div
          onClick={() => props.onClick && props.onClick(order)}
          className={s["pk-card"]}
          key={order.id}
        >
          <div>
            <span>
              orden: <b>{order.id}</b>
            </span>
          </div>
          <div>
            <h3>{order.state}</h3>
            {order.items.map((item) => (
              <div key={item.id}>
                <h1>{item.name}</h1>
              </div>
            ))}
          </div>
          <button onClick={() => updateOrderStatus(order.id, props.state)}>
            Next
          </button>
        </div>
      ))}
    </div>
  );
}
