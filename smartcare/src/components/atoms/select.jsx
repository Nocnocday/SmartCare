import React from "react";
import PropTypes from "prop-types";

const Select = ({ datas, classSelect, style, ...rest }) => {
  const classNameSelect = `outline-none bg-transparent p-2 ${classSelect}`;
  const styleSelect = {
    ...style,
    border: " 1px solid #ccc",
    borderRadius: "8px",
  };
  const renderOption =
    datas && datas.length > 0
      ? datas.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))
      : [];
  return (
    <select className={classNameSelect} style={styleSelect} {...rest}>
      {renderOption}
    </select>
  );
};

Select.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  classSelect: PropTypes.string,
};

Select.defaultProps = {
  type: "text",
  placeholder: "",
  classSelect: "",
};
export default Select;
