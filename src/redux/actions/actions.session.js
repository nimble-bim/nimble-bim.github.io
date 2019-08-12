import { 
  CONNECT_FROM_UI_TO_REVIT,
  PROCESS_CONNECTION_PARAMETERS,
  STORE_CONNECTION_PARAMETERS,
  SET_SESSION_STATE
 } from '../constants/action-types';

export function connect_ui_from_revit(data) {
  return {
    type: CONNECT_FROM_UI_TO_REVIT,
    payload:{
      data
    }
  }
}

export function process_connection_parameters(parameters) {
  console.log(parameters);
  return {
    type: PROCESS_CONNECTION_PARAMETERS,
    payload: {
      data: parameters
    }
  }
}


export function store_connection_parameters(parameters) {
  console.log(parameters);
  return {
    type: STORE_CONNECTION_PARAMETERS,
    payload: {
      data: parameters
    }
  }
}

export function set_session_state(data) {
  return {
    type: SET_SESSION_STATE,
    payload: {
      data
    }
  }
}