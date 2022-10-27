import React from "react";
import HeroCSS from "./Hero.module.css";
import { useState } from "react";import { ProjectCard } from "../../ProjectCard";
import { useContext } from "react";
import { ProjectTalentContext } from "../../../context/ProjectTalentContext";
import { LoadButton } from "../../LoadButton";

export const Hero3 = () => {
  const { pData } = useContext(ProjectTalentContext);
  const [categoryProject, setCategoryProject] = useState(true);
  const [data] = useState(pData);
  const [loadMore, setLoadMore] = useState(false);

  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <div className={HeroCSS.mainContext}>
        <div className={HeroCSS.title}>Project you might be looking for</div>
          <div className={HeroCSS.mainBar}>
            <div className={HeroCSS.categories}>
              <button
                onClick={() => setCategoryProject(true)}
                className={
                  categoryProject
                    ? `${HeroCSS.category} ${HeroCSS.categoryUsed}`
                    : HeroCSS.category
                }
              >
                <p>Most Relevant</p>
              </button>
              <button
                onClick={() => setCategoryProject(false)}
                className={
                  !categoryProject
                    ? `${HeroCSS.category} ${HeroCSS.categoryUsed}`
                    : HeroCSS.category
                }
              >
                <p>Recently Saved Project</p>
              </button>
            </div>
            <div className={HeroCSS.cards}>
              { loadMore ? (
                data.map((data, i) => (
                  <ProjectCard data={data} isLoggedIn={true} key={i} />
                ))) : (
                  data.slice(0,5).map((data, i) => (
                    <ProjectCard data={data} isLoggedIn={true} key={i} />
                  ))
                )
              }
            </div>
            <div className={HeroCSS.bottomBar}>
            { loadMore ? (<div></div>) : (
            <LoadButton
              color={"red"}
              func={setLoadMore}
              name={"Browse More"}
            /> )
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
