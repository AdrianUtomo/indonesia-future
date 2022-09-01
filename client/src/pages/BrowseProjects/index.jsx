import React from "react";
import BTCSS from "./BrowseProjects.module.css";
import { Hero1, Hero3, Hero4 } from "../../components/ExploreProjects/index.js";
import { Footer } from "../../components/Footer";

export const BrowseProjects = () => {
  return (
      <div className={BTCSS.container}>
      <Hero1 />
      <Hero3/>
      <Hero4/>
      <Footer/>
      </div>
  );
};
