import Kanban from "@/components/Kanban";
import Modal from "@/components/Modal";
import NavBar from "@/components/NavBar/NavBar";
import Riders from "@/components/Riders";
import s from "./OrdersLayout.module.scss";

export default function OrdersLayout() {
  return (
    <main className={s["pk-layout"]}>
      <NavBar />
      {/* <nav className={s["pk-layout__navbar"]}>
        <div className={s["pk-layout__logo"]}>
          <Logo size="S" />
          <span>KDS: Krazy Display Service</span>
        </div>
        <div className={s["pk-layout__buttons"]}>
          <button className={s["pk-button"]}>In progress</button>
          <button className={s["pk-button"]}>Done</button>
        </div>
      </nav> */}
      <article className={s["pk-layout__app"]}>
        <Kanban />
        <Riders />
        <Modal />
      </article>
    </main>
  );
}
