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
    <div>
      <button className={buttonClass} onClick={handleRoute}>
        {text}
      </button>
    </div>
  );
};

export default ButtonComp;