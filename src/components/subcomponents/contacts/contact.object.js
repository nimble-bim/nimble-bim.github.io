import React from 'react';
import './contact.mobile.scss'
import './contact.desktop.scss'

export const Contact = (props) => (
  <ul className="contact">
    <li className="contact__type">{props.contact_type}</li>
    <li className="contact__info">{props.contact_info}</li>
  </ul>
)