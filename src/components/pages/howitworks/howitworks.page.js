import React from 'react';
import './howitworks.style.scss';
import Blurb from '../../subcomponents/blurb/blurb.object';

export default class HowItWorks extends React.Component{
  constructor(props) {
    super(props);
    console.log('Loading how it works page...');
  }

  render() {
    return (
      <div className="page page_howitworks">
        <div className="number">01</div>
        <div className="content">
          <div className="cont_text">something</div>
          <div className="cont_image">pic</div>
          <div className="cont_more">more</div>
          </div> 
        <div className="buttons">
          <div className="button_try">Try</div>
          <div className="button_huh">Huh?</div>
        </div>


      </div>
    )
  }
}
