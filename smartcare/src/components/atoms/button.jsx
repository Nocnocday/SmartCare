import { Link } from "react-router-dom";
import PropTypes from "prop-types";



function Button({ children, type, path, classButton, handleClick, ...rest }) {
  const classBtn = `mt-[26px] w-[142px] bg-sidebar inline-block text-center py-[6px] text-secondColor ${classButton}`;
  return (
    <>
      {type === "link" ? (
        <Link to={path} className={classBtn} {...rest}>
          {children}
        </Link>
      ) : (
        <button className={classBtn} onClick={handleClick} {...rest}>
          {children}
        </button>
      )}
    </>
  );
}
Button.propTypes = {
  type: PropTypes.string,
  classButton: PropTypes.string,
  path: PropTypes.string,
  handleClick: PropTypes.func,
};
Button.defaultProps = {
  type: "",
  path: "/",
  classButton: "",
  handleClick: () => {},
};


export default Button;
