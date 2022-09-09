import HeroCSS from "./Hero.module.css";
import React from "react";
import imgProfile from "../../../assets/profile.png";


export const Hero1 = () => {
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <div className={HeroCSS.info}>
          <img src={imgProfile} className={HeroCSS.image}></img>
          <div className={HeroCSS.info}>
          <h1>Good Afternoon!</h1>
          <h1>Jane Doe</h1>
          <div className={HeroCSS.detail}>
            <p>Senior UI/UX Designer</p>
          </div>
          </div>
        </div>
        <div className={HeroCSS.right}>
        <div className={HeroCSS.available}>Available</div>
        <div className={HeroCSS.completeness}>
          <div className={HeroCSS.header}>
          <h1>16% Profile Completeness</h1>
          <div className={HeroCSS.box}></div>
          </div>
          <div className={HeroCSS.addPercentage}>
          <p>Add your location to highlight where you're from (+8%)</p>
          <p>Add location</p>
          </div>
        </div>
        </div>
      </div>
      </div>
  );
};
