import HeroCSS from "./Hero.module.css";
import React from "react";
import imgProfile from "../../../assets/profile.png";
import imgWave from "../../../assets/wave.png";
import { FiEdit3, FiArrowRight } from "react-icons/fi"

export const Hero1 = () => {
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <div className={HeroCSS.info}>
          <img src={imgProfile} className={HeroCSS.image}></img>
        </div>
        <div className={HeroCSS.info}>
          <h1>Good Afternoon!</h1>
          <h1>Jane Doe</h1>
          <p>Senior UI/UX Designer</p>
        </div>
        <img src={imgWave} className={HeroCSS.info}></img>
        <div className={HeroCSS.right}>
        <div className={HeroCSS.available}>Available</div>
        <div className={HeroCSS.completeness}>
          <div className={HeroCSS.header}>
          <h1>16% Profile Completeness</h1>
          <div className={HeroCSS.box}></div>
          </div>
          <div className={HeroCSS.add}>
          <p>Add your location to highlight where you're from (+8%)<br></br>
          Add location</p>
          <FiArrowRight className={HeroCSS.arrowIcon}/>
          </div>
        </div>
        </div>
      </div>
      </div>
  );
};
