import React from 'react';
import './about.desktop.scss';
import './about.mobile.scss';

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("Issa About page!");
  }

  render() {
    return (
      <div className="page page__about about">

        <div className="about__mission">mission</div>
        <div className="about__content">content</div>
        <div className="about__news">news</div>
        <div className="about__timeline">timeline</div>

      </div>
    )
  }
}