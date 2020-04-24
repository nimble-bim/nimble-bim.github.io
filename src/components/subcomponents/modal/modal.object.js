import React, { Component, useState, useEffect } from "react";
import img_mail from "../../img/mail.svg";
import { Button } from "../../subcomponents/buttons/buttons.object";
import "./modal.style.scss";

export function Modal({ onClick, status }) {
  // const [status, setStatus] = useState(true);

  let display = status ? "show" : "hide";

  return (
    <div className={`modal modal__${display}`}>
      <div className="modal__card">
        <div className="modal__title">
          <h2 className="modal__title-text">Thank You!</h2>
          <img className="modal__title-img" src={img_mail} alt="" />
          <p>We will keep you posted when we launch our next beta.</p>
          <Button onClick={onClick} text="Okay" modifier="secondary" />
        </div>
      </div>
    </div>
  );
}
