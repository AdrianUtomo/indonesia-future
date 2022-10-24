import React, { useEffect, useState } from "react";
import HeroCSS from "./Hero.module.css";
import { CategoryLinkButton } from "../../../CategoryLinkButton";
import { title, talentLink } from "./TalentLink";
import { AiOutlineDoubleRight } from "react-icons/ai";
export const Hero1 = ({ talent }) => {
  const talents = talentLink;
  const titleCategory = title[talent];
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <div className={HeroCSS.header}>
          <h2>Hire the best {titleCategory}</h2>
          <div className={HeroCSS.categories}>
            <p>Categories </p>
            <AiOutlineDoubleRight className={HeroCSS.doubleArrow} />
            <p>{titleCategory}</p>
          </div>
        </div>
        <div className={HeroCSS.listCategory}>
          {talents[talent].map((item, i) => (
            <CategoryLinkButton name={item.name} key={i} path={'/talent-result'} state={{name:[titleCategory,item.name]}} />
          ))}
        </div>
      </div>
    </div>
  );
};
