import HeroCSS from "./Hero.module.css";
import React from "react";
import imgProfile from "../../../assets/profile.png";
import { FiEdit3 } from "react-icons/fi"
import { profileData } from "../../../dummyData/profileData";
import { ProfileCompleteness } from "../../ProfileCompleteness";
export const Hero1 = () => {
  const details = ["location", "social_links", "email", "contact_number"]
  const career = ["job_name", "short_bio"]
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <div className={HeroCSS.info}>
        <div className={HeroCSS.head}>
            <div className={HeroCSS.imageSection}>
              <img src={imgProfile} className={HeroCSS.image}></img>
              <FiEdit3 className={HeroCSS.editImage}/>
            </div>
            <div className={HeroCSS.info}>
              <div>
                <h1>{JSON.stringify(profileData[0]["name"]).replaceAll("\"", "")}<FiEdit3 className={HeroCSS.icon}/></h1>
              </div>
              <div className={HeroCSS.edit}>
                {
                  details.filter(item=>profileData[0][item]==null).map((item,i) => (
                    <p>Add {item.replaceAll("_"," ")}
                    <a href={`add-${item.replaceAll("_","-")}`}><FiEdit3 className={HeroCSS.icon}/>
                    </a></p>
                  ))
                }
              </div>
            </div>
        </div>
          <div className={HeroCSS.headline}>
            <div className={HeroCSS.edit}>
            <h1>{JSON.stringify(profileData[0]["job_name"]).replaceAll("\"", "")}<FiEdit3 className={HeroCSS.icon}/></h1>
            </div>
            <div className={HeroCSS.edit}>
            {
              career.filter(item=>profileData[0][item]==null).map((item,i) => (
                <p>Add {item.replaceAll("_"," ")}<FiEdit3 className={HeroCSS.icon}/></p>
              ))
            }
            </div>
          </div>
        </div>
        <div>
          <div className={HeroCSS.available}>Available</div>
          <ProfileCompleteness/>
        </div>
      </div>
      </div>
  );
};
