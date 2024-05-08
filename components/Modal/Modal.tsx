import s from "./Modal.module.scss";

export type ModalProps = {
  onClose: () => void;
  children?: React.ReactNode;
};

export default function Modal(props: ModalProps) {
  return (
    <>
      <div className={s["pk-overlay"]} onClick={props.onClose}>
        <div className={s["pk-modal"]} onClick={(e) => e.stopPropagation()}>
          <button className={s["pk-closeButton"]}>X</button>
          {props.children}
        </div>
      </div>
    </>
  );
}
