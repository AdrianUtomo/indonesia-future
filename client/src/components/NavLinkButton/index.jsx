import NVLBCSS from "./NavLinkButton.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

export const NavLinkButton = ({ color, path, name }) => {
  return (
    <NavLink
      to={path}
      className={
        color === "red" ? `${NVLBCSS.button} ${NVLBCSS.bgRed}` : NVLBCSS.button
      }
      onClick={() => window.scrollTo(0, 0)}
    >
      <p>{name}</p>
    </NavLink>
  );
};
