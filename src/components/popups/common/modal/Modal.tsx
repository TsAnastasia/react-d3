import Dialog from "@mui/material/Dialog";
import { FC, ReactNode } from "react";
import AppButton from "../../../UI/buttons/app/AppButton";
import scss from "./modal.module.scss";

const Modal: FC<{
  title?: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  hasCloseBtn?: boolean;
}> = ({ title, open, onClose, hasCloseBtn = false, children }) => {
  return (
    <Dialog open={open} onClose={onClose} classes={{ paper: scss.modal }}>
      {title && (
        <div className={scss.head}>
          <p>{title}</p>
        </div>
      )}
      {children}
      {hasCloseBtn && (
        <div className={scss.btns}>
          <AppButton onClick={onClose}>close</AppButton>
        </div>
      )}
    </Dialog>
  );
};

export default Modal;
