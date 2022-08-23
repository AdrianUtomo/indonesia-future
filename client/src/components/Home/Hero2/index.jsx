import React from "react";
import HeroCSS from "./Hero.module.css";
import imageHero2 from "../../../assets/imageHero2.jpg";
import { NavLinkButton } from "../../NavLinkButton";
export const Hero2 = () => {
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <img src={imageHero2} alt="" />
        <div className={HeroCSS.heroRight}>
          <h2>
            Find <span className={HeroCSS.redText}>real projects</span> based on
            your skills
          </h2>
          <p>
            Find projects that match your skills meet clients you like to work
            with and grow to higher levels
          </p>
          <div className={HeroCSS.button}>
            <NavLinkButton
              color={"red"}
              path={"/browse-projects"}
              name={"Browse Projects"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
