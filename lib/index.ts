import { Order } from "@/dtos/Order.dto";
import { EventEmitter } from "events";
import {
  getRandomFood,
  getRandomId,
  getRandomInterval,
  getRandomPriceAmount,
} from "./utils";

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
            name: getRandomFood(),
            image: "/pinks_image.png",
            price: {
              currency: "€",
              amount: getRandomPriceAmount(2, 15),
            },
          },
          {
            id: "2",
            name: getRandomFood(),
            image: "/pinks_image.png",
            price: {
              currency: "€",
              amount: getRandomPriceAmount(2, 15),
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
