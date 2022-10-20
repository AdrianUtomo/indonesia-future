import React from "react";
import HeroCSS from "./Hero.module.css";
import { SearchBar } from "../../SearchPage/SearchBar";

export const Hero2 = () => {
  return (
    <div className={HeroCSS.container}>
      <SearchBar/>
       <b>Your Recent Searches: <span className={HeroCSS.recentSearch}>UI Designer, designer, front-end</span></b>
    </div>
  );
};
