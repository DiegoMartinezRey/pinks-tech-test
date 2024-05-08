import s from "./Modal.module.scss";

export type ModalProps = {
  onClose: () => void;
};

export default function Modal(props: ModalProps) {
  return (
    <>
      <div className={s["pk-overlay"]} onClick={props.onClose}>
        <div className={s["pk-modal"]} onClick={(e) => e.stopPropagation()}>
          <button className={s["pk-closeButton"]}>X</button>
          <h1>Orden:</h1>
          <h3>Articulo 1</h3>
        </div>
      </div>
    </>
  );
}
