import React from 'react'
import { withSiteData } from 'react-static'
import "../styles/index.css"

export default withSiteData(() => (
  <div className={"home"}>
    <h1>
      Welcome! This is Qi Shu
    </h1>
    <p>
      A students who loves thinking, analyzing and designing at the University of Waterloo
    </p>
  </div>
))
