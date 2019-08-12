import { 
  STORE_CONNECTION_PARAMETERS,
  PROCESS_CONNECTION_PARAMETERS,
  CONNECT_FROM_UI_TO_REVIT
} from '../constants/action-types';

import { store_connection_parameters } from '../actions/actions.session';

import SessionHandler from '../handlers/handlers.session';
// import SocketHandler from '../handlers/handlers.socket';

const sessionMiddleware = ({dispatch, getState}) => next => {
  return action => {
    switch(action.type) {

      case PROCESS_CONNECTION_PARAMETERS:
        if(!action.payload.data)
          return;
        const newData = processConnectionParameters(action.payload.data);
        dispatch(store_connection_parameters(newData));
        break;

      case CONNECT_FROM_UI_TO_REVIT:
        const data = action.payload.data;
        connectUIandRevit(data, getState);
        break;

      default:
        break;
    }

    next(action);
  }
}

function processConnectionParameters(data) {
  // may not be necessary here since the reducer will store in state
  // should use this point for modification if necessary?
  console.log(data);
  
  const params = SessionHandler.processQueryParameters(data);

  return params;
}

function connectUIandRevit(data, getState) {
  console.log('CONNECTING TO REVIT...')
  const state = getState();

  const id = {
    documentId: state.session.connection.documentId || '',
    revitSocketId: state.session.connection.revitSocketId || '',
    uiSocketId: state.session.connection.uiSocketId || '',
  }
  
  console.log(id);
  // SocketHandler.connectUIToRevit(id);
}

export default sessionMiddleware;