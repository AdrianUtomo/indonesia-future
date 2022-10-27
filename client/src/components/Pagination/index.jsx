import { getElementById } from "domutils";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PCSS from "./Pagination.module.css";

export const Pagination = ({pageNumbers, page, func}) => {
  return (
    <div className={PCSS.container}>
      <button className={PCSS.prevPage}>
        <IoIosArrowBack className={PCSS.arrowIcon} />
        <p>Previous</p>
      </button>
      <div className={PCSS.pointPages}>
        {
          pageNumbers.map((number) => (
          <button id={`page`+number} onClick={() => func(number)} href="">{number}</button>
        ))
        }
      </div>
      <button className={PCSS.nextPage}>
        <p>Next</p>
        <IoIosArrowForward className={PCSS.arrowIcon} />
      </button>
    </div>
  );
};
