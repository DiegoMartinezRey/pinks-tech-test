import { useRiders } from "@/contexts/Riders.context";
import s from "./Riders.module.scss";

export default function Riders() {
  const { riders } = useRiders();
  return (
    <section className={s["pk-riders__container"]}>
      <div className={s["pk-riders"]}>
        <h3>Riders:</h3>
        {/* {riders.map((rider, id) => (
          <Rider {...rider} key={id} />
        ))} */}
      </div>
    </section>
  );
}
