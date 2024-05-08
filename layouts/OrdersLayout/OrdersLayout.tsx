import Logo from "@/bases/Logo";
import Kanban from "@/components/Kanban";
import Riders from "@/components/Riders";
import s from "./OrdersLayout.module.scss";

export default function OrdersLayout() {
  return (
    <main className={s["pk-layout"]}>
      <nav className={s["pk-layout__navbar"]}>
        <div className={s["pk-layout__logo"]}>
          <Logo size="S" />
          <span>KDS: Krazy Display Service</span>
        </div>
        <div className={s["pk-layout__buttons"]}>
          <button>In progress</button>
          <button>Done</button>
        </div>
      </nav>
      <article className={s["pk-layout__app"]}>
        <Kanban />
        <Riders />
      </article>
    </main>
  );
}
