import s from "./Modal.module.scss";

export default function Modal() {
  return (
    <>
      <div className={s["pk-overlay"]}>
        <div className={s["pk-modal"]} onClick={(e) => e.stopPropagation()}>
          <button className={s["pk-closeButton"]}>X</button>
        </div>
      </div>
    </>
  );
}
