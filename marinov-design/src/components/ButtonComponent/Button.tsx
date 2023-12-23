import React from "react";
import style from "./style.module.css";

interface IButton {
  text: string;
  route?: string;
  handleRoute: () => void;
}

const ButtonComp = ({ text, route, handleRoute }: IButton) => {
  const buttonClass = route ? `${style.button} ${style[route]}` : style.button;

  return (
    <div className={style.ButtonBrwn} >
      <button onClick={handleRoute} className={buttonClass} >
        {text}
      </button>
    </div>
  );
};

export default ButtonComp;