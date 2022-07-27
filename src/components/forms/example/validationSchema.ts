import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Mininum 2 characters")
    .max(15, "Maximum 15 characters")
    .required("Required!"),
});
