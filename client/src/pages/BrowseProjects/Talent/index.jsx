import React from "react";
import TCSS from "./Talent.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Hero1 } from "../../../components/BrowseTalents/Talent/Hero1";
import { Footer } from "../../../components/Footer";
export const Talents = () => {
  const params = useParams();
  const talentCategory = params.talent;
  const strictLink = [
    "Development&IT",
    "Design&Creative",
    "DigitalMarketing",
    "AugmentedReality",
  ];
  const linkInclude = strictLink.includes(talentCategory);
  let navigate = useNavigate();
  const routeToNotFound = () => {
    if (!linkInclude) {
      navigate("/NotFound");
    }
  };
  useEffect(() => {
    routeToNotFound();
  }, []);
  return (
    <div className={TCSS.container}>
      <Hero1 talent={talentCategory} />
      <Footer/>
    </div>
  );
};
