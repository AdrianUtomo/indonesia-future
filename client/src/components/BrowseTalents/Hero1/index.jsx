import React from "react";
import HeroCSS from "./Hero.module.css";
import imgHero from "../../../assets/imgHero1BrowseTalents.jpg";
import { NavLinkButton } from "../../NavLinkButton";

export const Hero1 = () => {
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <div className={HeroCSS.heroLeft}>
          <h2>
            We provide
            <br /> <span className={HeroCSS.redText}>
              best tech talent
            </span>{" "}
            <br />
            for your company
          </h2>
          <p style={{ color: "black" }}>
            Find technology talent that suits your company's needs, we provide
            various skills for your company's project needs
          </p>
          <div className={HeroCSS.button}>
            <NavLinkButton
              color={"red"}
              path={"/browse-talents/category"}
              name={"Browse Talent"}
            />
          </div>
        </div>
        <img src={imgHero} alt="" />
      </div>
    </div>
  );
};
