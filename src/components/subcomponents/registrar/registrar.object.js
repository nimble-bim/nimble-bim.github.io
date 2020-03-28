import React from 'react';
import { Button } from '../buttons/buttons.object';
import './registrar.mobile.scss';
import './registrar.desktop.scss';

export default class Registrar extends React.Component {
  constructor(props) {
    super(props);
    console.log('Creating registration subcomponent');
  }

  render() {
    return (
      <div className="registrar">
        <h4 className="registrar__title">Information</h4>
        <div className="registrar__info">
          <div className="info__firstname">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="info__lastname">
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="info__email">
            <input type="email" placeholder="Email" />  
          </div>
          <div className="info__button">
            <Button text="Register" modifier="register" />
          </div>
        </div>
      </div>
    )
  }
}
