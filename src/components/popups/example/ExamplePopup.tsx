import { useCallback, useState } from "react";
import ExampleForm from "../../forms/example/ExampleForm";
import AppButton from "../../UI/buttons/app/AppButton";
import Modal from "../common/modal/Modal";

const ExamplePopup = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <AppButton onClick={handleOpen} variant="outlined">
        open example popup
      </AppButton>
      <Modal open={open} onClose={handleClose} title="example">
        <ExampleForm onClose={handleClose} />
      </Modal>
    </>
  );
};

export default ExamplePopup;
