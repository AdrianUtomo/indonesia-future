import React from "react";
import SBCSS from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectTalentContext } from "../../context/ProjectTalentContext";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const ProjectTalentC = useContext(ProjectTalentContext);
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    ProjectTalentC.setQuery(
      ProjectTalentC.query.map((item) =>
        !item.key.localeCompare("q") ? { ...item, query } : item
      )
    );
    setQuery("");
    navigate("/search/1", 
      {state:{query}}
    )
  };
  return (
    <div className={SBCSS.container}>
      <form onSubmit={handleSubmit}>
        <button>
          <AiOutlineSearch />
        </button>
        <input
          value={query}
          type="text"
          id="search"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />      
        </form>
    </div>
  );
};
