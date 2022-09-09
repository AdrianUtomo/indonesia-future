import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PCSS from "./Pagination.module.css";
export const Pagination = () => {
  const pageNumbers = [1, 2, 3, 4, 5];
  return (
    <div className={PCSS.container}>
      <button className={PCSS.prevPage}>
        <IoIosArrowBack className={PCSS.arrowIcon} />
        <p>Previous</p>
      </button>
      <div className={PCSS.pointPages}>
        {pageNumbers.map((page) => (
          <a href="">{page}</a>
        ))}
      </div>
      <button className={PCSS.nextPage}>
        <p>Next</p>
        <IoIosArrowForward className={PCSS.arrowIcon} />
      </button>
    </div>
  );
};
