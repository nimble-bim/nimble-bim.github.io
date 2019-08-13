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
        <div className="number"></div>
        <div className="content"></div> 
        <div className="buttons"></div>

      </div>
    )
  }
}
