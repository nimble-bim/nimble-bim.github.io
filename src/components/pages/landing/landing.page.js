import React from 'react';
import './landing.style.css';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    console.log('Loading landing page...');
  }

  render() {
    return (
      <div className="page page_landing">
        <PageHeader/>
      </div>
    );
  }
}

export const PageHeader = props => (
  <div className="app_header">
    <span className="app_title">Nimble</span>
    <span className="app_btn_signin">Sign In</span>
  </div>
)

export const LandingTitle = props => (
  <div className="page_landing_title_container">
    <div className="page_landing_title">We Make Working With Revit Easier</div>
    <span className="button_seemore">Click To See More</span>
  </div>
)

export const RoundButton = props => {
  span.btn_color_bg
}
