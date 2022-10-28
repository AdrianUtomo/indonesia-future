import React from "react";
import HeroCSS from "./Hero.module.css";
import { NavLink } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";

export const Hero2 = ({ title, content, link }) => {
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <div className={HeroCSS.title}>{title}
          <FiPlusCircle className={HeroCSS.icon}/>
        </div>
        <div className={HeroCSS.content}>
          <p>{content}</p>
          <NavLink to={link.replaceAll(" ","-")} className={HeroCSS.link}>{link}</NavLink>
        </div>
      </div>
    </div>
  );
};
