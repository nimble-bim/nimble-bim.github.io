import React from "react";
import { Button } from "../buttons/buttons.object";
import { Modal } from "../modal/modal.object";
import Blurb from "../../subcomponents/blurb/blurb.object";
import Stats from "../../subcomponents/stats/stats.object";

import "./registrar.style.scss";

import firebase from "../../../firebase/firebase.js";

export default class Registrar extends React.Component {
  constructor(props) {
    super(props);
    console.log("Creating registration subcomponent");

    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      items: [],
      modal: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  showModal() {
    this.setState({ modal: true });
  }

  hideModal() {
    this.setState({ modal: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref("items");
    const item = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };
    itemsRef.push(item);
    this.setState({
      email: "",
      firstName: "",
      lastName: ""
    });
    this.showModal();
  }

  //Not ready
  componentDidMount() {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          email: items[item].email,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  // Not ready
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  render() {
    const statHeaderContent = [
      '"Nimble basically saved me about five hours worth of work in a few minutes. I went from tearing my hair out to having a beer an hour later!"',
      <br />,
      <br />,
      "—Dan Frehmeyer, BR+A Consulting Engineers"
    ];

    const stats_title = "Wouldn’t It Be Nice To Go Home On Time For Once?";
    const register_title = "Try It For Free";

    const register_content = [
      "We're out to help push the world into the future of construction, one user at a time. Nimble is currently in limited beta.",
      <br />,
      <br />,
      "Register below to get access to the world's best BIM behavioral analysis engine"
    ];
    const stats = [
      {
        number: "80%",
        desc: [
          "Of what a person learns they forget within an hour.",
          <br />,
          "Nimble keeps you on track by helping you in the moment."
        ]
      },
      {
        number: "30",
        number2: "min",
        desc: [
//           "Of the average workday can be freed up.",
//           <br />,
          "Nimble helps you reach your goals faster so you can take that long lunch ... or just go home."
        ]
      }
    ];

    return (
      <div id="register" className="home register">
        <Modal visible={this.state.modal} onClick={() => this.hideModal()} />
        <span className="tagline">Why Use Nimble?</span>
        <div className="registration">
          <div className="section section__stats">
            <Blurb
              blurb_title={stats_title}
              blurb_content={statHeaderContent}
            />
            <Stats info={stats} />
          </div>

          <div className="section__divider" />

          <div className="section section__register">
            <Blurb
              blurb_title={register_title}
              blurb_content={register_content}
            />
            <div className="registrar">
              <h4 className="registrar__title">Information</h4>
              <form onSubmit={this.handleSubmit} className="registrar__info">
                <div className="info__firstname">
                  <input
                    // required
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleChange}
                    value={this.state.firstName}
                  />
                </div>
                <div className="info__lastname">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name (Optional)"
                    onChange={this.handleChange}
                    value={this.state.lastName}
                  />
                </div>
                <div className="info__email">
                  <input
                    // required
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                </div>
                <Button onClick={(e) => this.handleSubmit(e)} text="Register" modifier="primary" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
