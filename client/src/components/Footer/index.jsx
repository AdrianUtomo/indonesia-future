import FooterCSS from "./Footer.module.css";
import React from "react";
import { fbLogo, igLogo, twitLogo } from "../../assets/sosmed";

export const Footer = () => {
  const sosmed = [
    {
      media: "facebook",
      link: "",
      img: fbLogo,
    },
    {
      media: "twitter",
      link: "",
      img: twitLogo,
    },
    {
      media: "instagram",
      link: "",
      img: igLogo,
    },
  ];
  const cards = [
    {
      header: "For Clients",
      texts: [
        "How to Post Project",
        "Find Talents in Indonesia",
        "Find Talents Worldwide",
      ],
    },
    {
      header: "For Talents",
      texts: [
        "How to Find Project",
        "Find Projects in Indonesia",
        "Find Projects Worldwide",
      ],
    },
    {
      header: "Company",
      texts: ["About Us", "Contanct Us", "Our Works", "Careers"],
    },
  ];
  return (
    <div className={FooterCSS.container}>
      <div className={FooterCSS.hero}>
        <div className={FooterCSS.heroUpper}>
          <div className={FooterCSS.cards}>
            {cards.map((card, i) => (
              <div className={FooterCSS.card} key={i}>
                <h5>{card.header}</h5>
                <div className={FooterCSS.links}>
                  {card.texts.map((text, i) => (
                    <a href="" key={i}>
                      {text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={FooterCSS.sosmed}>
            {sosmed.map((med, i) => (
              <a href="">
                <img src={med.img} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className={FooterCSS.copyRight}>
          <p>
            © 2022 PT. Sagara Teknologi South Jakarta and Bandung, Indonesia.
            Term of Use Privacy and Security Statement
          </p>
        </div>
      </div>
    </div>
  );
};
