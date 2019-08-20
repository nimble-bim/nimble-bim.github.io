import React from 'react';
import text_about from './about.content';
import './about.desktop.scss';
import './about.mobile.scss';

import { SectionTitle } from '../../subcomponents/misc/organizational.object';

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("Issa About page!");
  }

  render() {
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
            { text_mission }
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

export const ContactList = (props) => {
  const contact_list = props.contacts 
    ? props.contacts.map(c => <Contact contact_type={c.contact_type} contact_info={c.contact_info} /> )
    : <li></li>

  return (
    <div className="contacts">
      <ul className="contacts__list">
        { contact_list }
      </ul>
    </div>
  )
}

export const Contact = (props) => (
  <div className="contact">
    <span className="contact__type">{props.contact_type}</span>
    <span className="contact__info">{props.contact_info}</span>
  </div>
)