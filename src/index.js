import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom';
import { Routes } from './components/general/routes';
import { Provider } from 'react-redux';
import { store, storedHistory, persistor, history } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from './redux/actions/actions.index';
import './styles/app.index.scss';

function mapStateToProps(state) {
  return { ...state }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

class App extends React.Component {
  state = {}

  render(){
    const { app } = this.props.settings;
    // const theme = app.useDarkTheme ? 'dark' : 'bright';
    const theme = 'bright';

    return(
      <div className={`app ${theme}`}>
        <Router history={ history }>
          <Routes {...this.props} />
        </Router>
      </div>
    );
  }
}

const Main = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>,
document.getElementById('root'));