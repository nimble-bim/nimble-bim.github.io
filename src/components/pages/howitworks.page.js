import React from 'react';
import './howitworks.style.css';
import Blurb from '../subcomponents/blurb/blurb.object';

export default class HowItWorks extends React.Component{
  constructor(props) {
    super(props);
    console.log('Loading how it works page...');
  }

  render() {
    return (
      <div className="page page_howitworks">
        <Blurb 
          blurbType="How It Works"
          blurbTitle="Design At Light Speed"
          blurbContent="Stuff..."
        />
      </div>
    )
  }
}
