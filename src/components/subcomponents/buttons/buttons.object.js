import React from "react";
import "./buttons.style.scss";

export const Button = props => (
  <span className={`button button_${props.modifier}`}>{props.text}</span>
);

export const RoundedButton = props => (
  <span className={`button button_round button_${props.modifier}`}>
    {props.text}
  </span>
);

export const TryButton = props => (
  <RoundedButton text="Try Now" modifier="primary" />
);

export const DLButton = props => (
  <Button text="Download Now" modifier="primary" />
);

export const HowButton = props => (
  <RoundedButton text="How It Works" modifier="secondary" />
);
