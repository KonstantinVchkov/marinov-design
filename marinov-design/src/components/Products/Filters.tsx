import React, { useState } from "react";
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
  currentSearch?: string;
  onFilterSelect: (value: string) => void;
  onSearchFilter?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Filters = ({
  onFilterSelect,
  onSearchFilter,
  currentSearch,
}: IFilters) => {
  const [searchProduct, setSearchProduct] = useState("");

  const handleFilter = (value: string) => {
    onFilterSelect(value);
  };
  const handleSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchProduct(searchValue);
  
    // Only trigger search when the searchValue length is greater than or equal to 3
    if (searchValue.length >= 4) {
      router.push(`/jewelry?category=${encodeURIComponent(searchValue)}`);
    } else if (searchValue.length === 0) {
      // If the search box is cleared, reset the search
      router.push('/jewelry');
    }
  };
  return (
    <>
      <div className={style.Filters}>
        <ul>
          {FilterArr.map((filterName) => (
            <li key={filterName} onClick={() => handleFilter(filterName)}>
              {filterName}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.initialSearching}>
        <div className={style.inputSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchProduct}
            onChange={handleSearchFilter}
          />
        </div>
        <div className={style.SelectOption}>
          <select name="" id="">
            <option value="Feautured">
              Sort:Feautured
            </option>
            <option value="New" >
              New
            </option>
            <option value="Old" >
              Old
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filters;
