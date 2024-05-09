import Kanban from "@/components/Kanban";
import Modal from "@/components/Modal";
import NavBar from "@/components/NavBar/NavBar";
import s from "./OrdersLayout.module.scss";

export default function OrdersLayout() {
  return (
    <main className={s["pk-layout"]}>
      <NavBar />
      <article className={s["pk-layout__app"]}>
        <Kanban />
        {/* <Riders /> */}
        <Modal />
      </article>
    </main>
  );
}
