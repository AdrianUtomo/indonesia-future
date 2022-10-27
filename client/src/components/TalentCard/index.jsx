import React from "react";
import TCSS from "./TalentCard.module.css";
import parse from "html-react-parser";
import { SkillTag } from "../SkillTag";
import star from "../../assets/redstar.png"
import bookmark from "../../assets/star_white.png"
import { NavLinkButton } from "../NavLinkButton";
import image from "../../assets/avatar/michael.png"

export const TalentCard = ({ data, browseCategory }) => {
  const {
    title,
    talent,
    location,
    rating,
    projectAmount,
    description,
    skills,
  } = data;
  return (
    <div className={TCSS.card}>
      <div className={TCSS.header}>
        <img src={image}></img>
        <div className={TCSS.identity}>
          <h5>{title}</h5>
          <h4>{talent}</h4>
          <div className={TCSS.detail}>
          <p>{location}</p>
          <span><img src={star}></img></span><p className={TCSS.rating}>{rating}/5</p>
          <p>({projectAmount} projects)</p>
          </div>
        </div>
        <div>
          <img src={bookmark}></img>
        </div>
      </div>
      <div className={TCSS.description}>
        <div className={TCSS.context}>{parse(description)}</div>
        {browseCategory ?
        <div className={TCSS.container}>
          <NavLinkButton
              color={"red"}
              path={"/see-more"}
              name={"See More"}
            />
        </div> : <div></div>
        }
      </div>
      <h1>Skills</h1>
      <div className={TCSS.skills}>
        {skills.map((skill, i) => (
          <SkillTag skill={skill} key={i} />
        ))}
      </div>
    </div>
  );
};
