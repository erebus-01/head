import React, { useState } from "react";

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
    <div className={`product-selector-image-holder ${props.selected === props.nameColor ? 'selected' : ''}`} >
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
      className={`product-selector-swatch-circle ${props.selected === props.nameColor ? 'selected' : ''} `}
      key={props.id}
      
      onClick={() => props.setSelected(props.nameColor)}
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

  // const toggleActive = (index: any) => {
  //   setSelected({idSelected: selected[index]})
  // }

  return (
    <div className="section">
      <section className="bbd-component bbd-full-width-container">
        <div className="outer-container lg:w-full lg:max-w-[1440px]">
          <div className="content-container">
            <div>
              <div className="productCarousel section">
                <section className="bbd-component product-selector-component">
                  <div className="product-selector-content-column">
                    <div className="product-selector-image-container">
                      <div className="product-selector-image-wrapper">
                        {data.map((item, index) => {
                          return <RenderImage id={index} image={item.img} nameColor={item.nameColor} selected={selected} />
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
                            if(selected === item.nameColor){
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageColor;
