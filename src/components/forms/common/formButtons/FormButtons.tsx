import { FC } from "react";
import AppButton from "../../../UI/buttons/app/AppButton";
import scss from "./formButtons.module.scss";

const FormButtons: FC<{
  onCancel?: () => void;
  cancelText?: string;
  submitText?: string;
}> = ({ onCancel, cancelText = "Cancel", submitText = "Submit" }) => {
  return (
    <div className={scss.root}>
      {onCancel && <AppButton onClick={onCancel}>{cancelText}</AppButton>}
      <AppButton type="submit" color="secondary" variant="contained">
        {submitText}
      </AppButton>
    </div>
  );
};

export default FormButtons;
