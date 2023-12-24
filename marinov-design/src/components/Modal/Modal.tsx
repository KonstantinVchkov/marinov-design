import React from "react";
import style from "./style.module.css";

interface Props {
  content: string;
  onClick: () => void;
}

const Modal: React.FC<Props> = ({ content, onClick }) => {
  return (
    <>
      <div className={style.customModal}>
        <div className="content text-center m-3 d-flex justify-content-center align-items-center flex-wrap">
          <p className="m-0">{content}</p>
          <button
            className="footer-button px-4 py-2 text-dark"
            onClick={onClick}>
            close modal
          </button>
          <button className="text-dark">Go to cart</button>
          <button className="text-dark">continue shopping</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
