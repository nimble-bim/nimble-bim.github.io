import React from 'react';
import './buttons.style.scss';

export const RoundedButton = props => (
  <span className={`button button_round button_${props.modifier}`}>
    {props.text}
  </span>
);

export const TryButton = props => (
  <RoundedButton text="Try" modifier="try" />
)

export const HuhButton = props => (
  <RoundedButton text="Huh?" modifier="huh" />
);

