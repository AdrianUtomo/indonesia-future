import { projectData } from "../dummyData/projectData";
import { talentData } from "../dummyData/talentData";
import React, { useContext, useState, createContext } from "react";
export const ProjectTalentContext = createContext({});

export function ProjectTalentProvider({ children }) {
  const templateQuery = [
    {
      key: "q",
      query: "",
    },
    {
      key: "c",
      query: "",
    },
  ];
  const [query, setQuery] = useState(templateQuery);
  const [pData, setpData] = useState(projectData);
  const [tData, settData] = useState(talentData);
  const resetpData = () => {
    setpData(projectData);
  };
  const plainpData = () => {
    return projectData;
  };
  const resettData = () => {
    setpData(talentData);
  };
  const plaintData = () => {
    return talentData;
  };
  return (
    <ProjectTalentContext.Provider
      value={{ pData, tData, query, setQuery, resetpData, setpData, plainpData, settData, plaintData }}
    >
      {children}
    </ProjectTalentContext.Provider>
  );
}
