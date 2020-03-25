import React from "react";
import "./cards.style.scss";

export const Card = props => (
  <div className="card">
    <div className="card__image">
      <img className="card__image-frame" src={`${props.image}`} alt="" />
    </div>
    <h4 className="card__title">{props.title}</h4>
    <div className="card__content">
      <div className="card__number">
        <h2 className="card__number-title">{props.no}</h2>
        <p className="card__number-text">{props.notext}</p>
      </div>
      <p className="card__text">{props.text}</p>
    </div>
  </div>
);
