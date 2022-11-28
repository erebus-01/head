import React from "react";
import { ButtonBlack, ButtonWhiteBlack } from "../../components";

const TotalPrice = () => {
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
              $1,919.74
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
              $ –
            </div>
          </div>
        </div>
        <div className="rs-summary-labelandvaluecontainer rs-summary-total">
          <div className="font-[700_!important] rs-summary-label uppercase">
            Total
          </div>
          <div className="rs-summary-value" data-autom="bagtotalvalue">
            $1,919.74
          </div>
        </div>
        <div className="rs-summary-content float-right flex gap-4 pt-7 button-container   ">
          <ButtonBlack title="checkout" />
          <ButtonWhiteBlack title="Payment online" />
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
