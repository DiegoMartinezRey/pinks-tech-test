import NavBar from "@/components/NavBar/NavBar";
import s from "./OrdersLayout.module.scss";

interface MainLayoutProps {
  children: React.ReactNode;
}

const OrdersLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className={s["pk-layout"]}>
      <NavBar />
      <article className={s["pk-layout__app"]}>
        <main>{children}</main>
      </article>
    </main>
  );
};

export default OrdersLayout;
