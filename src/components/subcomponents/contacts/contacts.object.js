import React from 'react';
import { Contact } from './contact.object';
import './contacts.mobile.scss'
import './contacts.desktop.scss'

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