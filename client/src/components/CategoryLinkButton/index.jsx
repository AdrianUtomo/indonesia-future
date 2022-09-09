import React from "react";
import CtgCSS from "./Category.module.css";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
export const CategoryLinkButton = ({ name, path }) => {
  return (
    <Link
      className={CtgCSS.container}
      to={path}
      onClick={() => window.scrollTo(0,0)}
    >
      <div className={CtgCSS.bgRed}>
        <div className={CtgCSS.contex}>
          <h4>{name}</h4>
        </div>
        <div className={CtgCSS.bgArrow}>
          <HiOutlineArrowRight className={CtgCSS.arrowRight} />
        </div>
      </div>
    </Link>
  );
};
