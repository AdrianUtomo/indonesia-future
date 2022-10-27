import React from "react";
import SBCSS from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { ProjectTalentContext } from "../../../context/ProjectTalentContext";
import { useLocation } from "react-router-dom";

export const SearchBar = () => {
  const ProjectTalentC = useContext(ProjectTalentContext);
  const location = useLocation();
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    ProjectTalentC.setQuery(
      ProjectTalentC.query.map((item) =>
        !item.key.localeCompare("q") ? { ...item, query } : item
      )
    );
    setQuery("");
  };
  return (
    <div className={SBCSS.container}>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          type="text"
          id="search"
          placeholder="Search by project title, talent name, or skill"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
};
