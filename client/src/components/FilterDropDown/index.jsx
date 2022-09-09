import React, { useContext, useEffect } from "react";
import FDDCSS from "./FilterDropDown.module.css";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import moment from "moment";
import { ProjectTalentContext } from "../../context/ProjectTalentContext";
export const FilterDropDown = ({
  KategoriFilter,
  checkBoxType,
}) => {
  const checkBoxs = [
    {
      id: 1,
      name: "Less than 1 Month",
      value: "1",
      checked: false,
    },
    {
      id: 2,
      name: "1 to 3 Months",
      value: "2",
      checked: false,
    },
    {
      id: 3,
      name: "3 to 6 Months",
      value: "3",
      checked: false,
    },
    {
      id: 4,
      name: "More than 6 Months",
      value: "4",
      checked: false,
    },
  ];
  const ProjecTalentC = useContext(ProjectTalentContext);
  const [isActive, setIsActive] = useState(true);
  const [query, setQuery] = useState(checkBoxs);
  const handleClick = (e, index) => {
    setQuery(
      query.map((item, i) => {
        return item.id === index
          ? { ...item, checked: e.target.checked }
          : item;
      })
    );
  };
  useEffect(() => {
    let tmpS = query.map((item, i) => (item.checked ? (i + 1).toString() : ""));
    tmpS = tmpS.join("C");
    ProjecTalentC.setQuery(
      ProjecTalentC.query.map((item) =>
        !item.key.localeCompare("c") ? { ...item, query: tmpS } : item
      )
    );
  }, [query]);
  return (
    <div
      className={
        checkBoxType
          ? FDDCSS.container
          : `${FDDCSS.container} ${FDDCSS.underline}`
      }
    >
      <button
        className={FDDCSS.filterButton}
        onClick={() => setIsActive(!isActive)}
      >
        <p>{KategoriFilter}</p>
        <BiChevronDown
          className={
            isActive
              ? `${FDDCSS.arrowDown} ${FDDCSS.isActive}`
              : FDDCSS.arrowDown
          }
        />
      </button>
      <div
        className={
          isActive ? `${FDDCSS.contex} ${FDDCSS.contexDrop}` : FDDCSS.contex
        }
      >
        {checkBoxType ? (
          <div className={FDDCSS.containerCheckBox}>
            <form>
              {checkBoxs.map((box, i) => (
                <div
                  className={FDDCSS.inputCheckBox}
                  onClick={(e) => handleClick(e, i + 1)}
                  key={i}
                >
                  <input
                    type="checkbox"
                    name={box.name}
                    id={i}
                    value={box.value}
                  />
                  <label for={i}>{box.name}</label>
                </div>
              ))}
            </form>
          </div>
        ) : (
          <div className={FDDCSS.containerInput}>
            <form>
              <input type="text" placeholder={`Search ${KategoriFilter}`} />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
