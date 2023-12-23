import PaymentFooter from "@/components/PaymentFooter/PaymentFooter";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const PaymentInfo: NextPage = () => {
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const cardHolderInputRef = useRef<HTMLInputElement>(null);
    const cardNumberInputRef = useRef<HTMLInputElement>(null);
    const cardExpirationDateInputRef = useRef<HTMLInputElement>(null);
    const cardSecurityInputRef = useRef<HTMLInputElement>(null);
  
    const handleDisabledBtn = () => {
      const formIsValid =
        cardHolderInputRef.current?.value !== "" &&
        cardNumberInputRef.current?.value !== "" &&
        cardExpirationDateInputRef.current?.value !== "" &&
        cardSecurityInputRef.current?.value !== "";
  
      setIsDisabled(!formIsValid);
    };
  
    useEffect(() => {
        handleDisabledBtn();
    
        const inputRefs = [
          cardHolderInputRef,
          cardNumberInputRef,
          cardExpirationDateInputRef,
          cardSecurityInputRef,
        ];
    
        inputRefs.map((inputRef) => {
          if (inputRef.current) {
            inputRef.current.addEventListener("input", handleDisabledBtn);
          }
        });
    
        return () => {
          inputRefs.map((inputRef) => {
            if (inputRef.current) {
              inputRef.current.removeEventListener("input", handleDisabledBtn);
            }
          });
        };
      }, []);
                

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
          <img
            src="/images/Payments/logo_scroll.png"
            className="block"
            style={{ width: `62.49px` }}
            alt=""
          />
          <img
            src="/images/Payments/logo_stay.png"
            className="block"
            style={{ width: `143.8px`, marginTop: `-15px` }}
            alt=""
          />
          <img
            src="/images/Payments/iwwa_lock.png"
            className="block"
            style={{ width: `25px` }}
            alt=""
          />
          <p style={{ fontSize: `14px`, color: `#3c1913` }}>Secure Payment</p>
        </div>
      </div>
      <div className="row">
        <div
          className="col-11 ml-auto mr-auto"
          style={{
            color: `#3c1913`,
            border: `1px solid #3c1913`,
            borderRadius: `32px 0px 32px 0px`,
          }}
        >
          <div className="p-2">
            <h2 className="pb-3 mt-3">Payment Information</h2>
            <p className="m-0">Merchant</p>
            <p className="pb-1" style={{ fontWeight: `700` }}>
              Marinov Design
            </p>
            <p className="m-0">Website</p>
            <p className="pb-1" style={{ fontWeight: `700` }}>
              www.marinovdesign.com
            </p>
            <p className="m-0">Amount</p>
            <p className="pb-1" style={{ fontWeight: `700` }}>
              $76
            </p>
          </div>
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-12">
          <h2>Card Details</h2>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              handleDisabledBtn();
            }}
            action=""
            className="d-flex flex-column pt-2"
            style={{ color: `#3c1913` }}
          >
            <label htmlFor="">Card Holder</label>
            <input
              type="text"
              className="mb-3 py-2 pl-2"
              style={{
                background: `#f5f3f1`,
                border: `1px solid #3c1913`,
              }}
              placeholder="Card holder name here..."
              ref={cardHolderInputRef}
            />
            <label htmlFor="">Card Number</label>
            <input
              type="number"
              className="mb-3 py-2 pl-2"
              style={{
                background: `#f5f3f1`,
                border: `1px solid #3c1913`,
              }}
              placeholder="0000 0000 0000 0000"
              ref={cardNumberInputRef}
              minLength={16}
              maxLength={16}
            />
            <div className="row d-flex justify-content-between pb-4">
              <div className="col-6">
                <label htmlFor="">Expiration Date</label>
                <input
                  ref={cardExpirationDateInputRef}
                  type="text"
                  className="mb-3 py-2 pl-2"
                  style={{
                    background: `#f5f3f1`,
                    border: `1px solid #3c1913`,
                    width: `100%`,
                  }}
                  placeholder="MM/YY"
                  minLength={5}
                  maxLength={5}
                />
              </div>
              <div className="col-6">
                <label htmlFor="">Security Code</label>
                <input
                  ref={cardSecurityInputRef}
                  type="number"
                  className="mb-3 py-2 pl-2"
                  style={{
                    background: `#f5f3f1`,
                    border: `1px solid #3c1913`,
                    width: `100%`,
                  }}
                  placeholder="000"
                  minLength={3}
                  maxLength={3}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 pb-2">
                <button
                  type="submit"
                  className={`d-block w-100 btn ${
                    isDisabled ? "disabled" : "unable"
                  }`}
                  style={{
                    borderRadius: "16px 0px 16px 0px",
                    color: "linen",
                    opacity: 1,
                    backgroundColor: isDisabled ? "dimgrey" : "#3c1913",
                  }}
                >
                  Pay Now
                </button>
              </div>
              <div className="col-12">
                <Link
                href={`/payments/paymentInformation/paymentSuccessfully`}
                  className="d-block w-100 btn"
                  style={{
                    borderRadius: `16px 0px 16px 0px`,
                    background: `#FBFAF8
`,
                    color: `#3c1913`,
                    border: `2px solid`,
                  }}
                >
                  Cancel
                </Link>
              </div>
            </div>
            <div className="row" style={{ paddingTop: `150px` }}>
              <PaymentFooter />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
