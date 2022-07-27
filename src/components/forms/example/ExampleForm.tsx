import { useFormik } from "formik";
import React, { FC } from "react";
import AppTextField from "../../UI/textFields/app/AppTextField";
import FormButtons from "../common/formButtons/FormButtons";
import { validationSchema } from "./validationSchema";
import scss from "./exampleForm.module.scss";

const ExampleForm: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("submit form", values);
      onClose();
    },
  });

  return (
    <form onSubmit={handleSubmit} className={scss.root}>
      <div className={scss.content}>
        <AppTextField
          name="name"
          label="Name"
          value={values.name}
          onChange={handleChange}
          error={touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />
      </div>
      <FormButtons onCancel={onClose} />
    </form>
  );
};

export default ExampleForm;
