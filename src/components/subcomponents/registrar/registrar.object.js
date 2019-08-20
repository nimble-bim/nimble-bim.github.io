import React from 'react';
import { RoundedButton } from '../buttons/buttons.object';
import './registrar.desktop.scss';
import './registrar.mobile.scss';

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
        </div>
        
        <div className="registrar__button">
          {/* <span className="button__register">Register</span> */}
          <RoundedButton text="Register" modifier="register" />
        </div>

      </div>
    )
  }
}
