import React from "react";
import DashboardCSS from "./Dashboard.module.css";
import { Hero1, Hero2, Hero3 } from "../../components/Dashboard/index.js";
import { Footer } from "../../components/Footer";
export const Dashboard = () => {
  return (
    <div className={DashboardCSS.container}>
      <div className={DashboardCSS.header}>
      <Hero1 />
      </div>
      <Hero2/>
      <Hero3/>
      <Footer />
    </div>
  );
};
