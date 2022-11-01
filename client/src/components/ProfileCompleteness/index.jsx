import React from "react";
import { FiArrowRight } from "react-icons/fi"
import PCSS from "./ProfileCompleteness.module.css";
import { NavLink } from "react-router-dom";

export const ProfileCompleteness = () => {
    return (
        <div className={PCSS.completeness}>
        <div className={PCSS.header}>
          <h1>16% Profile Completeness</h1>
          <div className={PCSS.box}></div>
        </div>
        <div className={PCSS.add}>
            <div>
                <p>Add your location to highlight where you're from (+8%)</p>
                <NavLink to={"/add-location"} className={PCSS.link}>Add location</NavLink>
            </div>
            <div>
                <FiArrowRight className={PCSS.arrowIcon}/>
            </div>
        </div>
      </div>
    )
};
