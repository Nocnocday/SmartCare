import React from "react";

const Input = ({ type, placeholder, classInput, ...rest }) => {
  const classNameInput = `outline-none bg-[#E7E7E7] border-transparent p-2 ${classInput}`;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNameInput}
      {...rest}
    />
  );
};

export default Input;
