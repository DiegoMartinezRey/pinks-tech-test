import { Order } from "@/dtos/Order.dto";
import { EventEmitter } from "events";
import { getRandomId, getRandomInterval } from "./utils";

export class OrderOrchestrator {
  private interval: NodeJS.Timeout | undefined;
  private maxOrders: number = getRandomInterval(10, 30);
  private eventEmitter = new EventEmitter();

  private emit(order: Order) {
    this.eventEmitter.emit("order", order);
  }

  public run() {
    this.interval = setInterval(() => {
      this.emit({
        id: getRandomId(),
        state: "PENDING",
        items: [
          {
            id: "1",
            name: "Hamburguesa",
            image: "/combo_image.jpg",
            price: {
              currency: "€",
              amount: 15,
            },
          },
          {
            id: "2",
            name: "Soda",
            image: "/pinks_image.png",
            price: {
              currency: "€",
              amount: 3.45,
            },
          },
        ],
      });
      this.maxOrders--;
      if (this.maxOrders <= 0) {
        clearInterval(this.interval);
      }
    }, 2000);
    return this.eventEmitter;
  }
}
