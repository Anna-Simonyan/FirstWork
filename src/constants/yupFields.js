import * as Yup from "yup";
import { invalidEmailMessage, requiredFieldMessage } from "./messages";

export const yupEmail = Yup.string()
  .email(invalidEmailMessage)
  .required(requiredFieldMessage);
export const yupDefault = Yup.string().required(requiredFieldMessage);
export const yupNumber = Yup.string()
  .matches(/^-?\d*\.?\d*$/)
  .required();
