import React from "react";
import style from "./style.module.css";
import ScrollBar from "../Scroll/ScrollBar";
import FirstSection from "./FirstSection";
const HomePage = () => {
  return (
    <div className={style.HomePageComponent}>
      <FirstSection />
      <ScrollBar />
    </div>
  );
};

export default HomePage;
