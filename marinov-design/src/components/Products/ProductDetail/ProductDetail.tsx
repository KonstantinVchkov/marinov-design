import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { ProductType } from "@/Interfaces/interfaces";
import SwiperReleatedProducts from "@/components/Swiper/SwiperReleatedProducts";

interface Props {
  product: ProductType;
  products: ProductType[];
}

const ProductDetail: React.FC<Props> = ({ product, products }) => {
  console.log(product.images)
  const [counter, setCounter] = useState<number>(0);
  const [displayedLiElements, setDisplayedLiElements] = useState<number>(3);

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

  const handleLoadMore = () => {
    setDisplayedLiElements((prev) => prev + 3);
  };

  return (
    <>
      <div className="container text-dark" style={{ paddingTop: 80 }}>
        <div className="row">
          <div className="col-12 p-0">
            <img
              src={product.images[0]}
              alt={product.images[0]}
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
            <div className="d-flex justify-content-between align-items-center">
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
                <div className="ask-question-btn-font">Add to Cart</div>
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

          <div className="col-12 mt-4">
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
              <p className={`${style.font}`} style={{ fontWeight: "bold" }}>
                Care & Maintenance Tips:
              </p>
              <ul>
                {product.odrzuvanje
                  .slice(0, displayedLiElements)
                  .map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className={`${style.font} ${style.liStyle} ml-3`}>
                        <b className="text-capitalize">{item.bold}</b>{" "}
                        {item.text}
                      </li>
                    );
                  })}
              </ul>
              {displayedLiElements < product.odrzuvanje.length && (
                <div className="d-flex justify-content-center">
                  <button
                    className={`${style.loadMoreBtn} `}
                    onClick={handleLoadMore}>
                    <img
                      src="/images/FAQPAGE/plusBoldOrange.svg"
                      alt=""
                      className="mr-1 mb-1"
                    />
                    Show More
                  </button>
                </div>
              )}
            </div>
            <p className={`${style.font} m-0`}>
              Follow these tips to maintain the beauty and integrity of your
              earrings, ensuring they remain a stunning accessory for years to
              come.
            </p>
          </div>

          <div
            className={`${style.list} col-12 d-flex justify-content-center align-items-center`}>
            <img src="/images/FAQPAGE/listProductDetail.svg" alt="" />
          </div>

          <div className="col-12">
            <div>
              <p className={`${style.font} m-0`} style={{ fontWeight: "bold" }}>
                You Might Also Like:
              </p>
            </div>

            {/* <SwiperReleatedProducts products={products} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
