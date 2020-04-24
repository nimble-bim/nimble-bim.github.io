import React from "react";
import Registrar from "../../subcomponents/registrar/registrar.object";
import "./registration.mobile.scss";
import "./registration.desktop.scss";

export default class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("Issa registration page");
  }

  render() {
    return (
      <div className="page">
        <Registrar />
      </div>
    );
  }
}
