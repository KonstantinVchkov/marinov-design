import React from "react";
import style from "./style.module.css";
import router from "next/router";

const FilterArr = [
  "All items",
  "Earrings",
  "Rings",
  "Necklaces",
  "Bracelets",
  "Sets",
  "Other",
];
interface IFilters {
  onFilterSelect: (value: string) => void;
}
const Filters = ({ onFilterSelect }:IFilters) => {
  const handleFilter = (value: string) => {
    onFilterSelect(value); // Call the callback with the selected filter
  };
  return (
    <div className={style.Filters}>
      <ul>
        {FilterArr.map((filterName) => (
          <li key={filterName} onClick={() => handleFilter(filterName)}>
            {filterName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
