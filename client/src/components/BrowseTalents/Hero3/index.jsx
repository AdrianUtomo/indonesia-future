import HeroCSS from "./Hero.module.css";
import React, { useRef } from "react";
import { NavLinkButton } from "../../NavLinkButton";

export const Hero3 = () => {
  const sliderRef = useRef(null);

  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
      <div className={HeroCSS.box}>
      <h4>Looking for talent?</h4>
      <div className={HeroCSS.button}>
            <NavLinkButton
              color={"red"}
              path={"/browse-talents"}
              name={"Browse Talent"}
            />
      </div>
      </div>
      </div>
    </div>
  );
};
