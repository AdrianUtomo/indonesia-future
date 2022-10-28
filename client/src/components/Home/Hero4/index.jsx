import HeroCSS from "./Hero.module.css";
import React, { useEffect, useRef } from "react";
import handShake from "../../../assets/handShake.png";
import star from "../../../assets/star.png";
import timeWithEnergy from "../../../assets/timeWithEnergy.png";
// import Slider from "react-slick";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { SliderHome } from "./Slider";
export const Hero4 = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef.current);
  }, []);
  const items = [
    {
      img: timeWithEnergy,
      text: "A quick way to find the most suitable talents for your tech projects based on their skills and ratings.",
    },
    {
      img: handShake,
      text: "Work with various clients who need your skills to boost your freelance career or business.",
    },
    {
      img: star,
      text: "Prove the quality of tech talent easily by checking their profiles, portfolios, work samples and reviews",
    },
  ];
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <div className={HeroCSS.heroUpper}>
          <h2>Why us?</h2>
          <div className={HeroCSS.items}>
            {items.map((item, i) => (
              <div className={HeroCSS.item} key={i}>
                <img src={item.img} alt="" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={HeroCSS.partners}>
          <h2>Our Last Partners</h2>
          <SliderHome />
        </div>
      </div>
    </div>
  );
};
