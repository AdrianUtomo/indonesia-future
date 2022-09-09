import React from "react";
import HeroCSS from "./Hero.module.css";
export const Hero2 = () => {
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <p>Search for projects</p>
      </div>
    </div>
  );
};
