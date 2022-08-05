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

          {hasCloseBtn && (
            <AppButton onClick={onClose} color="secondary">
              X
            </AppButton>
          )}
        </div>
      )}
      {children}
    </Dialog>
  );
};

export default Modal;
