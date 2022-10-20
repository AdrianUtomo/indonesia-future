import HeroCSS from "./Hero.module.css";
import React from "react";
import imgProfile from "../../../assets/profile.png";
import { FiEdit3, FiArrowRight } from "react-icons/fi"
import { profileData } from "../../../dummyData/profileData";
export const Hero1 = () => {
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <div className={HeroCSS.info}>
        <div className={HeroCSS.edit}>
            <div>
              <img src={imgProfile} className={HeroCSS.image}></img>
            </div>
            <div className={HeroCSS.info}>
              <div>
                <h1>{JSON.stringify(profileData[0]["name"]).replaceAll("\"", "")}<FiEdit3 className={HeroCSS.icon}/></h1>
              </div>
              <div className={HeroCSS.info}>
                  <p>Add location<FiEdit3 className={HeroCSS.icon}/></p>
                  <p>Add social links<FiEdit3 className={HeroCSS.icon}/></p>
                  <p>Add email<FiEdit3 className={HeroCSS.icon}/></p>
                  <p>Add contact number<FiEdit3 className={HeroCSS.icon}/></p>
              </div>
            </div>
        </div>
          <div className={HeroCSS.headline}>
            <div className={HeroCSS.edit}>
            <h1>Senior UI/UX Designer<FiEdit3 className={HeroCSS.icon}/></h1>
            </div>
            <div className={HeroCSS.edit}>
            <p>Add Short Bio<FiEdit3 className={HeroCSS.icon}/></p>
            </div>
          </div>
        </div>
        <div>
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
