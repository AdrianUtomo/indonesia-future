import React from "react";
import { SearchBar } from "../SearchBar";
import HeroCSS from "./Hero.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FilterDropDown } from "../../FilterDropDown";
import { useState } from "react";
import { Select } from "@chakra-ui/react";
import { ProjectCard } from "../../ProjectCard";
import { TalentCard } from "../../TalentCard";
import { projectData } from "../../../dummyData/projectData";
import { talentData } from "../../../dummyData/talentData";
import { useContext } from "react";
import { ProjectTalentContext } from "../../../context/ProjectTalentContext";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Pagination } from "../../Pagination";
export const Hero1 = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categoryProject, setCategoryProject] = useState(true);
  const { pData, tData, query, plainpData, plaintData } = useContext(ProjectTalentContext);
  const [ currPData, setProjectData] = useState(pData);
  const [ currTData , setTalentData] = useState(tData);
  const q = searchParams.get("q") || "";
  const c = searchParams.get("c") || "";
  const cSplitted = c.split("C");
  console.log(cSplitted);
  const listPage = [1, 2, 3, 4, 5];
  const filterDataCheckBox = (data) => {
    var option;
    if(categoryProject) {
      option = [
        "Less than 1 Month",
        "1 to 3 Months",
        "3 to 6 Months",
        "More than 6 Months",
      ];
    data = data.filter(
      (item) =>
        !item.duration.localeCompare(cSplitted[0] ? option[0] : "") ||
        !item.duration.localeCompare(cSplitted[1] ? option[1] : "") ||
        !item.duration.localeCompare(cSplitted[2] ? option[2] : "") ||
        !item.duration.localeCompare(cSplitted[3] ? option[3] : "")
    );
    return data;
    } else {
    data = data.filter(
      (item) =>
        item.rating >= (cSplitted[2] ? (cSplitted[1] ? 4.5 : 4) : (cSplitted[1] ? 4.5 : 0))
    );
    return data;
    }
  };
  const filterData = () => {
    var tmpData, tmpFilteredData;
    tmpData = categoryProject ? plainpData() : plaintData();
    tmpFilteredData = categoryProject? plainpData() : plaintData();
    const keys = ["title", "talent"];
    if (q.localeCompare("")) {
      tmpFilteredData = tmpData.filter(
        (item) =>
          keys.some((key) =>
            item[key].toLowerCase().includes(q.toLowerCase())
          ) || item.skills.includes(q)
      );
      if (c.localeCompare("CCC")) {
        tmpFilteredData = filterDataCheckBox(tmpFilteredData);
      }
      categoryProject ? setProjectData(tmpFilteredData) : setTalentData(tmpFilteredData);
    } else {
      if (c.localeCompare("CCC")) {
        tmpFilteredData = filterDataCheckBox(tmpFilteredData);
        categoryProject ? setProjectData(tmpFilteredData) : setTalentData(tmpFilteredData);
      } else {
        categoryProject ? setProjectData(projectData) : setTalentData(talentData);
      }
    }  };
  useEffect(() => {
    setSearchParams({ q: query[0].query, c: query[1].query });
  }, [query]);
  useEffect(() => {
    filterData();
  }, [q, c]);
  return (
    <div className={HeroCSS.container}>
      <div className={HeroCSS.hero}>
        <SearchBar />
        <div className={HeroCSS.mainContext}>
          <div className={HeroCSS.sideBar}>
            <h5>Filter By</h5>
            <div className={HeroCSS.filters}>
              <FilterDropDown KategoriFilter={"Location"} />
              <FilterDropDown KategoriFilter={"Category"} />
              { categoryProject ? (
              <FilterDropDown
                KategoriFilter={"Project Duration"}
                checkBoxType={true}
              />): 

              (<FilterDropDown
              KategoriFilter={"Rating"}
              checkBoxType={true}
              />)
              
              }
            </div>
          </div>
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
                <p>Project</p>
              </button>
              <button
                onClick={() => setCategoryProject(false)}
                className={
                  !categoryProject
                    ? `${HeroCSS.category} ${HeroCSS.categoryUsed}`
                    : HeroCSS.category
                }
              >
                <p>Talent</p>
              </button>
            </div>
            {categoryProject && (
              <div className={HeroCSS.sortBy}>
                <p>Sort by</p>
                <div className={HeroCSS.select}>
                  <Select placeholder="Newest" variant="outline" size={"xs"}>
                    <option value={"Oldest"}>Oldest</option>
                  </Select>
                </div>
              </div>
            )}
            <div className={HeroCSS.cards}>
              { categoryProject ? (
                !currPData.length ? (
                  <>No data</>
                ) : 
                <>
                  {currPData.map((data, i) => (
                    <ProjectCard data={data} isLoggedIn={false} key={i} />
                  ))}
                </>
              ) : (
                !currTData.length ? (
                  <>No data</>
                ) : 
                <>
                    {currTData.map((data, i) => (
                    <TalentCard data={data} browseCategory={false} key={i} />
                  ))}
                </>
              )}
            </div>
            <div className={HeroCSS.bottomBar}>
              <div className={HeroCSS.dataPerPage}>
                <p>Data Per Page</p>
                <div className={HeroCSS.select}>
                  <Select placeholder="10" size={"xs"}>
                    <option value={"30"}>30</option>
                  </Select>
                </div>
              </div>
              <div className={HeroCSS.changePage}>
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
