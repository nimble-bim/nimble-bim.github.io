import React from "react";
import Registrar from "../../subcomponents/registrar/registrar.object";

export default class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("Issa registration page");
  }

  render() {
    return <Registrar />;
  }
}
