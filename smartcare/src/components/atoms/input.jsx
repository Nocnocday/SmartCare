import React from "react";
import PropTypes from "prop-types";


const Input = ({ type, placeholder, classInput,style, ...rest }) => {
  const classNameInput = `outline-none bg-transparent p-2 ${classInput}`;
  const styleInput = {
    ...style,
    border: " 1px solid #ccc",
    borderRadius: '8px'
  }
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNameInput}
      style={styleInput}
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
