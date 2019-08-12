import React from 'react';
import './home.style.scss';
import { TryButton, HuhButton } from '../../subcomponents/buttons/buttons.object';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    console.log('Issa home page');
  }

  render() {
    return (
      <div className="page page_home home">
        
        <div className="home_cta">
          <h1 className="cta_title">We Make Working With Revit Easier</h1>
          <p className="cta_button">
            Click To See How
          </p>
        </div>
        
        <div className="home_buttons">
          <TryButton className="buttons_try"/>
          <HuhButton className="buttons_huh"/>
        </div>
      </div>
    )
  }
}