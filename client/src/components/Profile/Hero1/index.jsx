import HeroCSS from "./Hero.module.css";
import React from "react";
import imgProfile from "../../../assets/profile.png";
import { FiEdit3 } from "react-icons/fi"

export const Hero1 = () => {
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <div className={HeroCSS.info}>
          <img src={imgProfile} className={HeroCSS.image}></img>
          <div className={HeroCSS.headline}>
          <h1>Add Headline Title<FiEdit3 className={HeroCSS.icon}/></h1>
          <p>Add Short Bio<FiEdit3 className={HeroCSS.icon}/></p>
        </div>
        </div>
        <div className={HeroCSS.info}>
          <h1>Jane Doe<FiEdit3 className={HeroCSS.icon}/></h1>
          <div className={HeroCSS.detail}>
            <p>Add location<FiEdit3 className={HeroCSS.icon}/></p>
            <p>Add social links<FiEdit3 className={HeroCSS.icon}/></p>
            <p>Add email<FiEdit3 className={HeroCSS.icon}/></p>
            <p>Add contact number<FiEdit3 className={HeroCSS.icon}/></p>
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
