import React from "react";
import { NavLinkButton } from "../../NavLinkButton";
import HeroCSS from "./Hero.module.css";
import { FiArrowRight } from "react-icons/fi";
import { CategoryLinkButton } from "../../CategoryLinkButton";
export const Hero3 = () => {
  const skills = [
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
  ];
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <div className={HeroCSS.heroLeft}>
          <h2>
            We provide
            <br />
            <span className={HeroCSS.redText}> best tech talent</span>
            <br />
            for you company
          </h2>
          <p>
            Find technology talent that suits your company's needs, we provide
            various skills for your company's project needs
          </p>
          <NavLinkButton
            color={"red"}
            path={"/browse-talents"}
            name={"Browse Talents"}
          />
        </div>
        <div className={HeroCSS.heroRight}>
          {skills.map((skill, i) => (
            <CategoryLinkButton
              name={skill.name} key={i}
              path={"/browse-talents/category/" + skill.path}
              state={{name:""}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
