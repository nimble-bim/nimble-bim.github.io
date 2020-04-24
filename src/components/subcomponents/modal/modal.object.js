import React, { Component } from "react";
import img_mail from "../../img/mail.svg";
import { Button } from "../../subcomponents/buttons/buttons.object";
import "./modal.style.scss";

export class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ `modal modal__${this.props.display}` }>
        <div className="modal__card">
          <div className="modal__title">
            <h2 className="modal__title-text">Thank You!</h2>
            <img className="modal__title-img" src={img_mail} alt="" />
            <p>We will keep you posted when we launch our next beta.</p>
            <Button href="/try" text="Okay" modifier="secondary" />
          </div>
        </div>
      </div>
    );
  }
}
