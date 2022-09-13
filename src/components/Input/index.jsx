import React from "react";

const Input = ({ type, value, placeholder, className, onChange, color }) => {
  return (
    <div>
      <input
        type={type}
        className={className}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
