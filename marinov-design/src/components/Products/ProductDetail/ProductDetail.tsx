import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { ProductType } from "@/Interfaces/interfaces";

interface Props {
  product: ProductType;
}

const ProductDetail: React.FC<Props> = ({ product }) => {
  const [counter, setCounter] = useState<number>(0);

  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const scrollContainer = document.getElementById("scroll-container");

  //     if (scrollContainer) {
  //       const containerOffset = scrollContainer.offsetTop;

  //       if (
  //         scrollPosition > containerOffset &&
  //         scrollPosition > lastScrollTop
  //       ) {
  //         setIsSticky(true);
  //       } else if (scrollPosition < containerOffset) {
  //         setIsSticky(false);
  //       }
  //       setLastScrollTop(scrollPosition);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollTop]);

  const handleIncrement = () => {
    counter < 5 ? setCounter(counter + 1) : null;
  };

  const handleDecrement = () => {
    counter > 1 ? setCounter(counter - 1) : null;
  };

  return (
    <>
      <div className="container text-dark">
        <div className="row">
          <div className="col-12 p-0">
            <img
              src={product.image}
              alt={product.image}
              style={{ width: "100%", height: "500px" }}
            />
          </div>

          <div className="col-12 my-3">
            <p className={`${style.titleFont} m-0`}>{product.name}</p>
            <p className={`${style.priceFont} m-0`}>&euro; {product.price}</p>
          </div>
        </div>
      </div>

      <div
        className={`${
          isSticky ? `${style.sticky}` : ""
        } container mt-3 text-dark`}
        id="scroll-container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <div className={`${style.counter} d-flex`}>
                <button
                  className={`${style.borderRight} border-0`}
                  onClick={(
                    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => {
                    event.preventDefault();
                    handleDecrement();
                  }}>
                  <img
                    src="/images/FAQPAGE/minus.svg"
                    alt=""
                    className="mb-1"
                  />
                </button>

                <p className={`${style.font} m-0 mx-3`}>{counter}</p>

                <button
                  className={`${style.borderLeft} border-0`}
                  onClick={(
                    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => {
                    event.preventDefault();
                    handleIncrement();
                  }}>
                  <img
                    src="/images/FAQPAGE/plus bold.svg"
                    alt=""
                    className="mb-1"
                  />
                </button>
              </div>
              <div>
                <p className={`${style.font} text-capitalize m-0`}>
                  save for later
                </p>
              </div>
            </div>
            <div className="w-100">
              <button className="ask-question-btn border-0 my-3 w-100">
                <div className="ask-question-btn-font">Ask Us Directly</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-dark my-4">
        <div className="row">
          <div className="col-12">
            <p className={`${style.font} m-0`}>{product.description}</p>
          </div>

          <div className="col-12 my-4">
            <div className="d-flex">
              <p className={`${style.font} m-0`} style={{ fontWeight: "bold" }}>
                Matherial:
              </p>
              <p className={`${style.font} m-0`}>&nbsp; {product.material}</p>
            </div>

            <div className="d-flex">
              <p className={`${style.font} m-0`} style={{ fontWeight: "bold" }}>
                Dimensions:
              </p>
              <p className={`${style.font} m-0`}>&nbsp; {product.dimensions}</p>
            </div>

            <div className="d-flex">
              <p className={`${style.font} m-0`} style={{ fontWeight: "bold" }}>
                Weight:
              </p>
              <p className={`${style.font} m-0`}>&nbsp; {product.weight}</p>
            </div>

            <div className="my-4">
              <ul>
                <li className={`${style.font}`}>
                  <b>Avoid Moisture:</b> Copper can tarnish when exposed to
                  moisture. Remove your earrings before swimming, showering, or
                  participating in activities that may involve water.
                </li>
                <li className={`${style.font}`}>
                  <b>Store Properly:</b> Store your earrings in a dry place,
                  away from humidity. Consider keeping them in a jewelry box or
                  airtight container to prevent tarnishing.
                </li>
                <li className={`${style.font}`}>
                  <b>Clean Regularly:</b> To maintain the shine of the copper,
                  clean the earrings regularly with a soft, dry cloth. You can
                  also use a jewelry polishing cloth specifically designed for
                  copper.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
