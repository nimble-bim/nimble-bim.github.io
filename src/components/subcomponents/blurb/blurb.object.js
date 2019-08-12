import React from 'react';
import './blurb.style.scss';

const Blurb = (props) => (
  <div className="blurb">
    <p className="blurb_subtitle">{props.blurb_subtitle}</p>
    <h1 className="blurb_title">{props.blurb_title}</h1>
    <p className="blurb_content">{props.blurb_content}</p>
  </div>
)

export default Blurb;