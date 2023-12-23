import PaymentFooter from "@/components/PaymentFooter/PaymentFooter";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const PaymentsPage: NextPage = () => {
  return (
    <div className="container-fluid">
      <div className="row pt-5 pb-3">
        <div className="col-12">
          <h1 style={{ fontSize: `48px`, color: `#3c1913` }}>
            Contact and Shipping Details
          </h1>
          <p className="small">
            Have an account?{" "}
            <Link
              href={``}
              style={{
                textDecoration: `underline`,
                color: `#9b4923
              `,
              }}
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <form action="" className="d-flex flex-column">
            <label htmlFor="">Full name</label>
            <input
              type="text"
              className="mb-3 py-2 pl-2"
              style={{
                background: `#f5f3f1
`,
                border: `1px solid #3c1913`,
              }}
              placeholder="enter your full name here..."
              required
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="mb-5 py-2 pl-2"
              style={{
                background: `#f5f3f1
`,
                border: `1px solid #3c1913`,
              }}
              placeholder="Your email address here..."
              required
            />
            <label htmlFor="">Country</label>
            <select name="" id="" className="mb-3">
              <option value="">Makedonija</option>
            </select>
            <label htmlFor="">Postal/ZIP Code</label>
            <input
              type="text"
              pattern="[0-9]{10}"
              className="mb-3 py-2 pl-2"
              style={{
                background: `#f5f3f1
`,
                border: `1px solid #3c1913`,
              }}
              required
            />
            <label htmlFor="">City</label>
            <input
              type="text"
              className="mb-3 py-2 pl-2"
              style={{
                background: `#f5f3f1
`,
                border: `1px solid #3c1913`,
              }}
              required
            />
            <label htmlFor="">Address</label>
            <input
              type="text"
              className="mb-5 py-2 pl-2"
              style={{
                background: `#f5f3f1
`,
                border: `1px solid #3c1913`,
              }}
              placeholder="Your street address here..."
              required
            />
            <h1 style={{ fontSize: `48px`, color: `#3c1913` }}>Review Order</h1>
            <div className="col-12">
              <div className="row">
                <div
                  className="col-12 d-flex justify-content-between p-0 pb-1"
                  style={{ borderBottom: `#3c1913 1px solid` }}
                >
                  <p className="m-0">Product</p>
                  <p className="m-0">Price</p>
                </div>
                <div className="col-12">
                  <div
                    className="row py-3"
                    style={{ borderBottom: `#3c1913 1px solid` }}
                  >
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
                    <div
                      className="col-12 d-flex justify-content-between px-0  flex-column"
                      
                    >
                      <div className="d-flex justify-content-between pt-3 mb-1">
                        <p className="m-0">Subtotal</p>
                        <p className="m-0">$100</p>
                      </div>
                      <div className="d-flex justify-content-between pb-3" style={{ borderBottom: `#3c1913 1px solid` }}>
                        <p className="m-0">Shipping</p>
                        <p className="m-0">$10</p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center" style={{paddingBottom:`56px`}}>
                        <p className="m-0" style={{fontSize:`16px`}}>TOTAL</p>
                        <p className="m-0" style={{fontSize:`32px`}}>$110</p>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{paddingBottom:`48px`}}>
                    <div className="col-12 d-flex align-items-center justify-content-between px-0">
                        <img src="/images/Payments/Group 62.png" alt="" />
                        <p className="m-0">I have a Discount Code  / Gift Card</p>
                        <img src="/images/Payments/down.png" alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 px-0">
                        <button type="submit" className="d-block w-100 btn" style={{borderRadius:`16px 0px 16px 0px`,color:`#FBFAF8
`, background:`#3c1913`}}>Proceed to Payment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row" style={{paddingTop:`150px`}}>
        <PaymentFooter/>
      </div>
    </div>
  );
};

export default PaymentsPage;
