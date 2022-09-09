import { projectData } from "../dummyData/projectData";
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
  const [data, setData] = useState(projectData);
  const resetData = () => {
    setData(projectData);
  };
  const plainData = () => {
    return projectData;
  };
  return (
    <ProjectTalentContext.Provider
      value={{ data, query, setQuery, resetData, setData, plainData }}
    >
      {children}
    </ProjectTalentContext.Provider>
  );
}
