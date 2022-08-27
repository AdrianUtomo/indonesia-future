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
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
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
