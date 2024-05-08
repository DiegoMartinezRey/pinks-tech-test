import Logo from "@/bases/Logo";
import Kanban from "@/components/Kanban";
import Modal from "@/components/Modal";
import Riders from "@/components/Riders";
import { useModals } from "@/contexts/Modals.context";
import s from "./OrdersLayout.module.scss";

export default function OrdersLayout() {
  const { isModalOpen, openModal, closeModal } = useModals();

  return (
    <main className={s["pk-layout"]}>
      <nav className={s["pk-layout__navbar"]}>
        <div className={s["pk-layout__logo"]}>
          <Logo size="S" />
          <span>KDS: Krazy Display Service</span>
        </div>
        <div className={s["pk-layout__buttons"]}>
          <button className={s["pk-button"]}>In progress</button>
          <button className={s["pk-button"]}>Done</button>
        </div>
      </nav>
      <article className={s["pk-layout__app"]}>
        <Kanban />
        <Riders />
        {isModalOpen ? (
          <Modal onClose={closeModal}>
            <h1>Test</h1>
          </Modal>
        ) : (
          <></>
        )}
      </article>
    </main>
  );
}
