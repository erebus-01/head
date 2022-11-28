import React from 'react'
import StayUpOn from '../components/StayUpOn'
import ContentBlog from './BlogComponents/ContentBlog'
import TopBlog from './BlogComponents/TopBlog'

const Blog = () => {
  return (
    <div id="main">
      <div id="maincontent">
        <div className="bs3">
          <div className="bs3-pdp">
            <div>
              <TopBlog />
              <ContentBlog />
              <StayUpOn />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog