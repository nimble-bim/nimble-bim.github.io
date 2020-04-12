import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducers
// import users from './reducers.users';
import settings from './reducers.settings';
import session from './reducers.session';

export const rootReducer = combineReducers({
  // users, 
  settings, 
  session, 
  routing: routerReducer
});