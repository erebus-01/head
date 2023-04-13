import React from 'react'
import ProductList from './ShopComponents/ProductList'
import TitleType from './ShopComponents/TitleType'
import Type from './ShopComponents/Type'
import Holyday from './HomeComtopents/Holyday'

const Shop = () => {
  return (
    <div id="main">
      <div className="bs-3">
        <div className="bs3-pdp">
          <div>
            <Type />
            <TitleType />
            {/* <div className="section">
              <section className="bbd-component bbd-full-width-container id-ae5707b7-8f33-3479-8b7d-29d30bf6f428">
                <div className="outer-container">
                  <div className="content-container">
                    <div> */}
                      <ProductList />
                      <ProductList />
                      <ProductList />
                    {/* </div>
                  </div>
                </div>
              </section>
            </div> */}
            <TitleType />
            <ProductList />
            <ProductList />
            <ProductList />
            <Holyday />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop