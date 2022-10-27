import React from "react";
import PCSS from "./ProjectCard.module.css";
import moment from "moment";
import parse from "html-react-parser";
import { HiOutlineClock } from "react-icons/hi";
import verified  from "../../assets/verified.png"
import bookmark  from "../../assets/star_white.png"

import { SkillTag } from "../SkillTag";
export const ProjectCard = ({ data, isLoggedIn }) => {
  const {
    title,
    postedDate,
    talent,
    duration,
    workRemote,
    location,
    description,
    skills,
    numberOfApplicants,
    clientVerified,
  } = data;
  moment.relativeTimeThreshold("ss", 0);
  return (
    <div className={PCSS.card}>
      <div className={PCSS.header}>
        <h5>{title}</h5>
        <div className={PCSS.displayTime}>
          {isLoggedIn? <img src={bookmark}></img> : <div></div>}
          <HiOutlineClock className={PCSS.icon} />
          <p>{moment(postedDate).fromNow()}</p>
        </div>
      </div>
      <div className={PCSS.detail}>
        <p>{talent}</p> <span className={PCSS.dot}>•</span>
        <p>{duration}</p>
        <span className={PCSS.dot}>•</span>
        <p>{`${workRemote}/${location}`}</p>
      </div>
      <div className={PCSS.description}>
        <div className={PCSS.contex}>{parse(description)}</div>
      </div>
      <div className={`${PCSS.displayTime} ${PCSS.mobileDisplay}`}>
        <HiOutlineClock className={PCSS.icon} />
        <p>{moment(postedDate).fromNow()}</p>
      </div>
      <div className={PCSS.skills}>
        {skills.map((skill, i) => (
          <SkillTag skill={skill} key={i} />
        ))}
      </div>
      {isLoggedIn? <div>Number of Applicants: <b>{numberOfApplicants}</b>
      <div>{clientVerified? <div className={PCSS.verified}><img src={verified}></img><p>Client Verified</p></div>: <div></div>}</div>
        </div> 
        : <div></div>
      }
    </div>
  );
};
