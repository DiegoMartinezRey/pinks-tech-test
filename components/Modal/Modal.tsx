import s from "./Modal.module.scss";

export type ModalProps = {
  onClose: () => void;
};

export default function Modal(props: ModalProps) {
  return (
    <>
      <div className={s["pk-overlay"]}>
        <div className={s["pk-modal"]} onClick={(e) => e.stopPropagation()}>
          <button className={s["pk-closeButton"]} onClick={props.onClose}>
            X
          </button>
        </div>
      </div>
    </>
  );
}
