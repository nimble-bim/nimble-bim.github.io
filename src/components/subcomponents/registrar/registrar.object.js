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

        <div className="registrar__info">
          <div className="info__firstname"></div>
          <div className="info__lastname"></div>
          <div className="info__email"></div>
        </div>
        
        <div className="registrar__button">
          <span className="button__register">Register</span>
          <span className="button__cancel">Cancel</span>
        </div>

      </div>
    )
  }
}
