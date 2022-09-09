import React from "react";
import HeroCSS from "./Hero.module.css";
import imageHero2 from "../../../assets/imgHero2BrowseTalents.jpg";
import { NavLinkButton } from "../../NavLinkButton";
export const Hero2 = () => {
  const buttons = [
    {
      name: "Development & IT",
      path: "Development&IT",
    },
    {
      name: "Design & Creative",
      path: "Design&Creative",
    },
    {
      name: "Digital Marketing",
      path: "DigitalMarketing",
    },
    {
      name: "Augmented Reality",
      path: "AugmentedReality",
    },
  ];
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <img src={imageHero2} alt="" />
        <div className={HeroCSS.heroRight}>
          <h2>
            Meet and hire
            <br /> the best colleagues
          </h2>
          <p>
            Web Developer, App Developer, Graphic Designer, UI Designer, UX
            Designer, Data Analyst, and many else.
          </p>
          <div className={HeroCSS.button}>
            {buttons.map((button, i) => (
              <NavLinkButton
                key={i}
                color={""}
                path={"category/" + button.path}
                name={button.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
