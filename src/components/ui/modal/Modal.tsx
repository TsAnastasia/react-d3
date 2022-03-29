import cl from "classnames";
import { FC } from "react";
import styles from "./modal.module.scss";

const Modal: FC<{ isOpen: boolean; onClose: () => void }> = ({
  children,
  isOpen,
  onClose,
}) => {
  return (
    <div className={cl(styles.modal, isOpen && styles.modal_open)}>
      {children}
      <button type="button" onClick={onClose} className={styles.close} />
    </div>
  );
};

export default Modal;
