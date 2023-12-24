import LottieAnimation from "@/components/HomePage/LottieAnimation";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import LoadingAnimation from "../../../public/images/json-animations/loading_animation.json";

const index: NextPage = () => {
  return (
    <div className="container-fluid pb-5" style={{ paddingTop: `80px` }}>
      <div className="row pb-3">
        <div className="col-8">
          <p style={{ fontSize: `48px`, color: `#3c1913` }}>Your Cart</p>
          <Link
            href={`/jewelry`}
            className="d-block w-75 btn"
            style={{
              borderRadius: `16px 0px 16px 0px`,
              background: `#FBFAF8`,
              color: `#3c1913`,
              border: `2px solid`,
            }}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
      <div className="row py-2">
        <div
          className="col-11 ml-auto mr-auto d-flex justify-content-between p-0 pb-1"
          style={{ borderBottom: `#3c1913 1px solid` }}
        >
          <p style={{ color: `#3c1913` }} className="m-0">
            Product
          </p>
          <p style={{ color: `#3c1913` }} className="m-0">
            Price
          </p>
        </div>
      </div>
      <div className="row ">
      <div className="col-12 px-0 position-relative">
      <LottieAnimation animationData={LoadingAnimation} />
        <p className="w-75 d-block position-absolute" style={{ color: `#3c1913`,fontSize:`48px`,top:`40%`,left:`5%` }}>Your cart is empty</p>
      </div>
      </div>
    </div>
  );
};

export default index;

