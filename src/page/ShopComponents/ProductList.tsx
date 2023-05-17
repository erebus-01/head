import React, { useEffect, useState } from 'react'
import { ButtonBlack } from '../../components'
import axios from 'axios'
import { Link } from 'react-router-dom';

interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  benefit: string[];
  colors: Color[];
}

interface Color {
  _id: string;
  id: string;
  name: string;
  color: string;
  images: string[];
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/v1/products');
        const productsData: Product[] = response.data;

        const productsWithColor = await Promise.all(
          productsData.map(async (product) => {
            const colorResponse = await axios.get(`http://localhost:5000/auth/v1/products/colors/${product._id}`);
            const colorData: Color[] = colorResponse.data;
            return { ...product, colors: colorData };
          })
        );
        setProducts(productsWithColor);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {products.map((item, index) => (
        <div key={index} className='section'>
          <div className="bbd-component bbd-full-width-container id-ae5707b7-8f33-3479-8b7d-29d30bf6f428">
            <div className="outer-container">
              <div className="content-container">
                <div>
                  <div className="imageAndText section">
                    <section className="bbd-component bbd-1X-flip bbd-img-text-component id-3d7a3310-a75b-3ced-9c42-9a7967c50447 animate">
                      <div className="content-wrapper  tablet-side-by-side-config-1x">
                        <section className="bbd-1X-image bbd-1X-flip animate">
                          <div className="content-column">
                            <div className="lg-col-6 md-col-6 sm-col-12 bbd-1X-image-picture-block">
                              <div className="pyt-target">
                                <picture className='beats-picture '>
                                  <img src={item.image} alt={item.name} className='bbd-media-image' />
                                </picture>
                              </div>
                            </div>
                            <div className="lg-col-6 md-col-6 sm-col-12 bbd-1X-image-text-column align-self--center  ">
                              <div className="bbd-1X-image-text-block">
                                <div className="show-desktop">
                                  <div className="font-updated">
                                    {/* <div style={{ color: '#e31837' }} className="text-red text-[1rem] font-bold leading-[1.13] uppercase mt-[9px]">$50 APPLE GIFT CARD*</div> */}
                                    <div className="max-w-[390px] inline-block m-[4px_0_10px]">
                                      <p style={{ color: '#161616' }} className="text-[min(38px,_max(28px,_0.845066vw_+_25.831px))] font-black tracking-[-1px] leading-[1.16] break-keep z-[1] m-0">
                                        {item.name}
                                      </p>
                                    </div>
                                    <p className="mb-6 text-[1rem] tracking-[1.5] font-normal">
                                      <span style={{ color: '#161616' }} className="font-bold text-[1.275em] leading-[1.14] tracking-[-0.4px]">${item.price}</span>
                                    </p>
                                    <ul style={{ color: '#161616' }} className="dot-li__pdp pl-[1.05em] tracking-[-0.2px] leading-[1.667] mb-[1.55em]">
                                      {item.benefit.map((li, index) => (
                                        <li key={index} style={{ color: '#161616' }} className="text-[0.9375em]">
                                          {li}
                                        </li>
                                      ))}
                                    </ul>
                                    <div className="flex items-center mb-[6px]" >
                                      <span style={{ color: '#161616' }} className="font-[0.9375em]">{item.colors.length} colors</span>
                                      <ul className="">
                                        {Array.isArray(item.colors) && (item.colors.length > 0) && (
                                          item.colors.map((element, index) => (
                                            <li
                                              key={index}
                                              style={{ backgroundColor: element.color }}
                                              className="rounded-md w-[10px] h-[10px] inline-block ml-[13px]"
                                            ></li>
                                          ))
                                        )}

                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="bbd-component beats-cta-container beats-cta-container--align-left">
                                  <div className="button-container   ">
                                    <div className="beats-button">
                                      <Link to={`/product/detail/${item._id}`}>
                                        <button className='beats-btn btn-black beats-btn--button beats-btn--authored font-font-secondary' data-color="black">
                                          <span className="beats-btn-inner">View Detail</span>
                                          <span className="beats-btn-mask btn2-bg-hover-color-white"></span>
                                        </button>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </section>
                  </div>
                  <div className="genericSpacing parbase section">
                    <section className="bbd-component generic-spacing section-spacing"></section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </>
  )
}

export default ProductList