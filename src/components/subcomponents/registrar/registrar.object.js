import React from "react";
import { FormButton } from "../buttons/buttons.object";
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
      items: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
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
  }

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

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  render() {
    const statHeaderContent =
      "We’ve streamlined this process to eliminate fees, unnecessary steps, and time-wasting appointments. Our efficiency not only makes it easier to buy a home, it translates into the best rates available.";

    const stats_title = "Wouldn’t It Be Nice To Go Home On Time For Once?";
    const register_title = "Try It For Free";

    const register_content =
      "Nimble is currently in limited beta. Register below to get access to the blah blah thing.";
    const stats = [
      {
        number: "0",
        desc: "Amount of knowledge of BIM necessary"
      },
      {
        number: "20K",
        desc: "Amount of knowledge of BIM necessary"
      }
    ];

    return (
      <div id="register" className="home">
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
                    required
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleChange}
                    value={this.state.firstName}
                  />
                </div>
                <div className="info__lastname">
                  <input
                    required
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                    value={this.state.lastName}
                  />
                </div>
                <div className="info__email">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                </div>
                <FormButton text="Register" modifier="primary" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
