import React from 'react';
import Blurb from '../blurb/blurb.object';
import './feature.desktop.scss'
import './feature.mobile.scss'

const Feature = props => {
  const { fNumber, subtitle, title, content } = props.feature;

  return (
    <div className="feature">
      <div className="feature__image"></div>
      <div className="feature__number">{ fNumber }</div>
      <div className="feature__summary">
        <Blurb 
          blurb_subtitle={ subtitle }
          blurb_title={ title }
          blurb_content={ content }
        />
      </div>
      <div className="feature__next">
        <p>Next</p>
      </div>
      <div className="feature__navigation"></div>
    </div>
  )
}

export default Feature;