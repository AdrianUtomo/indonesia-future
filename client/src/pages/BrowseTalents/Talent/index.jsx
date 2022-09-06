import React from "react";
import TCSS from "./Talent.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Hero1 } from "../../../components/BrowseTalents/Talent/Hero1";
import { Footer } from "../../../components/Footer";
export const Talents = () => {
  const params = useParams();
  let talentCategory = params.talent;
  const strictLink = [
    "Development&IT",
    "Design&Creative",
    "DigitalMarketing",
    "AugmentedReality",
  ];
  const linkInclude = strictLink.includes(talentCategory);
  let navigate = useNavigate();
  if (!linkInclude) {
    talentCategory = "Development&IT";
  }
  useEffect(() => {
    if (!linkInclude) {
      const nav = () => {
        navigate("/NotFound");
      };
      nav();
    }
  }, []);
  return (
    <div className={TCSS.container}>
      <Hero1 talent={talentCategory} />
      <Footer />
    </div>
  );
};
