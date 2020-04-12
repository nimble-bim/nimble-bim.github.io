import React from "react";
import "./buttons.style.scss";

export const FormButton = props => (
  <button className={`button button_${props.modifier}`}>{props.text}</button>
);

export const Button = props => (
  <a href={props.href} className={`button button_${props.modifier}`}>{props.text}</a>
);

export const RoundedButton = props => (
  <span className={`button button_round button_${props.modifier}`}>
    {props.text}
  </span>
);