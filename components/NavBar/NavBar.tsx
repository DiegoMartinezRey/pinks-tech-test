import Logo from "@/bases/Logo";
import s from "./NavBar.module.scss";

export default function NavBar() {
  return (
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
  );
}
