import React from "react";
import { CategoryLinkButton } from "../../../CategoryLinkButton";
import HeroCSS from "./Hero.module.css";
const Hero1 = () => {
  const category = [
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
        <div className={HeroCSS.header}>
          <h2>Looking for talent?</h2>
          <p>Choose category you needed</p>
        </div>
        <div className={HeroCSS.listCategory}>
          {category.map((item, i) => (
            <CategoryLinkButton name={item.name} key={i} path={item.path} state={{name:""}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero1;
