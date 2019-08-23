import React from 'react';
import './blurb.desktop.scss';
import './blurb.mobile.scss';

const Blurb = (props) => {
  return props.blurb_subtitle 
    ? <SubtitledBlurb { ...props } />
    : <UntitledBlurb {...props} />
}

const SubtitledBlurb = props => (
  <div className="blurb">
    <p className="blurb_subtitle">{props.blurb_subtitle}</p>
    <h1 className="blurb_title">{props.blurb_title}</h1>
    <p className="blurb_content">{props.blurb_content}</p>
  </div>
)

const UntitledBlurb = props => (
  <div className="blurb">
    <p className="blurb_subtitle_empty"></p>
    <h1 className="blurb_title">{props.blurb_title}</h1>
    <p className="blurb_content">{props.blurb_content}</p>
  </div>
)

export default Blurb;