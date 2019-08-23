import React from 'react';
import Feature from '../../subcomponents/feature/feature.object';
import './howitworks.desktop.scss';
import './howitworks.mobile.scss';

export default class HowItWorks extends React.Component{
  constructor(props) {
    super(props);
    console.log('Loading how it works page...');
    this.currentFeatureIndex = 0;
  }

  loadFeatures() {
    const a_summary = `We’ve streamlined this process to eliminate fees, unnecessary steps, and time-wasting appointments. Our efficiency not only makes it easier to buy a home, it translates into the best rates available.`;
    const features = [
      {
        fNumber: "01",
        subtitle: "How It Works",
        title: "See Results In Your Model",
        content: a_summary,
        image: './howitworks.image.jpg'
      }
    ]

    return features;
  }

  render() {
    const feature = this.loadFeatures()[this.currentFeatureIndex];

    return (
      <div className="page page_howitworks">
        
        {/* <div className="howitworks__feature"> */}
          <Feature feature={ feature } />
        {/* </div> */}

      </div>
    )
  }
}
