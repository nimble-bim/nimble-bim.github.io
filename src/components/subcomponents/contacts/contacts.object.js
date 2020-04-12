import React from 'react';
import './contacts.style.scss';

const Contact = (props) => (
  <ul className="contact">
    <li className="contact__type">{props.contact_type}</li>
    <li className="contact__info">{props.contact_info}</li>
  </ul>
)

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