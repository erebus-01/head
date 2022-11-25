import React from 'react'
import ProductList from './ShopComponents/ProductList'
import TitleType from './ShopComponents/TitleType'
import Type from './ShopComponents/Type'

const Shop = () => {
  return (
    <div id="main">
      <div className="bs-3">
        <div className="bs3-pdp">
          <div>
            <Type />
            <TitleType />
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop