import React, { useContext, useState } from "react";
import HeroCSS from "./Hero.module.css";
import { TalentCard } from "../../../TalentCard";
import { useLocation } from "react-router-dom"
import { ProjectTalentContext } from "../../../../context/ProjectTalentContext";
import { AiOutlineDoubleRight } from "react-icons/ai";

export const Hero1 = ({ talent }) => {
  const { tData } = useContext(ProjectTalentContext);
  const [data] = useState(tData);
  const location = useLocation();
  console.log(location);
  const state = location.state;
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <div className={HeroCSS.header}>
        <h2>Hire the best {state[1]}</h2>
        <div className={HeroCSS.categories}>
          <p>Categories</p>
          {state.map((category,i) => (
            <div className={HeroCSS.categories}>
            <AiOutlineDoubleRight className={HeroCSS.doubleArrow} />
            <p>{category}</p>
            </div>
          ))}
          </div>
        </div>
      <div>
          {data.map((data, i) => (
            <TalentCard data={data} key={i} browseCategory={true} />
          ))}
      </div>
      </div>
    </div>
  );
};
