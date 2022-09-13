import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const useFormSchema = (yupSchema) => {
  const schema = useMemo(() => yupSchema, [yupSchema]);

  return useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
};
