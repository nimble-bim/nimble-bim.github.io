import React from "react";
import "./home.mobile.scss";
import "./home.desktop.scss";
import { Button } from "../../subcomponents/buttons/buttons.object";
import { Card } from "../../subcomponents/cards/cards.object";

//images
import img_card01 from "../../img/folder-man.svg";
import img_card02 from "../../img/active_options.svg";
import img_card03 from "../../img/break_fix.svg";
import img_main from "../../img/nimbleMain.png";

import Registrar from "../../subcomponents/registrar/registrar.object";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    console.log("Issa home page");
  }

  render() {
    const header_title = `Design, Innovate & Collaborate Faster`;
    const header_sub = `Save time creating mistake free models with Nimble's AI-powered design assistant`;

    return (
      <div className="page">

        <section className="home">
          <div className="home__header">
            <div className="header__container">
              <h1 className="header__title">
                { header_title }
              </h1>
              <p className="header__content">
                { header_sub }
              </p>
              <Button href="/try" text="Start Working Faster" modifier="primary" />
            </div>
            <div className="header__container"><img className="header__image" src={img_main} alt="nimble-show" /></div>
          </div>  
        </section>
        
        <section>
          <div className="home cards">
            <div className="cards__title">
              <span className="tagline">How it works</span>
              <h2 className="cards__title-text">Behind the Magic of Nimble</h2>
            </div>
            <div>
              <div className="cards__container">
                <Card
                  image={img_card01}
                  title="We Run In The Background of Revit"
                  no="01"
                  notext="Background Monitoring System"
                  text="Nimble acts as a safety net for users working in Revit. It understands Revit’s rules and, over time, the user’s workflow. It constantly finds ways to bridge the gap between the two making working in Revit easier."
                />
                <Card
                  image={img_card02}
                  title="We Help You Recognize Chances To Improve"
                  no="02"
                  notext="In-Model Notification System"
                  text="Much of that change is being driven by huge strides in technology since the start of the 21st century. However, for many in the architectural services industry, we‘ve found that much of that "
                />
                <Card
                  image={img_card03}
                  title="If You Break It, We Fix It"
                  no="03"
                  notext="Proactive Support System"
                  text={[
                    "Nimble’s key feature",
                    <strong> Proactive Support System (PSS) </strong>,
                    "not only alerts users about key errors, but fixes those errors for you, too, helping you accomplish more in less time."
                  ]}
                />
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <Registrar />
        </section>
      
      </div>
    );
  }
}
