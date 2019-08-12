import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../subcomponents/navbar/navbar.object';
// import Users from '../users/users';
// import { NotRevitHome } from '../login/notrevithome';
// import Settings from '../settings/settings';
import Notfound from '../pages/notfound/notfound.page';
import Home from '../pages/home/home.page';
// import RevitHome from '../revitstart/revithome';
// import Dashboard from '../dashboard/dashboard.page';
// import BackupPage from '../backup/backup.page';
// import AlertsPage from '../alerts/alerts.page';
// import ClashesPage from '../clashes/clashes.page';

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
              <Route component={Notfound} />
            </Switch>
          </div>
      </Fragment>
    );
  }
}