import React from "react";
import style from "./style.module.css";
import ButtonComp from "../ButtonComponent/Button";
import router from "next/router";
import dynamic from 'next/dynamic';
import beeAnimation from '../../../public/images/json-animations/bee_animation.json'
const LottieAnimation = dynamic(() => import('./LottieAnimation'), { ssr: false });

const FirstSection = () => {
  const handleRoute = (value: string) => {
    router.push(`/${value}`);
  };
  return (
    <div className={style.FirstSection}>
      <div className={style.hero_jewelry}>
        <div className={style.text}>
          <h2>Unique Handcrafted Jewelry</h2>
          <ButtonComp
            text={"Shop now"}
            handleRoute={() => {
              handleRoute("jewelry");
            }}
          />
          <div className="animation">
            <LottieAnimation animationData={beeAnimation} />
          </div>
        </div>
      </div>
      <div className={style.hero_custom}>
        <div className={style.text}>
          <h2>Custom Made Orders</h2>
          <ButtonComp
            text={"Order now"}
            handleRoute={() => {
              handleRoute("customorders");
            }}
          />
        </div>
      </div>
      <div className={style.hero_decor}>
        <div className={style.text}>
          <h2>Exceptional Home Decor</h2>
          <ButtonComp
            text={"Discover"}
            handleRoute={() => {
              handleRoute("homedecor");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
