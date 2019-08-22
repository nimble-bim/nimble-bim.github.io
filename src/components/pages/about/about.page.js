import React from 'react';
import text_about from './about.content';
import './about.desktop.scss';
import './about.mobile.scss';
import ContactData from '../../../data/data.contacts.json';
import { ContactList } from '../../subcomponents/contacts/contacts.object';

import { SectionTitle } from '../../subcomponents/misc/organizational.object';

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("Issa About page!");
  }

  renderContactData() {
    const data = <ContactList contacts= { ContactData.contacts } />

    return data;
  }

  render() {
    const contact_data = this.renderContactData();
    const text_mission = `“Our products are designed to make it easier to use BIM tools to make better buildings”`;

    return (
      <div className="page page__about about">

        <div className="about__mission">
          <SectionTitle section="Our Mission" />
          <h3 className="mission__text">
            { text_mission }
          </h3>
        </div>

        <div className="about__contact">
          <SectionTitle section="Contact Us" />
          <h3 className="contact__text">
            { contact_data }
          </h3>
        </div>

        <div className="about__content">
          <SectionTitle section="About Us" />
          <div className="content__summary">
            <h1 className="content__title">We Want To Take The AEC World Into The Future</h1>
            <p className="content__text">{ text_about }</p>
          </div>
        </div>

        {/* <div className="about__news">
          <SectionTitle section="Recent News" />
        </div>
        <div className="about__timeline">
          <SectionTitle section="Timeline" />
        </div> */}

      </div>
    )
  }
}
