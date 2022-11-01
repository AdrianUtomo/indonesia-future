import HeroCSS from "./Hero.module.css";
import React from "react";
import imgProfile from "../../../assets/profile.png";
import imgWave from "../../../assets/wave.png";
import { ProfileCompleteness } from "../../ProfileCompleteness";
import { profileData } from "../../../dummyData/profileData";

export const Hero1 = () => {
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <div className={HeroCSS.info}>
          <img src={imgProfile} className={HeroCSS.image}></img>
        </div>
        <div className={HeroCSS.info}>
          <h1>Good Afternoon!</h1>
          <h1>{JSON.stringify(profileData[0]["name"]).replaceAll("\"", "")}</h1>
          <p>{JSON.stringify(profileData[0]["job_name"]).replaceAll("\"", "")}</p>
        </div>
        <img src={imgWave} className={HeroCSS.info}></img>
        <div className={HeroCSS.completeness}>
          <ProfileCompleteness/>
        </div>
      </div>
      </div>
  );
};
