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
          <div className="cont_text">
            <Blurb
              blurb_subtitle="How It Works"
              blurb_title="Design At Light Speed"
              blurb_content="We've streamlined this process to eliminate fees, unnecessary steps, and time-wasting appointments. Our efficiency not only makes it easier to buy a home, it translates into the best rates available."
              />
          </div>
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
