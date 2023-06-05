import React, { useEffect, useState, Suspense } from 'react'

interface ImageColorProps {
  product: any;
}

const Description: React.FC<ImageColorProps> = ({ product }) => {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const delay = 1500;

    const timer = setTimeout(() => {
      setShowComponent(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="section">
      <section className='bbd-component bbd-full-width-container'>
        <div className="outer-container lg:w-[91.66666%] lg:max-w-[1440px]">
          <div className="content-container">
            <div>
              <div className="genericSpacing parbase section">
                <section className="bbd-component generic-spacing lg:pt-[120px]"></section>
              </div>
              {showComponent ? (
                <Suspense fallback={<div>Loading...</div>}>
                  {product[0].description.map((item: any, index: any) => (
                    <>
                      <div className="genericSpacing parbase section">
                        <section className="bbd-component generic-spacing lg:pt-2"></section>
                      </div>
                      <div className="imageAndText section">
                        <section className="bbd-component transition bbd-img-text-component animate id-c29c9414-b7c2-3b3e-aad9-27a52e385f15">
                          <div className="content-wrapper my-0 mx-auto">
                            <div className="transition-image-wrapper">
                              <div className="transition-image-block  beats-media-type-image   ">
                                <picture className='beats-picture pdp-picture pdp-hero-image-picture pdp-video-image'>
                                  <img src={item} alt={product[0].name} />
                                </picture>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div></>
                  ))}
                </Suspense>
              ) : (
                <div>Loading...</div>
              )}
              <div className="genericSpacing parbase section">
                <section className="bbd-component generic-spacing lg:pt-[120px]"></section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Description