import React, { useRef, useState, useEffect } from "react";
import TitleAndPrice from "./TitleAndPrice";
import { FullScreen } from '../../svg';

const DataSlides = [
  {
    index: "1",
    img: [
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/tidal-blue/pc-fit-pro-tidal-blue-case-closed-floating.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/tidal-blue/pc-fit-pro-tidal-blue-earbuds-inside-outside.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/tidal-blue/pc-fit-pro-tidal-blue-earbuds-b-logo.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/tidal-blue/pc-fit-pro-tidal-blue-case-open.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/tidal-blue/pc-fit-pro-tidal-blue-case-closed-front.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/tidal-blue/pc-fit-pro-tidal-blue-unboxed.jpg",
    ],
    color: "#384484",
    nameColor: "Ocean Blue",
  },
  {
    index: "2",
    img: [
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/coral-pink/pc-fit-pro-coral-pink-case-closed-floating.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/coral-pink/pc-fit-pro-coral-pink-earbuds-inside-outside.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/coral-pink/pc-fit-pro-coral-pink-earbuds-b-logo.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/coral-pink/pc-fit-pro-coral-pink-case-open.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/coral-pink/pc-fit-pro-coral-pink-case-closed-front.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/coral-pink/pc-fit-pro-coral-pink-unboxed.jpg",
    ],
    color: "#f4cce4",
    nameColor: "SunsetPink",
  },
  {
    index: "3",
    img: [
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/volt-yellow/pc-fit-pro-volt-yellow-case-closed-floating.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/volt-yellow/pc-fit-pro-volt-yellow-earbuds-inside-outside.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/volt-yellow/pc-fit-pro-volt-yellow-earbuds-b-logo.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/volt-yellow/pc-fit-pro-volt-yellow-case-open.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/volt-yellow/pc-fit-pro-volt-yellow-case-closed-front.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/volt-yellow/pc-fit-pro-volt-yellow-unboxed.jpg"
    ],
    color: "rgb(231, 241, 101)",
    nameColor: "Volt Yellow",
  },
  {
    index: "4",
    img: [
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/black/pc-fit-pro-black-case-closed-floating.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/black/pc-fit-pro-black-earbuds-inside-outside.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/black/pc-fit-pro-black-earbuds-b-logo.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/black/pc-fit-pro-black-case-open.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/black/pc-fit-pro-black-case-closed-front.jpg",
      "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/black/pc-fit-pro-black-unboxed.jpg"
    ],
    color: "#2b2b2b",
    nameColor: "Beats Black",
  },
];
interface ImageColorProps {
  product: any;
  sendColor: any;
}

interface Product {
  _id: string;
  name: string;
  subtitles: string;
  image: string;
  description: string[];
  benefit: string[];
  price: number;
  colors: Color[];
}

interface Color {
  _id: string;
  name: string;
  color: string;
  images: string[];
  product: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const ImageColor: React.FC<ImageColorProps> = ({ product, sendColor }) => {
  const [selected, setSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(0);
  const [selectFirst, setSelectFirst] = useState('');
  const [colorChecked, setColorChecked] = useState(product[0]?.colors[0]?.name);
  const [colorsData, setColorsData] = useState<Color[]>([]);


  useEffect(() => {
    product.map((product: Product) => {
      setColorsData(product.colors);
      setSelectFirst(product.colors[0].name)
    })
  });

  

  const goToSlide = (index: any) => setActiveIndex(index);
  const goToImage = (index: any) => setModalImage(index);
  const nextSlide = () => setModalImage((modalImage + 1) % 6);
  const prevSlide = () => setModalImage((modalImage - 1 + 6) % 6);
  const checkedColor = (nameColor: any) => setColorChecked(nameColor);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  
  const filteredDataSlides = colorsData.filter((slide) => slide.name === colorChecked);

  return (
    <>
      {/* <TitleAndPrice select={selected} /> */}
      <div className="section">
        <section className="bbd-component bbd-full-width-container id-8ba46e83-4603-3963-8f4e-9353b2f2ce55">
          <div className="outer-container lg:w-full lg:max-w-[1440px]">
            <div className="content-container">
              <div>
                <div className="genericSpacing parbase section">
                  <section className="bbd-component generic-spacing spacing-59618323-d268-3a08-b832-5b1870532186"></section>
                </div>

                <div className="section">
                  <div className="productCarouselV2">
                    <div className="product-main">
                      <div className="product-main__visual">
                        <div className="product-carousel-el">
                          {/* carousel */}
                          <div className="product-carousel product-carousel--base ">
                            {/* left */}
                            <div className="product-carousel__list">
                              <div className="product-carousel__list__items">
                                <ul className="product-carousel__list__items__inner">
                                  {filteredDataSlides.map((data, index) => (
                                    <>
                                      {data.images.slice(0, -1).map((img, index) => (
                                        <li role="presentation" key={index} className={`product-thumbnail ${index === activeIndex ? '    product-thumbnail--selected' : ''} `}>
                                          <button type="button" onClick={() => goToSlide(index)} >
                                            <img src={img} alt={DataSlides[DataSlides.length - 1].nameColor} />
                                          </button>
                                        </li>
                                      ))}
                                    </>
                                  ))}
                                  <li role="presentation" className="product-thumbnail extra-thumbnail">
                                    <button type="button" onClick={() => openModal()}>
                                      {filteredDataSlides.map((data, index) => (
                                        <img src={data.images[data.images.length - 1]} key={index} alt={data.name} />
                                      ))}
                                    </button>
                                    <span onClick={() => openModal()} style={{ cursor: 'pointer' }}>+ 1 </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* main */}
                            <div className="product-carousel__main">
                              <div className="product-main__inner">
                                <div className="product-image product-image--overlay">
                                  <div className="image-block">
                                    <picture className="beats-picture" onClick={() => openModal()} style={{ cursor: "pointer" }}>
                                      {filteredDataSlides.map((data, index) => (
                                        <img src={data.images[activeIndex]} alt="" key={index} />
                                      ))}
                                    </picture>
                                  </div>
                                </div>
                              </div>
                              <div className="product-image__disclaimer">
                                Press image to open expanded view
                                <FullScreen />
                              </div>
                            </div>
                          </div>
                          {/* carousel fullscreen */}
                          <div className={`overlay ${showModal ? 'active' : ''} `}></div>
                          <div className={`product-carousel_modal ${showModal ? 'active' : ''} `}>
                            <div className="product-carousel">
                              <div className="product-carousel__main">
                                {/* prev */}
                                <button className="product-carousel__control--previous" onClick={() => prevSlide()} data-index="0" type="button" aria-label="Previous">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                  </svg>
                                </button>

                                {/* main */}
                                <div className="product-main__inner">
                                  <div className="product-image product-image--overlay zoom-container
                                    ">
                                    <div className="image-block">
                                      {filteredDataSlides.map((data, index) => (
                                        <img
                                          style={{ transform: 'scale(1) translateX(0px) translateY(0px)' }}
                                          src={data.images[modalImage]} alt="" key={index} />
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                {/* next */}
                                <button className="product-carousel__control product-carousel__control--next" onClick={() => nextSlide()} data-index="0" type="button" aria-label="Next">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                  </svg>
                                </button>
                              </div>
                              {/* list bottom */}
                              <div className="product-carousel__list">
                                <div className="product-carousel__list__items">
                                  <ul className="product-carousel__list__items__inner">
                                    {filteredDataSlides.map((data, index) => (
                                      <>
                                        {data.images.map((img, index) => (
                                          data.name === colorChecked && (
                                            <>
                                              <li role="presentation" key={data._id} className={`product-thumbnail ${index === modalImage ? 'product-thumbnail--selected' : ''} `}>
                                                <button type="button" role="tab" onClick={() => goToImage(index)} tabIndex={0} data-index="0" data-product-image-thumbnail="true" aria-label="Select Thumbnail">
                                                  <img src={img} alt={data.name} />
                                                </button>
                                              </li>
                                            </>
                                          )
                                        ))}
                                      </>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              <button className="product-carousel__control product-carousel__control--close" onClick={() => closeModal()} type="button" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.02 12"><path d="M7,6l4.84-4.83a0.68,0.68,0,0,0-1-1L6,5,1.17,0.2a0.68,0.68,0,0,0-1,1L5,6,0.2,10.83a0.68,0.68,0,1,0,1,1L6,7l4.83,4.83a0.68,0.68,0,1,0,1-1Z" fill="#161616" stroke="#161616" stroke-width="1"></path></svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="product-main__head">
                        <span className="product-detail__eyebrow"></span>
                        <h1 className="product-detail__title">
                          <p>{product[0]?.name}</p>
                        </h1>
                        <div className="product-detail__description">
                          <p>{product[0]?.subtitles}</p>
                        </div>
                      </div>
                      <div className="product-main__content">
                        <div className="product-detail">
                          <div className="product-detail__price">
                            <span className="price">${product[0]?.price}</span>
                          </div>
                          <div className="product-selector-el">
                            <fieldset className="product-selector new">
                              <legend className="product-swatch__selected-title">
                                <div className="product-swatch__selected-collection"></div>
                                <span>Color:</span>
                                {filteredDataSlides.map((data, index) => (
                                  <strong key={index}>{data.name}</strong>
                                ))}
                              </legend>
                              <div>
                                <ul className="product-swatches">
                                  {colorsData.map((color, index) => (
                                    <li key={index}>
                                      <input type="radio" name="color" id="" />
                                      <label
                                        onClick={() => checkedColor(color.name)}
                                        className={`product-swatch ${color.name === colorChecked ? " product-swatch--selected" : ''} `}
                                      >
                                        <span className="product-swatch__inner" style={{ backgroundColor: color.color }}></span>
                                      </label>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </fieldset>
                          </div>
                          <div className="product-detail__cta">
                            <div>
                              <div className="beats-button" style={{ display: "block" }}>
                                <form>
                                  <input type="text" value={product[0]?._id} />
                                  <button className='beats-btn btn-black w-full beats-btn--button beats-btn--authored font-font-secondary' data-color="black">
                                    <span className="beats-btn-inner">ADD TO CART</span>
                                    <span className="beats-btn-mask btn2-bg-hover-color-white"></span>
                                  </button>
                                </form>
                              </div>
                              <p className="b-button__secondary-cta"></p>
                            </div>
                          </div>
                          <div className="product-detail__extra">
                            <ul className="value-props">
                              <li className="value-prop">
                                <span className="value-prop__icon">
                                  <img src="https://www.beatsbydre.com/content/dam/beats/web/common/icons/apple-value-props/free-shipping-icon.png" alt="" />
                                </span>
                                <div>
                                  <h2 className="value-prop__title">Free shipping and returns</h2>
                                  <p className="value-prop__description">
                                    Enjoy free 2-day delivery and 14-day returns.
                                  </p>
                                </div>
                              </li>
                              <li className="value-prop">
                                <span className="value-prop__icon">
                                  <img src="https://www.beatsbydre.com/content/dam/beats/web/common/icons/apple-value-props/apple-music-icon.png" alt="" />
                                </span>
                                <div>
                                  <h2 className="value-prop__title">Free Apple Music trial</h2>
                                  <p className="value-prop__description">
                                    Get 6 months of access to over 100 million songs, ad-free.*
                                  </p>
                                </div>
                              </li>
                              <li className="value-prop">
                                <span className="value-prop__icon">
                                  <img src="https://www.beatsbydre.com/content/dam/beats/web/common/icons/apple-value-props/engraving-icon.png" alt="" />
                                </span>
                                <div>
                                  <h2 className="value-prop__title">Personalize your Beats Fit Pro</h2>
                                  <p className="value-prop__description">
                                    Engrave text or numbers for free at checkout. Only at Apple.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="section">
                  <section className="bbd-component generic-spacing spacing-8cf5890b-0016-381d-86d6-78a64981e61b">

                  </section>
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
