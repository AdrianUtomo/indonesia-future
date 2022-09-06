import React from "react";
import HeroCSS from "./Hero.module.css";
import exploreProjects from "../../../assets/exploreProjects.png";
import { NavLinkButton } from "../../NavLinkButton";

export const Hero1 = () => {
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
      <div className={HeroCSS.heroLeft}>
          <h2>
            Find <span className={HeroCSS.redText}>real projects</span> based on
            your skills
          </h2>
          <p style={{color:"black"}}>
          Work with clients the way you want, build relationships with partners and elevate yourself to new levels
          </p>
          <div className={HeroCSS.button}>
            <NavLinkButton
              color={"red"}
              path={"/browse-projects"}
              name={"Join Now"}
            />
          </div>
        </div>
          <img src={exploreProjects} alt="" />
      </div>
    </div>
  );
};
