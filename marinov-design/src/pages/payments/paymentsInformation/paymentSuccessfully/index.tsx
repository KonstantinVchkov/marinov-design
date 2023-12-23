import { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import LoadingAnimation from "../../../../../public/images/json-animations/loading_animation.json";
import lottie from 'lottie-web';
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(() => import("../../../../components/HomePage/LottieAnimation"), {
    ssr: false,
  });

const PaymentSuccessfully: NextPage = () => {
  const [loading, setLoading] = useState(true);


  return (
    <div>
      {loading ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
                <LottieAnimation animationData={LoadingAnimation}/>
              <p>Processing Payment...</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Your Page Content Goes Here</h1>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccessfully;
