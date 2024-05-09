import React, { useRef, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";

import PropTypes from "prop-types";

const Input = ({ type, placeholder, classInput, style, ...rest }) => {
  const [isShow, setIsShow] = useState(false);
  const inputRef = useRef()
  const classNameInput = `outline-none bg-transparent p-2 ${classInput}`;
  const styleInput = {
    ...style,
    border: " 1px solid #ccc",
    borderRadius: "8px",
  };
  const showPassword = () => {
    if(isShow){
      inputRef.current.type = "password"
    }
    if(!isShow){
      inputRef.current.type = "text"
    }
    setIsShow((isShow) => !isShow);
    
  };

  return (
    <div className="relative">
      <input
      ref={inputRef}
        type={type}
        placeholder={placeholder}
        className={classNameInput}
        style={styleInput}
        {...rest}
      />
      {type == "password" && (
        <span
          className="absolute cursor-pointer"
          style={{ top: "calc(50% - 8px)", right: "10px" }}
          onClick={showPassword}
        >
          {isShow ? <BsEyeSlashFill /> : <IoEyeSharp />}
        </span>
      )}
    </div>
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
