import React from "react";
import HomeCSS from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { Hero1, Hero2, Hero3, Hero4 } from "../../components/Home/index.js";
import { Footer } from "../../components/Footer";
export const Home = () => {
  return (
    <div className={HomeCSS.container}>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Footer />
    </div>
  );
};
