import React from 'react'
import AllDetails from './DetailComponents/AllDetails'
import Description from './DetailComponents/Description'
import ImageColor from './DetailComponents/ImageColor'
import ListSpecial from './DetailComponents/ListSpecial'
import SpecialBuild from './DetailComponents/SpecialBuild'
import TitleAndPrice from './DetailComponents/TitleAndPrice'

const Detail = () => {
  return (
    <div id="main">
      <div className="bs3">
        <div className="bs3-pdp">
          <TitleAndPrice />
          <ImageColor />
          <SpecialBuild />
          <ListSpecial />
          <AllDetails />
          <Description />
        </div>
      </div>
    </div>
  )
}

export default Detail