import { yupNumber } from "../../constants/yupFields";
import * as Yup from "yup";

export const yupSchema = Yup.object().shape({
  1: yupNumber,
  2: yupNumber,
  3: yupNumber,
  4: yupNumber,
  5: yupNumber,
  6: yupNumber,
});
