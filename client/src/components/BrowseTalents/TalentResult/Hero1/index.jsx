import React, { useEffect } from "react";
import HeroCSS from "./Hero.module.css";
import { TalentCard } from "../../../TalentCard";
import { useState } from "react";
import { useContext } from "react";
import { ProjectTalentContext } from "../../../../context/ProjectTalentContext";


export const Hero1 = ({ }) => {
  const { tData } = useContext(ProjectTalentContext);
  const [data] = useState(tData);
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
      <div>
          {data.map((data, i) => (
            <TalentCard data={data} key={i} />
          ))}
      </div>
      </div>
    </div>
  );
};
