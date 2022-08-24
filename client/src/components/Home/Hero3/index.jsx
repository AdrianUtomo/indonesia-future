import React from "react";
import { NavLinkButton } from "../../NavLinkButton";
import HeroCSS from "./Hero.module.css";
import { FiArrowRight } from "react-icons/fi";
export const Hero3 = () => {
  const skills = ["Development & T1", "Design & Creative", "Digital Marketing"];
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
            <div className={HeroCSS.bgBlackSkill} key={i}>
              <div className={HeroCSS.bgRedSkill}>
                <div className={HeroCSS.skill}>
                  <h4>{skill}</h4>
                  <div className={HeroCSS.bgArrow}>
                    <FiArrowRight className={HeroCSS.arrowRight} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
