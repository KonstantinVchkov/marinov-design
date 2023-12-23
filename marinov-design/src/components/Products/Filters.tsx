import React from "react";
import style from "./style.module.css";

const FilterArr = ["Earrings", "Rings", "Necklaces", "Bracelets", "Sets", 'Other'];

const Filters = () => {
  return (
    <div className={style.Filters}>
      <ul>
        {FilterArr.map(filterName => (
          <li key={filterName}>{filterName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
