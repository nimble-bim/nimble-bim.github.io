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
        
        <div className="section page_number">

        </div>

        <div className="section page_content">

        </div>

        <div className="section page_buttons">

        </div>

      </div>
    )
  }
}
