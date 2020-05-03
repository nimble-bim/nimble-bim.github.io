import React from "react";
import SiteHelmet from "../../general/helmet";

import "./home.mobile.scss";
import "./home.desktop.scss";
import { Button } from "../../subcomponents/buttons/buttons.object";
import { Card } from "../../subcomponents/cards/cards.object";

//images
import img_card01 from "../../img/01_background.png";
import img_card02 from "../../img/02_improve.png";
import img_card03 from "../../img/03_breakfix.png";
// import img_card01 from "../../img/folder-man.svg";
// import img_card02 from "../../img/active_options.svg";
// import img_card03 from "../../img/break_fix.svg";
// import img_main from "../../img/nimbleMain.png";
// import img_video from "../../img/nimble_linter_2_.mp4";
// import img_card01 from "../../img/behind.svg";
// import img_card02 from "../../img/identify.svg";
// import img_card03 from "../../img/fix.svg";
import img_main from "../../img/nimble_screen.mp4";

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
            <div className="header__container header__text">
              <h1 className="header__title">
                { header_title }
              </h1>
              <p className="header__content">
                { header_sub }
              </p>
              <Button href="/try" text="Start Working Faster" modifier="primary" />
            </div>
            <div className="header__container">
              <video
                autoPlay="true"
                loop="true"
                muted="true"
                className="header__image"
              >
                <source
                  type="video/mp4"
                  src={img_main}
                />
              </video>
            </div>
          </div>  
        </section>
        
        <section className="home">
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
                  title="We Help You Identify Chances To Improve"
                  no="02"
                  notext="In-Model Notification System"
                  text="Mistakes happen and Nimble knows that. It scans models to catch simple mistakes before they pile up and prompts you when necessary on how to improve upon them — sort of like a lane departure warning for your car. "
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
        
        <section className="home" >
          <Registrar />
        </section>
      
      </div>
    );
  }
}
