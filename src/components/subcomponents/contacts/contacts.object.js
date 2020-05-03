import React from 'react';
import './contacts.style.scss';

const Contact = (props) => {
  const { contact_type, contact_info, contact_link } = props;
  const link = formatLink(contact_type, contact_link);

  console.log(link);
  return (
    <ul className="contact">
      <li className="contact__type">{ contact_type }</li>
      <a href={ link } target="_blank">
        <li className="contact__info">{ contact_info }</li>
      </a>
    </ul>
  )
}

export const ContactList = (props) => {
  const contact_list = props.contacts 
    ? props.contacts.map(c => <Contact contact_type={c.contact_type} contact_info={c.contact_info} contact_link={c.contact_link} /> )
    : <li></li>

  return (
    <div className="contacts">
      <ul className="contacts__list">
        { contact_list }
      </ul>
    </div>
  )
}

function formatLink(type, info) {
  let link = '';
  switch(type) {
    case 'Email':
      link = `mailto:${info}`;
      break;

    case 'Instagram':
      link = `${info}`;
      break;

    case 'Twitter':
      link = `${info}`;
      break;

    default:
      break;
  }

  return link;
}