import React from "react";
import HeroCSS from "./Hero.module.css";
export const Hero3 = () => {
  return (
    <div className={HeroCSS.container}>
      <div>
      Projects you might be looking for
      </div>
      <div className={HeroCSS.tabs}>
        <div className={HeroCSS.tab}>Most relevant</div>
        <div className={HeroCSS.tab}>Recently</div>
        <div className={HeroCSS.tab}>Saved Project</div>
      </div>
      <div>
      UI/UX Designer for E-Commerce Website
      </div>
      <div className={HeroCSS.tab}>
        <div>Creative &amp; Design</div>
        <div>1 to 3 months</div>
        <div>Remote-On-Site/Jakarta, Indonesia</div>
      </div>
      <div>
      Designing for an e-commerce website for a company, have to work directly to the project manager, you need some skills and some requirements for this project.
      </div>
      <div className={HeroCSS.buttons}>You must have:</div>
      <button>UI Design</button>
      <button>Figma</button>
      <button>Web Design</button>
      <button>UI/UX Design</button>
      <div>Number of Applicants: 0 to 5</div>
      <div>Client Verified</div>
    </div>
  );
};
