import React from "react";
import Hero1 from "../../../components/BrowseTalents/Category/Hero1";
import { Footer } from "../../../components/Footer";
import CTGCSS from "./Category.module.css";
export const Category = () => {
  return <div className={CTGCSS.container}>
    <Hero1/>
    <Footer/>
  </div>;
};
