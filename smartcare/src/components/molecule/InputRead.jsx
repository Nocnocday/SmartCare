import React from "react";
import PropTypes from "prop-types";


const InputRead = ({
  classLabel,
  textLabel,
  type,
  classInput,
  classInputRead,
  value,
  disable
}) => {
  const classNameInput = `outline-none bg-[#fff] border-transparent p-2 flex-1 ${classInput}`;
  return (
    <div className={`flex justify-between items-center ${classInputRead}`}>
      {textLabel && <label className={`${classLabel}`}>{textLabel}</label>}
      <input type={type} className={classNameInput} readOnly={disable} value={value}/>
    </div>
  );
};

InputRead.propTypes = {
  type: PropTypes.string,
  classLabel: PropTypes.string,
  classInput: PropTypes.string,
  classInputRead: PropTypes.string,
  textLabel: PropTypes.string,
  value: PropTypes.string,
  disable:PropTypes.bool
};

InputRead.defaultProps = {
  type: "text",
  classLabel: "",
  classInput: "",
  classInputRead: "",
  value: "",
  disable: true,
};

export default InputRead;
