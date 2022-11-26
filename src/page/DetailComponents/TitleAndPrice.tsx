import React from "react";
import { ButtonBlack } from "../../components";

const TitleAndPrice = () => {
  return (
    <div className="section">
      <section className="bbd-component bbd-full-width-container id-c8b2564b-d503-3cb0-8419-e2ac0cd701d4">
        <div className="outer-container">
          <div className="content-container">
            <div>
              <div className="genericSpacing parbase section">
                <section className="bbd-component generic-spacing spacing-40"></section>
              </div>
              <div className="productHeader section">
                <section
                  className="bbd-component fixed top-0 left-0 w-full z-[999] bg-inverse overflow-hidden product-sticky-bar hidden opacity-0 mt-[66px] pt-20 aria-no-tab"
                  id="product-sticky-bar"
                  data-analytics-module="studiobudspdp"
                  data-analytics-region="buybar"
                >
                  <div className="product-sticky-bar__container flex flex-wrap items-center p-[28px_60px] w-full max-w-[1440px] my-o mx-auto">
                    <div className="product-sticky-bar__text text-left mr-5 flex-[1_0_auto] text-[20px] font-bold leading-[1.5] tracking-[-0.2px]">
                      Beats Studio Buds
                    </div>
                    <div className="product-sticky-bar__cta inline-flex items-center  justify-end ml-[-20px] leading-[initial]">
                      <div
                        className="hide cta__swatch w-8 h-8 rounded-[20px] ml-5 bg-[#384484]"
                        data-resp-exclude=""
                      ></div>
                      <div className="cta__price justify-center flex-col max-w-[inherit]">
                        <div className=" display-price flex flex-wrap ml-5">
                          <span className="product-price product-price-orig text-[22px] font-semibold tracking-[-0.4px]">
                            $149.99
                          </span>
                        </div>
                      </div>
                      <div className="beats-button cta__button inline-flex beats-btn-std beats-btn-std--invert">
                        <ButtonBlack title="add to cart" />
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="bbd-component product-header flex flex-wrap"
                  id="product-header"
                  data-analytics-module="studiobudspdp"
                  data-analytics-region="buybar"
                >
                  <div className="product-header__text text-left mr-5 flex-[1_0_auto] leading-[0.8] lg:mb-5">
                    <div className="show-desktop">
                      <h1 className="font-updated uppercase font-black text-[min(100px,_max(36px,_5.92592vw_+_14.6667px))] tracking-[-0.8px] leading-[0.8]">
                        Beats Studio Buds
                      </h1>
                    </div>
                  </div>
                  <div className="product-header__cta lg:mb-[31px] inline-flex self-end items-center ml-[-20px] leading-[initial]">
                    <div
                      className="hide cta__swatch bg-[#384484] w-8 h-8 rounded-[30px] ml-5"
                      data-resp-exclude=""
                    ></div>
                    <div className="cta__price justify-center flex-col">
                      <div className="product-price-title product-price-medium hide"></div>
                      <div className=" display-price flex flex-wrap ml-5">
                        <span className="product-price product-price-orig text-[22px] font-semibold tracking-[-0.4px]">
                          $149.99
                        </span>
                      </div>
                    </div>
                    <div className="cta__button beats-button inline-flex beats-btn-std beats-btn-std--invert">
                      <div className="ml-5">
                        <ButtonBlack title="add to cart" />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="beatsRTE parbase section">
                  <h2 className="font-updated mt-[-12px] p-0 text-[2.813em] font-extralight tracking-[-1px] mb-0">True Wireless Noise Cancelling Earbuds</h2>
              </div>
              <div className="genericSpacing parbase section">
                <section className="bbd-component generic-spacing spacing-40">
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TitleAndPrice;
