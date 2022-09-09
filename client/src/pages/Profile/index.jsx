import React from "react";
import ProfileCSS from "./Profile.module.css";
import { Hero1, Hero2 } from "../../components/Profile/index.js";
import { Footer } from "../../components/Footer";
export const Profile = () => {
  return (
    <div className={ProfileCSS.container}>
      <div className={ProfileCSS.header}>
        <Hero1 />
      </div>
      <div className={ProfileCSS.detail}>
      <div className={ProfileCSS.content}>
        <Hero2 title="Resume"
                content="Add your resume to describe who you are to the clients"
                link="Add resume"
        />
        <Hero2 title="Skills"
                content="Show your skills to help you find the projects you want"
                link="Add skills"
        />
        </div>
        <div className={ProfileCSS.content}>
        <Hero2 title="Porfolio"
                content="Show off your skills and work to gain more projects"
                link="Add portfolio"
        />
        <Hero2 title="Work History"
                content="Add work history to showcase your recent work to clients"
                link="Add work history"
        />  
        </div>
      </div>  
      <Footer />
    </div>
  );
};
