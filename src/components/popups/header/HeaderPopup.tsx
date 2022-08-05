import { useCallback, useState } from "react";
import AppButton from "../../UI/buttons/app/AppButton";
import Modal from "../common/modal/Modal";
import HeaderMenu from "./menu/HeaderMenu";

const HeaderPopup = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <AppButton color="secondary" variant="outlined" onClick={handleOpen}>
        Menu
      </AppButton>
      <Modal open={open} onClose={handleClose} title="Menu" hasCloseBtn>
        <HeaderMenu onClose={handleClose} />
      </Modal>
    </>
  );
};

export default HeaderPopup;
