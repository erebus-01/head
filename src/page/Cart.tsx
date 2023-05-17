import React from 'react'
import StayUpOn from '../components/StayUpOn'
import ProductItems from './CartComponents/ProductItems'
import Title from './CartComponents/Title'
import TotalPrice from './CartComponents/TotalPrice'
import { Promoba } from '../components'

const Cart = () => {
  return (
    <div id="bag-container">
      <div className="rs-bag">
        <Promoba title="Fast And Free Delivery" />
        <div className="rs-bag-content as-l-container rs-zoom-content">
          <Title />
          <ol className="rs-bag-items rs-iteminfos">
            <ProductItems />
            <ProductItems />
          </ol>
          <TotalPrice />
        </div>
        <StayUpOn />
      </div>
    </div>
  )
}

export default Cart