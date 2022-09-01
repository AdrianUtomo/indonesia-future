import React from "react";
import SBCSS from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
export const SearchBar = () => {
  return (
    <div className={SBCSS.container}>
      <form>
        <button>
          <AiOutlineSearch />
        </button>
        <input type="text" id="search" placeholder="Search" />
      </form>
    </div>
  );
};
