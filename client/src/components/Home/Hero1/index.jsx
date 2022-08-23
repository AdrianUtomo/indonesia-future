import HeroCSS from "./Hero.module.css";
import React from "react";
import { NavLinkButton } from "../../NavLinkButton";
import logoSagaraWhite from "../../../assets/logo-sagara-white.png";
export const Hero1 = () => {
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <div className={HeroCSS.heroUpper}>
          <h1>Work with The Best</h1>
          <p>
            Find the best talent for your company verified by Sagara Technology
          </p>
        </div>
        <div className={HeroCSS.buttons}>
          <NavLinkButton
            color={"red"}
            path={"/browse-talents"}
            name={"Browse Talents"}
          />
          <NavLinkButton
            color={""}
            path={"/browse-projects"}
            name={"Browse Projects"}
          />
        </div>
        <a
          href="https://sagaratechnology.com/en"
          className={HeroCSS.linkLogoSagara}
        >
          <img
            src={logoSagaraWhite}
            alt="Sagara Technology"
            className={HeroCSS.logoSagara}
          />
        </a>
      </div>
    </div>
  );
};
