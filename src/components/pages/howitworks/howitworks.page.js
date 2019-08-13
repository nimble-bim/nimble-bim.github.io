import React from 'react';
import Blurb from '../../subcomponents/blurb/blurb.object';
import './howitworks.style.scss';

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
          <div className="blurb">
            <Blurb 
              blurb_subtitle="How It Works"
              blurb_title="Design At Light Speed"
              blurb_content="Some content"
            />
          </div>
          <div className="image"></div>
          <div className="more"></div>
        </div>

        <div className="section page_buttons">

        </div>

      </div>
    )
  }
}
