import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - kiriiwashere.github.io</title>
        <meta property="og:title" content="Page - kiriiwashere.github.io" />
      </Helmet>
      <div className="page-container1">
        <h1>Oh wow welcome to this page</h1>
        <span className="page-text1">lets see.... have these ig?</span>
        <img
          alt="image"
          src="/playground_assets/2020_02_01_08_28_img_1733-300w.jpg"
          className="page-image"
        />
      </div>
    </div>
  )
}

export default Page
