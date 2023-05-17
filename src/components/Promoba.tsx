import React from 'react'

const Promoba = (props: any) => {
  return (
    <section className="promobar promobar--light" data-analytics-module="Promo Bar - Primary" data-initialized="true">
        <div className="promobar__single-container">
            <div className="promo-item ">
                <div className="rte-container">
                    <div className="show-desktop">
                        <p></p><p><a href="https://www.apple.com/shop/shipping-pickup" target="_blank" data-analytics-click="true" data-analytics-link-type="cta" data-analytics-label="delivery-fast-free" data-aria-label-prefix="Fast and free delivery﻿ - Learn More">{props.title}<i className="fa fa-external-link" style={{verticalAlign: 'middle', marginLeft: '0.33em'}} aria-hidden="true"></i></a></p>
                        <p></p>
                    </div>
                    <div className="show-tablet">
                        <p></p><p><a href="https://www.apple.com/shop/shipping-pickup" target="_blank" data-analytics-click="true" data-analytics-link-type="cta" data-analytics-label="delivery-fast-free" data-aria-label-prefix="Fast and free delivery﻿ - Learn More">{props.title}<i className="fa fa-external-link" style={{verticalAlign: 'middle', marginLeft: '0.33em'}} aria-hidden="true"></i></a></p>
                        <p></p>
                    </div>
                    <div className="show-mobile">
                        <p></p><p><a href="https://www.apple.com/shop/shipping-pickup" target="_blank" data-analytics-click="true" data-analytics-link-type="cta" data-analytics-label="delivery-fast-free" data-aria-label-prefix="Fast and free delivery﻿ - Learn More">{props.title}<i className="fa fa-external-link" style={{verticalAlign: 'middle', marginLeft: '0.33em'}} aria-hidden="true"></i></a></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Promoba