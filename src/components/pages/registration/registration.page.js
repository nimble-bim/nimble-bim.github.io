import React from 'react';
import './registration.style.scss';
import Blurb from '../../subcomponents/blurb/blurb.object';
import Stats from '../../subcomponents/stats/stats.object';
import Registrar from '../../subcomponents/registrar/registrar.object';

export default class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    console.log('Issa registration page');
  }

  render() {
    const statHeaderContent = "We’ve streamlined this process to eliminate fees, unnecessary steps, and time-wasting appointments. Our efficiency not only makes it easier to buy a home, it translates into the best rates available.";
    const register_content = "Nimble is currently in limited beta \n\nRegister below to get access to the blah blah thing."
    const stats = [
      { 
        number: "0",
        desc: "Amount of knowledge of BIM necessary"
      },
      { 
        number: "20K",
        desc: "Amount of knowledge of BIM necessary"
      },
    ]

    return (
      <div className="page page_registration">

        <div className="section section_stats">
          <Blurb
            blurb_subtitle="Why Use Nimble"
            blurb_title='Build Better With Nimble.'
            blurb_content={statHeaderContent}
          />
          <Stats info={stats} />
        </div>

        <div className="section section_register">
          <Blurb
            blurb_title='Try It For Free'
            blurb_content={register_content}
          />
          <Registrar />
        </div>

      </div>
    )
  }
}