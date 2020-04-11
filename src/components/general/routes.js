import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../subcomponents/navbar/navbar.object';
import Notfound from '../pages/notfound/notfound.page';
import About from '../pages/about/about.page';
import Home from '../pages/home/home.page';
// import HowItWorks from '../pages/howitworks/howitworks.page';
import Register from '../pages/registration/registration.page';

export class Routes extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <Navbar  {...this.props} />
          <div className="app-content">
            <Switch>
              <Route exact path='/' render={(props) => (<Home {...this.props} {...props}/>)} />
              <Route exact path='/about' render={(props) => (<About {...this.props} {...props}/>)} />
              {/* <Route exact path='/features' render={(props) => (<HowItWorks {...this.props} {...props}/>)} /> */}
              <Route exact path='/try' render={(props) => (<Register {...this.props} {...props}/>)} />
              <Route component={Notfound} />
            </Switch>
          </div>
      </Fragment>
    );
  }
}