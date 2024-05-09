import Logo from "@/bases/Logo";
import { useModals } from "@/contexts/Modals.context";
import { useRouter } from "next/router";
import s from "./NavBar.module.scss";

export default function NavBar() {
  const { openModal } = useModals();
  const router = useRouter();

  return (
    <nav className={s["pk-layout__navbar"]}>
      <div className={s["pk-layout__logo"]}>
        <Logo size="S" />
        <span>KDS: Krazy Display Service</span>
      </div>
      <div className={s["pk-layout__buttons"]}>
        <button className={s["pk-button"]} onClick={() => router.push("/")}>
          Ordenes
        </button>
        <button
          className={s["pk-button"]}
          onClick={() => router.push("/history")}
        >
          Hitorial
        </button>
      </div>
    </nav>
  );
}
