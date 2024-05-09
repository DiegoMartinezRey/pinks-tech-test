import Rider from "@/bases/Rider";
import { useModals } from "@/contexts/Modals.context";
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

  const handleClick = (order: Order) => {
    if (props.onClick) {
      props.onClick(order);
    }
    openModal(props.state, order);
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
            className={`${!(order.state === "READY") && s["pk-card__hover"]} ${
              s["pk-card"]
            }`}
            key={order.id}
          >
            <div className={s["pk-card__column"]}>
              <span>
                Orden: <b className={s["pk-card__order"]}>{order.id}</b>
              </span>
              <span>
                Num items: <b>{order.items.length}</b>
              </span>
              <span>Haz click para mas detalles</span>
            </div>
            <div className={s["pk-rider"]}>
              {orderRiders[order.id] && (
                <Rider
                  order={order}
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
