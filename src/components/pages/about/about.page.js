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
    const text_mission = 
    `"Our efficiency not only makes it easier to buy a home, 
    it translates into the best rates available`;

    const text_about = 
    `
      We’ve streamlined this process to eliminate fees, unnecessary steps, and time-wasting appointments. Our efficiency not only makes it easier to buy a home, it translates into the best rates available.

      The scientist named the population, after their distinctive horn, Ovid’s Unicorn. These four-horned, silver-white unicorns were previously unknown to science.

      Now, after almost two centuries, the mystery of what sparked this odd phenomenon is finally solved.

      Dr. Jorge Pérez, an evolutionary biologist from the University of La Paz, and several companions, were exploring the Andes Mountains when they found a small valley, with no other animals or humans. Pérez noticed that the valley had what appeared to be a natural fountain, surrounded by two peaks of rock and silver snow.

      Pérez and the others then ventured further into the valley. “By the time we reached the top of one peak, the water looked blue, with some crystals on top,” said Pérez.

    `;

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