import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import { devToolsEnhancer,  composeWithDevTools } from 'redux-devtools-extension';
import redux_thunk from 'redux-thunk';

// import root reducer
import { rootReducer } from './reducers/reducers.index';

// import data
import session from '../data/data.mock.session.json'
import settings from '../data/data.mock.settings.json'

// import middlewares
import logger from './middleware/middleware.logging';
import api from './middleware/middleware.api';
import sessionMidware from './middleware/middleware.session';

// const socket = {};

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// create default state
const initialStateData = {
  session,
  settings,
}


// export const store = createStore(rootReducer, defaultState, devToolsEnhancer(), applyMiddleware(logger));
export const store = createStore(
  persistedReducer, 
  initialStateData, 
  composeWithDevTools(
    applyMiddleware(
      redux_thunk, 
      logger, 
      api, 
      sessionMidware,
    )
  )
);

export const persistor = persistStore(store);

export const history = createBrowserHistory();

// export const storedHistory = syncHistoryWithStore(history, store);
