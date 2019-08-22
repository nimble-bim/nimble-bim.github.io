import React from 'react';
import Blurb from '../blurb/blurb.object';

const Feature = props => {
  const { fNumber, subtitle, title, content } = props.feature;

  return (
    <div className="feature">
      <div className="feature__number">{ fNumber }</div>
      <div className="feature__content">

        <div className="content__summary">
          <Blurb 
            blurb_subtitle={ subtitle }
            blurb_title={ title }
            blurb_content={ content }
          />
        </div>
        <div className="content__image"></div>
        <div className="content__next"></div>

      </div>
      <div className="feature__navigation"></div>
    </div>
  )
}

export default Feature;