import React from "react";
import TRCSS from "./TalentResult.module.css";
import { Hero1 } from "../../../components/BrowseTalents/TalentResult/Hero1";
import { Footer } from "../../../components/Footer";
export const TalentResult = () => {
  return (
    <div className={TRCSS.container}>
      <Hero1/>
      <Footer />
    </div>
  );
};
