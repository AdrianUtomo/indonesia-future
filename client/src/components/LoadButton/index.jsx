import NVLBCSS from "../NavLinkButton/NavLinkButton.module.css";
import React from "react";

export const LoadButton = ({ color, func, name }) => {
  return (
    <div
      className={
        color === "red" ? `${NVLBCSS.button} ${NVLBCSS.bgRed}` : NVLBCSS.button
      }
      onClick={() => func(true)}
    >
      <p>{name}</p>
    </div>
  );
};
