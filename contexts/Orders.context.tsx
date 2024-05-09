import { Order } from "@/dtos/Order.dto";
import { OrderOrchestrator } from "@/lib";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type OrdersContextProps = {
  orders: Array<Order>;
  pickup: (order: Order) => void;
  updateOrderStatus: (orderId: string, newStatus: string) => void;
};

export const OrdersContext = createContext<OrdersContextProps>(
  // @ts-ignore
  {}
);

export type OrdersProviderProps = {
  children: ReactNode;
};

export function OrdersProvider(props: OrdersProviderProps) {
  const [orders, setOrders] = useState<Array<Order>>([]);

  useEffect(() => {
    const orderOrchestrator = new OrderOrchestrator();
    const listener = orderOrchestrator.run();
    listener.on("order", (order) => {
      setOrders((prev) => [...prev, order]);
    });
  }, []);

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? {
              ...order,
              state: newStatus as
                | "PENDING"
                | "IN_PROGRESS"
                | "READY"
                | "DELIVERED",
            }
          : order
      )
    );
  };

  const pickup = (order: Order) => {
    if (order.state === "READY") {
      updateOrderStatus(order.id, "DELIVERED");
      console.log("order: ", order);
    }
  };

  const context = {
    orders,
    pickup,
    updateOrderStatus,
  };

  return (
    <OrdersContext.Provider value={context}>
      {props.children}
    </OrdersContext.Provider>
  );
}

export const useOrders = () => useContext(OrdersContext);
