import { useRouter } from "next/router";
import React, { useState } from "react";

const PaymentCardReview: React.FC = () => {
  const router = useRouter();
  const [discount , isDiscountShown] = useState<boolean>(false)
  return (
    <>
      <div
        className="col-12 d-flex justify-content-between p-0 pb-1"
        style={{ borderBottom: `#3c1913 1px solid` }}
      >
        <p className="m-0">Product</p>
        <p className="m-0">Price</p>
      </div>
      <div className="col-12">
        <div className="row py-3" style={{ borderBottom: `#3c1913 1px solid` }}>
          <div className="col-2">
            <img
              src="https://picsum.photos/id/237/200/300"
              className="w-100 d-block img"
              alt=""
            />
          </div>
          <div className="col-8 d-flex flex-column">
            <p>Lorem, ipsum dolor.</p>
            <button
              style={{
                textDecoration: `underline`,
                color: `#9b4923
`,
                background: `none`,
                border: `none`,
                padding: `0`,
                width: `fit-content`,
              }}
            >
              Remove
            </button>
          </div>
          <div className="col-2">
            <p>$300</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-between px-0  flex-column">
            <div className="d-flex justify-content-between pt-3 mb-1">
              <p className="m-0">Subtotal</p>
              <p className="m-0">$100</p>
            </div>
            <div
              className="d-flex justify-content-between pb-3"
              style={{ borderBottom: `#3c1913 1px solid` }}
            >
              <p className="m-0">Shipping</p>
              <p className="m-0">$10</p>
            </div>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ paddingBottom: `56px` }}
            >
              <p className="m-0" style={{ fontSize: `16px` }}>
                {router.pathname == `/cartPage`
                  ? `Subtotal`
                  : router.pathname == `/payments`
                  ? `TOTAL`
                  : null}
              </p>
              <p className="m-0" style={{ fontSize: `32px` }}>
                $110
              </p>
            </div>
          </div>
        </div>
        {router.pathname == `/payments` ? (
          <div className="row" style={{ paddingBottom: `48px` }}>
            <div className="col-12 d-flex align-items-center justify-content-between px-0" onClick={()=> {
              isDiscountShown(!discount)
            }}>
              <img src="/images/Payments/Group 62.png" alt="" />
              <p className="m-0">I have a Discount Code / Gift Card</p>
              {
                discount ? ( <img src="/images/Payments/down.png" alt="" style={{transform:`rotate(180deg)`}} />) : ( <img src="/images/Payments/down.png" alt="" />)
              }
             
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center pt-3 ">
            <input type="text"  className={`${discount? `d-block`: `d-none`} p-2` } style={{border:`0.8px solid #3c1913`,color:`#3c1913`,background: `#f5f3f1`}} placeholder=" enter your code here..."/>
            <button className={`ml-3 p-2 btn ${discount? `d-block`: `d-none`}`} style={{borderRadius:`16px 0px 16px 0px`,border:`0.8px solid #3c1913`,color:`#3c1913`}}>apply</button>
            </div>
          </div>
        ) : null}
        <div className="row">
          <div className="col-12 px-0">
            {router.pathname == `/payment` ? (
              <button
                type="submit"
                className="d-block w-100 btn"
                style={{
                  borderRadius: `16px 0px 16px 0px`,
                  color: `#FBFAF8
`,
                  background: `#3c1913`,
                }}
              >
                Proceed to Payment
              </button>
            ) : router.pathname == `/cartPage` ? (
              <button
                className="d-block w-100 btn"
                style={{
                  borderRadius: `16px 0px 16px 0px`,
                  color: `#FBFAF8
  `,
                  background: `#3c1913`,
                }}
              >
                Checkout
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCardReview;
