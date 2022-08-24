import React from "react";
import HomeCSS from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
// import { Hero1 } from "../../components/Home/index";
// import { Hero2 } from "../../components/Home/index";
import { Hero1, Hero2, Hero3 } from "../../components/Home/index.js";
export const Home = () => {
  return (
    <div className={HomeCSS.container}>
      <Hero1 />
      <Hero2 />
      <Hero3 />
    </div>
  );
};
