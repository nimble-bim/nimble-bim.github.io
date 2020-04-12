import React from 'react';
import './blurb.style.scss';

const Blurb = (props) => {
  return props.blurb_subtitle 
    ? <SubtitledBlurb { ...props } />
    : <UntitledBlurb {...props} />
}


const SubtitledBlurb = props => (
  <div className="blurb">
    <p className="tagline">{props.blurb_subtitle}</p>
    <h2 className="blurb__title">{props.blurb_title}</h2>
    <p className="blurb__content">{props.blurb_content}</p>
  </div>
)

const UntitledBlurb = props => (
  <div className="blurb">
    <h2 className="blurb__title">{props.blurb_title}</h2>
    <p className="blurb__content">{props.blurb_content}</p>
  </div>
)

export default Blurb;