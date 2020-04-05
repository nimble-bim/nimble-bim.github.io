import React from "react";
import "./home.mobile.scss";
import "./home.desktop.scss";
import { Button } from "../../subcomponents/buttons/buttons.object";
import { Card } from "../../subcomponents/cards/cards.object";

//images
import img_card01 from "../../img/folder-man.svg";
import img_card02 from "../../img/active_options.svg";
import img_card03 from "../../img/break_fix.svg";

import Registrar from "../../subcomponents/registrar/registrar.object";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    console.log("Issa home page");
  }
  render() {
    //----header content----
    const header_content = `Welcome to the future, we’ve been waiting for you.

    Get work done faster and fix things before they break - with Nimble.`;

    return (
      <div className="page">
        <div className="home header">
          <div className="header__container">
            <h1 className="header__email">Working With Revit Made Easy</h1>
          </div>
          <div className="section__divider" />
          <div className="header__container">
            <span className="tagline">Advance Further, Faster</span>
            <p className="header__content">{header_content}</p>
            <Button href="/try" text="Download" modifier="primary" />
          </div>
        </div>
        <div className="home cards">
          <div className="cards__title">
            <span className="tagline">How it works</span>
            <h2 className="cards__title-text">Behind the Magic of Nimble</h2>
          </div>
          <div>
            <div className="cards__container">
              <Card
                image={img_card01}
                title="Register and Get Your Copy of Nimble"
                no="01"
                text="Much of that change is being driven by huge strides in technology since the start of the 21st century. However, for many in the architectural services industry, we‘ve found that much of that progress hasn’t made its way over. Sure, we’ve got drones and laser scanning on the Construction Side, along with some Virtual/Augmented Reality tech but for the average designer, it’s still 1999."
              />
              <Card
                image={img_card02}
                title="We Run in the Background of Revit"
                no="02"
                text="Much of that change is being driven by huge strides in technology since the start of the 21st century. However, for many in the architectural services industry, we‘ve found that much of that "
              />
              <Card
                image={img_card03}
                title="If You Break It, We Fix It"
                no="03"
                text="Much of that change is being driven by huge strides in technology since the start of the 21st century. However, for many in the architectural services industry, we‘ve found that much of that progress hasn’t made its way over. Sure, we’ve got drones and laser erage designer, it’s still 1999."
              />
            </div>
          </div>
        </div>

        <Registrar />
      </div>
    );
  }
}
