import React, { useEffect, useRef } from "react";
import SliderCSS from "./Slider.module.css";
import Slider from "react-slick";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import {
  BRILogo,
  EdukasiLogo,
  KementrianKesehatanLogo,
  RuangGuruLogo,
  TelkomLogo,
} from "../../../../assets/sponsors";
export const SliderHome = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef.current);
  }, []);
  const sponsorsLogo = [
    BRILogo,
    EdukasiLogo,
    KementrianKesehatanLogo,
    RuangGuruLogo,
    TelkomLogo,
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={SliderCSS.container}>
      <button
        className={SliderCSS.buttonContainer}
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FiArrowLeft className={SliderCSS.icon} />
      </button>
      <Slider {...settings} ref={sliderRef} className={SliderCSS.slider}>
        {sponsorsLogo.map((logo, i) => (
          <div>
            <img src={logo} alt="" key={i} />
          </div>
        ))}
      </Slider>
      <button
        className={`${SliderCSS.buttonContainer} ${SliderCSS.right}`}
        onClick={() => sliderRef.current.slickNext()}
      >
        <FiArrowRight className={SliderCSS.icon} />
      </button>
    </div>
  );
};
