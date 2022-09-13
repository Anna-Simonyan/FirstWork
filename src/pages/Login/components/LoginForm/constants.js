import { yupEmail } from "../../../../constants/yupFields";
import * as Yup from "yup";

export const yupSchema = Yup.object().shape({
  email: yupEmail,
});
