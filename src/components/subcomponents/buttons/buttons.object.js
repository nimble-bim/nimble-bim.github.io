import React from 'react';
import './buttons.style.scss';

export const RoundedButton = props => (
  <span className={`button button_round button_${props.modifier}`}>
    {props.text}
  </span>
);

export const TryButton = props => (
  <RoundedButton text="Try Now" modifier="try" />
)

export const HowButton = props => (
  <RoundedButton text="How It Works" modifier="hiw" />
);

