import React, { useRef, useState } from "react";
import TitleAndPrice from "./TitleAndPrice";

const data = [
  {
    index: "1",
    img: "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/studio-buds/pdp/studiobuds-blue-pdp-p01.jpg.large.2x.jpg",
    color: "#384484",
    nameColor: "Ocean Blue",
  },
  {
    index: "2",
    img: "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/studio-buds/pdp/studiobuds-gray-pdp-p01.jpg.large.2x.jpg",
    color: "#a4a4a4",
    nameColor: "Moon Gray",
  },
  {
    index: "3",
    img: "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/studio-buds/pdp/studiobuds-pink-pdp-p01.jpg.large.2x.jpg",
    color: "#f4cce4",
    nameColor: "SunsetPink",
  },
  {
    index: "4",
    img: "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/studio-buds/pdp/studiobuds-pdp-p01-black.jpg.large.2x.jpg",
    color: "#2b2b2b",
    nameColor: "Black",
  },
  {
    index: "5",
    img: "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/studio-buds/pdp/studiobuds-pdp-p01-white.jpg.large.2x.jpg",
    color: "#d0d1d3",
    nameColor: "White",
  },
  {
    index: "6",
    img: "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/studio-buds/pdp/studiobuds-pdp-p01-red.jpg.large.2x.jpg",
    color: "#b10311",
    nameColor: "Beats Red",
  },
];

const RenderImage = (props: any) => {
  return (
    <div className={`product-selector-image-holder ${props.selected === props.color ? 'selected' : ''}`} >
      <picture className="product-selector-picture">
        <img
          src={props.image}
          alt=""
          className=""
        />
      </picture>
    </div>
  );
};

const RenderColor = (props: any) => {
  return (
    <div
      className={`product-selector-swatch-circle ${props.selected === props.color ? 'selected' : ''} `}
      key={props.id}
      
      onClick={() => props.setSelected(props.color)}
    >
      <div
        data-resp-exclude=""
        className="swatch-circle-content"
        style={{ backgroundColor: `${props.color}` }}
      ></div>
    </div>
  );
};

const ImageColor = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {/* <TitleAndPrice select={selected} /> */}
      <div className="section">
        <section className="bbd-component bbd-full-width-container id-8ba46e83-4603-3963-8f4e-9353b2f2ce55">
          <div className="outer-container lg:w-full lg:max-w-[1440px]">
            <div className="content-container">
              <div>
                <div className="section">
                  <div className="productCarouselV2">
                    <div className="product-main">
                      <div className="product-main__visual">
                        <div className="product-carousel-el">
                          <div className="product-carousel product-carousel--base ">
                            {/* left */}
                            <div className="product-carousel__list">
                              <div className="product-carousel__list__items">
                                <ul className="product-carousel__list__items__inner">
                                  <li role="presentation" className="product-thumbnail" style={{ borderColor: "#161616" }}>
                                    <button type="button" >
                                      <img src="https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/tidal-blue/pc-fit-pro-tidal-blue-case-closed-floating.jpg" 
                                      alt="Beats Fit Pro True Wireless Noise Cancelling Earphones with Beats logo above convenient charging case." />
                                    </button>
                                  </li>
                                  <li role="presentation" className="product-thumbnail">
                                    <button type="button" >
                                      <img src="https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/tidal-blue/pc-fit-pro-tidal-blue-case-closed-floating.jpg" 
                                      alt="Beats Fit Pro True Wireless Noise Cancelling Earphones with Beats logo above convenient charging case." />
                                    </button>
                                  </li>
                                  <li role="presentation" className="product-thumbnail">
                                    <button type="button" >
                                      <img src="https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/tidal-blue/pc-fit-pro-tidal-blue-case-closed-floating.jpg" 
                                      alt="Beats Fit Pro True Wireless Noise Cancelling Earphones with Beats logo above convenient charging case." />
                                    </button>
                                  </li>
                                  <li role="presentation" className="product-thumbnail">
                                    <button type="button" >
                                      <img src="https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/tidal-blue/pc-fit-pro-tidal-blue-case-closed-floating.jpg" 
                                      alt="Beats Fit Pro True Wireless Noise Cancelling Earphones with Beats logo above convenient charging case." />
                                    </button>
                                  </li>
                                  <li role="presentation" className="product-thumbnail">
                                    <button type="button" >
                                      <img src="https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/tidal-blue/pc-fit-pro-tidal-blue-case-closed-floating.jpg" 
                                      alt="Beats Fit Pro True Wireless Noise Cancelling Earphones with Beats logo above convenient charging case." />
                                    </button>
                                  </li>
                                  <li role="presentation" className="product-thumbnail extra-thumbnail">
                                    <button type="button" >
                                      <img src="https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/tidal-blue/pc-fit-pro-tidal-blue-case-closed-floating.jpg" 
                                      alt="Beats Fit Pro True Wireless Noise Cancelling Earphones with Beats logo above convenient charging case." />
                                    </button>
                                    <span>+ 1 </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* main */}
                            <div className="product-carousel__main">
                              <div className="product-main__inner">
                                <div className="product-image product-image--overlay">
                                  <div className="image-block">
                                    <picture className="beats-picture">
                                      <img src="https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/tidal-blue/pc-fit-pro-tidal-blue-case-closed-floating.jpg" alt="" />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                              <div className="product-image__disclaimer">
                                Press image to open expanded view
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="product-main__head">
                        <span className="product-detail__eyebrow"></span>
                        <h1 className="product-detail__title">
                          <p>Beats Fit Pro</p>
                        </h1>
                        <div className="product-detail__description">
                          <p>True Wireless Noise Cancelling Earbuds</p>
                        </div>
                      </div>
                      <div className="product-main__content">
                        <div className="product-detail">
                          <div className="product-detail__price">
                            <span className="price">$199.99</span>
                          </div>
                          <div className="product-selector-el">
                            <fieldset className="product-selector new">
                              <legend className="product-swatch__selected-title">
                                <div className="product-swatch__selected-collection"></div>
                                <span>Color:</span>
                                <strong>Coral Pink</strong>
                              </legend>
                              <div>
                                <ul className="product-swatches">
                                  <li>
                                    <input type="radio" name="color" id="" />
                                    <label className="product-swatch" ><span className="product-swatch__inner" style={{backgroundColor:" rgb(59, 71, 99)"}}></span></label>
                                  </li>
                                  <li>
                                    <input type="radio" name="color" id="" />
                                    <label className="product-swatch product-swatch--selected" ><span className="product-swatch__inner" style={{backgroundColor:" rgb(230, 154, 143)"}}></span></label>
                                  </li>
                                  <li>
                                    <input type="radio" name="color" id="" />
                                    <label className="product-swatch" ><span className="product-swatch__inner" style={{backgroundColor:"rgb(231, 241, 101)"}}></span></label>
                                  </li>
                                  <li>
                                    <input type="radio" name="color" id="" />
                                    <label className="product-swatch" ><span className="product-swatch__inner" style={{backgroundColor:"rgb(0, 0, 0)"}}></span></label>
                                  </li>
                                  <li>
                                    <input type="radio" name="color" id="" />
                                    <label className="product-swatch" ><span className="product-swatch__inner" style={{backgroundColor:"rgb(235, 235, 235)"}}></span></label>
                                  </li>
                                </ul>
                              </div>
                            </fieldset>
                          </div>
                          <div className="product-detail__cta">
                            <div>
                              <div className="beats-button" style={{display: "block"}}>
                                <a  className='beats-btn btn-black w-full beats-btn--button beats-btn--authored font-font-secondary' data-color="black">
                                  <span className="beats-btn-inner">ADD TO CART</span>
                                  <span className="beats-btn-mask btn2-bg-hover-color-white"></span>
                                </a>
                              </div>
                              <p className="b-button__secondary-cta"></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              


                {/* <div className="productCarousel section">
                  <section className="bbd-component product-selector-component">
                    <div className="product-selector-content-column">
                      <div className="product-selector-image-container">
                        <div className="product-selector-image-wrapper">
                          {data.map((item, index) => {
                            return <RenderImage id={index} image={item.img} color={item.color}  nameColor={item.nameColor} selected={selected} />
                          })}
                        </div>
                      </div>
                      <div className="product-selector-swatch">
                        <div
                          className="product-swatch flex justify-center flex-wrap m-[-10px_auto_0_auto] max-w-[calc(8_*_54px)]"
                          role="radiogroup"
                          aria-label="beats-studio-3-selection"
                        >
                          {data.map((item, index) => {
                            return <RenderColor id={index} color={item.color} nameColor={item.nameColor} selected={selected} setSelected={setSelected} />;
                          })}
                        </div>
                      </div>
                      <div className="product-selector-details">
                        <div
                          style={{ color: "#161616" }}
                          className="product-selector-details-wrapper"
                        >
                          <p
                            className="product-selector-color product-selector-text mt-[7px] font-normal mb-0 tracking-[-0.2px] text-[20px] leading-[1px]"
                            data-product-selector-variant=""
                          >
                            {data.map((item, index) => {
                              if(selected === item.color){
                                return (
                                  item.nameColor
                                )
                              }
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ImageColor;
