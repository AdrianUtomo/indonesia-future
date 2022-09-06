import HeroCSS from "./Hero.module.css";
import React, { useRef } from "react";
import { NavLinkButton } from "../../NavLinkButton";

export const Hero4 = () => {
  const sliderRef = useRef(null);

  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
      <div className={HeroCSS.box}>
      <h4>Looking for project?</h4>
      <div className={HeroCSS.button}>
            <NavLinkButton
              color={"red"}
              path={"/browse-projects"}
              name={"Join Now"}
            />
      </div>
      </div>
      </div>
    </div>
  );
};
