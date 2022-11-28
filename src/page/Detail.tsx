import React from 'react'
import StayUpOn from '../components/StayUpOn'
import AllDetails from './DetailComponents/AllDetails'
import Description from './DetailComponents/Description'
import ImageColor from './DetailComponents/ImageColor'
import ListSpecial from './DetailComponents/ListSpecial'
import SpecialBuild from './DetailComponents/SpecialBuild'

const Detail = () => {
  return (
    <div id="main">
      <div className="bs3">
        <div className="bs3-pdp">
          <ImageColor />
          <SpecialBuild />
          <ListSpecial />
          <AllDetails />
          <Description />
          <StayUpOn />
        </div>
      </div>
    </div>
  )
}

export default Detail