import React from "react";
import { Hero1, Hero2, Hero3 } from "../../components/BrowseTalents";
import BTCSS from "./BrowseTalents.module.css";
import { Footer } from "../../components/Footer";
export const BrowseTalents = () => {
  return (
      <div className={BTCSS.container}>
        <Hero1/>
        <Hero2/>
        <Hero3/>
        <Footer/>
      </div>
  );
};
