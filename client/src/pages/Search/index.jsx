import React from "react";
import { Hero1 } from "../../components/SearchPage/Hero1";
import SCSS from "./Search.module.css";
import { Footer } from "../../components/Footer";
export const SearchPage = () => {
  return (
    <div className={SCSS.container}>
      <Hero1 />
      <Footer />
    </div>
  );
};
