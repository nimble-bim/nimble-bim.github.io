import React from 'react';
import './registrar.style.scss';

export default class Registrar extends React.Component {
  constructor(props) {
    super(props);
    console.log('Creating registration subcomponent');
  }

  render() {
    return (
      <div className="registrar">

        <div className="registrar_info">
          <div className="info_firstname"></div>
          <div className="info_lastname"></div>
          <div className="info_email"></div>
        </div>
        
        <div className="registrar_button">
          <span className="button_register">Register</span>
          <span className="button_cancel">Cancel</span>
        </div>

      </div>
    )
  }
}
