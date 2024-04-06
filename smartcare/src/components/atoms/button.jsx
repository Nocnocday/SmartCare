import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Button.defaultProps = {
  type: "link",
  path: "/",
  classButton:''
};

function Button({ children, type, path, classButton,...rest }) {
  const classBtn = `mt-[26px] w-[142px] bg-sidebar inline-block text-center py-[6px] text-secondColor ${classButton}`;
  return (
    <>
      {type === "link" ? (
        <Link to={path} className={classBtn}>
          {children}
        </Link>
      ) : (
        <button  className={classBtn}>{children}</button>
      )}
    </>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  classButton: PropTypes.string,
  path: PropTypes.string,
};

export default Button;
