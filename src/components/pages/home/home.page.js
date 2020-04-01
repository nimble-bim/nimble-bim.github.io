import React from "react";
import "./home.mobile.scss";
import "./home.desktop.scss";
import { DLButton } from "../../subcomponents/buttons/buttons.object";
import { Card } from "../../subcomponents/cards/cards.object";

//images
import img_card01 from "../../img/folder-man.svg";
import img_card02 from "../../img/active_options.svg";
import img_card03 from "../../img/break_fix.svg";

import Blurb from "../../subcomponents/blurb/blurb.object";
import Stats from "../../subcomponents/stats/stats.object";
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

    const statHeaderContent =
      "We’ve streamlined this process to eliminate fees, unnecessary steps, and time-wasting appointments. Our efficiency not only makes it easier to buy a home, it translates into the best rates available.";

    //-------registration content-------

    const stats_title = "Wouldn’t It Be Nice To Go Home On Time For Once?";
    const register_title = "Try It For Free";

    const register_content =
      "Nimble is currently in limited beta. Register below to get access to the blah blah thing.";
    const stats = [
      {
        number: "0",
        desc: "Amount of knowledge of BIM necessary"
      },
      {
        number: "20K",
        desc: "Amount of knowledge of BIM necessary"
      }
    ];

    return (
      <div className="page">
        <div className="home header">
          <div className="header__container">
            <h1 className="header__title">Working With Revit Made Easy</h1>
          </div>
          <div className="section__divider" />
          <div className="header__container">
            <span className="tagline">Advance Further, Faster</span>
            <p className="header__content">{header_content}</p>
            <DLButton />
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
                title="Download the Installer"
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

        <div className="home">
          <span className="tagline">Why Use Nimble?</span>
          <div className="registration">
            <div className="section section__stats">
              <Blurb
                blurb_title={stats_title}
                blurb_content={statHeaderContent}
              />
              <Stats info={stats} />
            </div>

            <div className="section__divider"></div>

            <div className="section section__register">
              <Blurb
                blurb_title={register_title}
                blurb_content={register_content}
              />
              <Registrar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
