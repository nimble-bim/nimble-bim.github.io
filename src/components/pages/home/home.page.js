import React from 'react';
import { TryButton, HowButton } from '../../subcomponents/buttons/buttons.object';
import './home.desktop.scss';
import './home.mobile.scss';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    console.log('Issa home page');
  }

  render() {
    const cta_content = 
      `Experience a better way to design.
      
      Design, collaborate and fix things before they break - with Nimble.`

    return (
      <div className="page page_home home">

        <div className="home__cta">
          <span className="cta__tagline">Advance Further, Faster</span>
          <h1 className="cta__title">We Make Working With Revit Easier</h1>
          <p className="cta__content">
            {cta_content}
          </p>
          <div className="cta__buttons">
            <TryButton />
            <HowButton />
          </div>
        </div>
        
        <div className="home__video" />

      </div>
    )
  }
}
