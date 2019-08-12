import React from 'react';
import './howitworks.style.scss';
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
          blurb_type="How It Works"
          blurb_title="Design At Light Speed"
          blurb_content="Stuff..."
        />
      </div>
    )
  }
}
