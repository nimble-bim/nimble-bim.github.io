import React from 'react';
import './blurb.style.css';

const Blurb = (props) => (
  <div className="blurb_container">
    <p className="blurb_type">{props.blurbType}</p>
    <h1 className="blurb_title">{props.blurbTitle}</h1>
    <p className="blurb_content">{props.blurbContent}</p>
  </div>
)

export default Blurb;