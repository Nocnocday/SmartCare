import React from "react";
import PropTypes from "prop-types";


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

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  classInput: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  classInput: "",
};
export default Input;
