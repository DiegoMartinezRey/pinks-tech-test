import Rider from "@/bases/Rider";
import { useModals } from "@/contexts/Modals.context";
import { useOrders } from "@/contexts/Orders.context";
import { useRiders } from "@/contexts/Riders.context";
import { Order } from "@/dtos/Order.dto";
import { Rider as RiderDtos } from "@/dtos/Rider.dto";
import { useEffect, useState } from "react";
import s from "./Column.module.scss";

export type ColumnProps = {
  orders: Array<Order>;
  title: string;
  state: string;
  onClick?: (order: Order) => void;
};

export default function Column(props: ColumnProps) {
  const { updateOrderStatus } = useOrders();
  const { openModal } = useModals();
  const { riders } = useRiders();
  const [orderRiders, setOrderRiders] = useState<{
    [orderId: string]: RiderDtos;
  }>({});

  useEffect(() => {
    setOrderOfRiders();
  }, [props.orders, riders]);

  const setOrderOfRiders = () => {
    const orderRidersMap: { [orderId: string]: RiderDtos } = {};
    props.orders.forEach((order) => {
      const rider = riders.find((rider) => rider.orderWanted === order.id);
      if (rider) {
        orderRidersMap[order.id] = rider;
      }
    });
    setOrderRiders(orderRidersMap);
  };

  const updateOrderStatusButton =
    (order: Order) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (order.state === "PENDING") {
        updateOrderStatus(order.id, "IN_PROGRESS");
      } else if (order.state === "IN_PROGRESS") {
        updateOrderStatus(order.id, "READY");
      } else if (order.state === "READY") {
      }
    };

  const handleClick = (order: Order) => {
    if (props.onClick) {
      props.onClick(order);
    }
    openModal(props.state);
    console.log(orderRiders);
  };

  return (
    <div className={s["pk-column"]}>
      <div className={s["pk-column__title"]}>
        <h3>{props.title}</h3>
      </div>
      <div className={s["pk-card__flex"]}>
        {props.orders.map((order) => (
          <div
            onClick={() => handleClick(order)}
            className={s["pk-card"]}
            key={order.id}
          >
            <div>
              <span>
                orden: <b>{order.id}</b>
              </span>
              <div>
                <h3>{order.state}</h3>
                {order.items.map((item) => (
                  <div key={item.id}>
                    <h1>{item.name}</h1>
                  </div>
                ))}
              </div>
              {order.state === "READY" ? (
                <></>
              ) : (
                <button onClick={updateOrderStatusButton(order)}>Next</button>
              )}
            </div>
            <div className={s["pk-rider"]}>
              {orderRiders[order.id] && (
                <Rider
                  rider={orderRiders[order.id]}
                  onClick={(e) => e.stopPropagation()}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
