import React from 'react'
import {ButtonWhite} from '../../components'

const Special = () => {
  return (
    <div className="section">
      <div className="bbd-component bbd-full-width-container">
        <div className="outer-container">
          <div className="content-container">
            <div>
              <div className="imageAndText section">
                <div className="bbd-component transition bbd-img-text-component animate">
                  <div className="content-wrapper mobile-full-height-config tablet-full-height-config  sticky-text ">
                    <div className="transition-image-wrapper">
                      <div className="transition-image-block  beats-media-type-image   ">
                        <picture className='beats-picture pdp-picture pdp-hero-image-picture pdp-video-image'>
                          <img src="https://www.beatsbydre.com/content/dam/beats/web/home/2022/10/hp-full-width-media--KK.jpg.large.2x.jpg" alt="" />
                        </picture>
                      </div>
                    </div>
                    <div className="transition-content-wrapper overlay-text-block ">
                      <div className="content-column bottom-left-wrapper">
                        <div className="hero-copy bottom-left">
                          <div className="show-desktop">
                            <div className="font-updated">
                              <h1 className=" text-[min(80px,max(37px,5.55555vw+10px))] font-bold uppercase leading-[0.83] tracking-[-1px] ">
                                <span className=" md:text-[1rem] text-[1.25rem]">New Colors</span>
                              </h1>
                              <picture className='tempClasstoTestParser'>
                                <img src="https://www.beatsbydre.com/content/dam/beats/global/logos/kimk-logo.png.large.2x.png" className='max-w-[370px] mb-6' alt="" />
                              </picture>
                              <h2 className="text-[1.375rem] tracking-[-0.2px] font-normal">Special Edition Beats Fit Pro</h2>
                              <p className="font-bold text-[1.375rem] leading-[1.38] m-[39px_0_-1px_0] tracking-[-0.2]">$199.99</p>
                            </div>
                          </div>
                          <div className="bbd-component beats-cta-container beats-cta-container--align-left text-black">
                            <ButtonWhite title="LEARN MORE" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Special