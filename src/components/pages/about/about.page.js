import React from "react";
import text_about from "./about.content";
import { Button } from "../../subcomponents/buttons/buttons.object";

import "./about.desktop.scss";
import "./about.mobile.scss";

import ContactData from "../../../data/data.contacts.json";
import { ContactList } from "../../subcomponents/contacts/contacts.object";

import { SectionTitle } from "../../subcomponents/misc/organizational.object";

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("Issa About page!");
  }

  renderContactData() {
    const data = <ContactList contacts={ContactData.contacts} />;

    return data;
  }

  render() {
    const contact_data = this.renderContactData();
    const text_mission = `“We want to use technology to make architectural design faster; our goal is to make building better.”`;

    return (
      <div className="page">
        <div className="about">
          <div className="about__mission about__container">
            <SectionTitle section="Our Mission" />
            <h3 className="about__mission-text">{text_mission}</h3>
            <Button href="/try" text="Download Trial" modifier="primary" />
          </div>

          <div className="about__content about__container">
            <SectionTitle section="About Us" />
            <div className="content__summary">
              <h1 className="content__title">
                Bringing Architecture Into the 21st Century
              </h1>
              <h3 className="content__subtitle">
                The world is changing fast and architecture needs to catch up.
              </h3>
              <p className="content__text">{text_about}</p>
              <h3 className="content__subtitle">
                Welcome to the future — we’ve been waiting for you.
              </h3>
            </div>
          </div>

          <div className="about__column">
            <div className="about__contact about__container">
              <SectionTitle section="Contact Us" />
              <h3 className="contact__text">{contact_data}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
