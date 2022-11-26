import React from 'react'
import ProductItems from './Collaborations/ProductItems'
import Title from './Collaborations/Title'
import Holyday from './HomeComtopents/Holyday'

const Collaborations = () => {
  return (
    <div id="main">
    <div className="bs-3">
      <div className="bs3-pdp">
        <div>
          <Title />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <Title />
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <Holyday />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Collaborations