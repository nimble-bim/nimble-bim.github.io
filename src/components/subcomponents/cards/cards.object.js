import React from "react";
import "./cards.style.scss";

export const Card = props => (
  <div className="card">
    <div className="card__image">
      <img className="card__image-frame" src={`${props.image}`} alt="" />
    </div>
    <div className="card__content">
      <h1 className="card__number-title">{props.no}</h1>
      <h4 className="card__title">{props.title}</h4>
    </div>
    <div className="card__content">
      <p className="card__number-text">{props.notext}</p>
      <p className="card__text">{props.text}</p>
    </div>
  </div>
);
