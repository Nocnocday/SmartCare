import React, { useEffect, useState } from "react";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import PropTypes from "prop-types";

const Pagination = ({ totalPages, onPageChange }) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    onPageChange(page);
  }, [page]);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handleClick = (number) => {
    if (page !== number && number > 0 && number <= totalPages) {
      setPage(number);
    }
  };

  return (
    <nav className="flex justify-center">
      <ul className="flex">
        <li>
          <span
            className="p-[8px] mx-[4px] inline-block w-[16px] h-[16px] box-content rounded-full text-center cursor-pointer"
            onClick={() => handleClick(page - 1)}
          >
            <GrFormPreviousLink className="text-sidebar"/>
          </span>
        </li>
        {pageNumbers.map((number) => (
          <li>
            <span
              key={number}
              className={`p-[8px] mx-[4px] inline-block w-[16px] h-[16px] box-content hover:bg-sidebar rounded-full hover:text-[#fff] text-center cursor-pointer ${
                page == number ? "bg-sidebar text-[#fff]" : ""
              }`}
              onClick={() => handleClick(number)}
            >
              {number}
            </span>
          </li>
        ))}
        <li>
          <span
            className="p-[8px] mx-[4px] inline-block w-[16px] h-[16px] box-content rounded-full text-center cursor-pointer"
            onClick={() => handleClick(page + 1)}
          >
            <GrFormNextLink className="text-sidebar"/>
          </span>
        </li>
      </ul>
    </nav>
  );
};
Pagination.defaultProps = {
  totalPages: 0,
  onPageChange: () => {},
};

Pagination.propTypes = {
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default Pagination;
