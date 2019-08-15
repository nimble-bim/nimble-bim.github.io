import React from 'react';
import './about.desktop.scss';
import './about.mobile.scss';

import { SectionTitle } from '../../subcomponents/misc/organizational.object';

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("Issa About page!");
  }

  render() {
    return (
      <div className="page page__about about">

        <div className="about__mission">
          <SectionTitle section="Our Mission" />
        </div>

        <div className="about__contact">
          <SectionTitle section="Contact Us" />
        </div>

        <div className="about__content">
          <SectionTitle section="About Us" />
        </div>

        <div className="about__news">
          <SectionTitle section="Recent News" />
        </div>
        <div className="about__timeline">
          <SectionTitle section="Timeline" />
        </div>

      </div>
    )
  }
}

export const ContactList = (props) => {
  const contact_list = props.contacts 
    ? props.contacts.map(c => <Contact contact_type={props.contact_type} contact_info={props.contact_info} /> )
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