import { ModalsProvider } from "@/contexts/Modals.context";
import { OrdersProvider } from "@/contexts/Orders.context";
import { RidersProvider } from "@/contexts/Riders.context";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OrdersProvider>
      <RidersProvider>
        <ModalsProvider>
          <Component {...pageProps} />
        </ModalsProvider>
      </RidersProvider>
    </OrdersProvider>
  );
}
