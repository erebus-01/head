import React from 'react'
import { ButtonTransparent, ButtonWhite } from '../../components'

const Lebron = () => {
  return (
    <div className="section">
      <section className="bbd-component bbd-full-width-container lg:bg-black">
        <div className="outer-container">
          <div className="content-container">
            <div>
              <div className="imageAndText section">
                <section className="bbd-component transition bbd-img-text-component animate">
                  <div className="content-wrapper mobile-full-height-config tablet-full-height-config  sticky-text ">
                    <div className="transition-image-wrapper">
                      <div className="transition-image-block   beats-media-type-video  ">
                        <div className="video-wrapper relative top-0 left-0 m-0">
                          <div className="beats-video-block desktop-light tablet-light mobile-light  ">
                            <div className="video-block w-full relative">
                              <img className='w-full' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/6fad1e156032789.63600012e2c0f.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="transition-content-wrapper overlay-text-block  beats-full-video-variant ">
                      <div className="content-column  bottom-left-wrapper">
                        <div className="hero-copy bottom-left">
                          <div className="show-desktop">
                            <div className="font-updated">
                              <h1 className="text-[clamp(4rem,_5rem,_6rem)] mb-5 font-bold uppercase tracking-[-1px] leading-[0.83] relative left-[-4px]">LEBRON & BRONNY</h1>
                              <p className="font-bold mb-[1em] text-[1.563em] leading-[1.38] tracking-[-1px] mt-[-10px]">Powered by Beats Fit Pro</p>
                            </div>
                          </div>
                          <div className="bbd-component beats-cta-container beats-cta-container--align-left">
                            <div className="button-container   ">
                              <ButtonWhite title='SHOP' />
                              <div className="text-inverse ml-5" >
                                <ButtonTransparent title='WATCH THE FILM' />
                              </div>
                            </div>
                          </div>
                        </div>
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
  )
}

export default Lebron