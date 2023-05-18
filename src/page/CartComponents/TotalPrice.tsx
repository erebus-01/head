import React from "react";
import { ButtonBlack, ButtonWhiteBlack } from "../../components";

interface PropsPrice {
  totalPrice: any;
}

const TotalPrice: React.FC<PropsPrice> = ({ totalPrice }) => {

  const fax = totalPrice * 0.05
  const all = totalPrice + fax

  const handleCheckout = async (e: any) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/checkout_vnpay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="rs-summary mt-0">
      <div className="large-9 large-offset-3 small-12 small-offset-0">
        <div className="rs-summary-content rs-summary-subtotal">
          <div className="rs-summary-labelandvaluecontainer">
            <div
              className="rs-summary-label"
              data-autom="bagrs-summary-subtotallabel"
            >
              Subtotal
            </div>
            <div
              className="rs-summary-value"
              data-autom="bagrs-summary-subtotalvalue"
            >
              ${totalPrice.toFixed(2)}
            </div>
          </div>
        </div>
        <div className="rs-summary-content rs-summary-shipping">
          <div className="rs-summary-labelandvaluecontainer">
            <div
              className="rs-summary-label"
              data-autom="bagrs-summary-shippinglabel"
            >
              Shipping
            </div>
            <div
              className="rs-summary-value"
              data-autom="bagrs-summary-shippingvalue"
            >
              FREE
            </div>
          </div>
        </div>
        <div className="rs-summary-content rs-summary-tax">
          <div className="rs-summary-labelandvaluecontainer">
            <div
              className="rs-summary-label"
              data-autom="bagrs-summary-taxlabel"
            >
              <div className="rs-summary-tax">
                <span className="rs-summary-tax-label">
                  Estimated tax for:{" "}
                </span>
              </div>
            </div>
            <div
              className="rs-summary-value"
              data-autom="bagrs-summary-taxvalue"
            >
              $ {fax.toFixed(2)}
            </div>
          </div>
        </div>
        <div className="rs-summary-labelandvaluecontainer rs-summary-total">
          <div className="font-[700_!important] rs-summary-label uppercase">
            Total
          </div>
          <div className="rs-summary-value" data-autom="bagtotalvalue">
            ${all.toFixed(2)}
          </div>
        </div>
        <div className="rs-summary-content float-right flex gap-4 pt-7 button-container   ">
          <form onSubmit={handleCheckout}>
            <div className="beats-button">
              <button className='beats-btn btn-black beats-btn--button beats-btn--authored font-font-secondary' data-color="black">
                <span className="beats-btn-inner">Checkout</span>
                <span className="beats-btn-mask btn2-bg-hover-color-white"></span>
              </button>
            </div>
            <div className="beats-button" style={{marginLeft: '20px'}}>
              <button type="submit" className='beats-btn btn-light beats-btn--button beats-btn--authored font-font-secondary border_btn-white ' data-color="black" >
                <span className="beats-btn-inner text-text-primary">Payment online</span>
                <span className="beats-btn-mask btn2-bg-hover-color-black"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
