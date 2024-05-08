import Logo from "@/bases/Logo";
import { useModals } from "@/contexts/Modals.context";
import s from "./NavBar.module.scss";

export default function NavBar() {
  const { openModal } = useModals();

  return (
    <nav className={s["pk-layout__navbar"]}>
      <div className={s["pk-layout__logo"]}>
        <Logo size="S" />
        <span>KDS: Krazy Display Service</span>
      </div>
      <div className={s["pk-layout__buttons"]}>
        <button
          className={s["pk-button"]}
          onClick={() => openModal("DELIVERED")}
        >
          In progress
        </button>
        <button
          className={s["pk-button"]}
          onClick={() => openModal("DELIVERED")}
        >
          Done
        </button>
      </div>
    </nav>
  );
}
