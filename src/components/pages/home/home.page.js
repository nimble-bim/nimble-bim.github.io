import React from 'react';
import { TryButton, HuhButton } from '../../subcomponents/buttons/buttons.object';
import './home.desktop.scss';
import './home.mobile.scss';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    console.log('Issa home page');
  }

  render() {
    const cta_content = 
      `We’ve streamlined this process to eliminate fees, 
      unnecessary steps, and time-wasting appointments. 
      Our efficiency not only makes it easier to buy a home, 
      it translates into the best rates available.`

    return (
      <div className="page page_home home">

        <div className="home__cta">
          <h1 className="cta__title">We Make Working With Revit Easier</h1>
          <p className="cta__content">
            {cta_content}
          </p>
          <div className="cta__buttons">
            <TryButton />
            <HuhButton />
          </div>
        </div>
        
        <div className="home__video" />

      </div>
    )
  }
}