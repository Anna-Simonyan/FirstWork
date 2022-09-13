import { TextField } from "@mui/material";
import React, { useCallback } from "react";
import { useController } from "react-hook-form";

export const FormTextField = ({
  control,
  disabled,
  defaultValue,
  
  name,
  placeholder,
  type = "text",
  isShownErrorMessage = true,
  handleFocusNext,
  handleFocusPrev,
  onKeyUp,
  setEmail

  
  
}) => {
  const {
    field: { ref, name: cName, value = "", onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
    
  });

  const handleChange = useCallback(
    (event) => {
      onChange(event);
      handleFocusNext?.(event);
      handleFocusPrev?.(event);
      
      setEmail(event.target.value)
      
    },
    [onChange, handleFocusNext, handleFocusPrev, setEmail]
  );

  return (
    <TextField
      ref={ref}
      disabled={disabled}
      error={!!error?.message}
      label={isShownErrorMessage ? error?.message : placeholder}
      name={cName}
      placeholder={placeholder}
      type={type}
      value={value}
      variant="standard"
      onChange={handleChange}
      sx={{ border: "none" }}
    />
  );
};
