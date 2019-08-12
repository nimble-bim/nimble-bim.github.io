import { 
  UPDATE_TOTAL, 
  UPDATE_COUNT,
  STORE_CONNECTION_PARAMETERS,
  STORE_SOCKET_ID,
  STORE_COMPLETE_ID,
} from '../constants/action-types';

export default function session(state = {}, action) {
  
  switch(action.type) {
    
    case STORE_CONNECTION_PARAMETERS:
      console.log(action);

      const { 
        documentId,
        hubUrl,
        isDebug,
        isRevit,
        revitSocketId
      } = action.payload.data;

      const newConnection = {
        documentId,
        hubUrl,
        isDebug,
        isRevit,
        revitSocketId
      };

      let modified = {
        ...state,
        connection: newConnection
      }

      return modified;

    case STORE_SOCKET_ID:
      const { uiSocketId } = action.payload.data;
      const modded = { ...state };
      modded.connection.uiSocketId = uiSocketId;

      return modded;

    case STORE_COMPLETE_ID:
      console.log('STORING COMPLETE ID IN SESSION');
      let complete = { ...state };
      complete.connection.uiSocketId = action.payload.data.uiSocketId;
      complete.connection.revitSocketId = action.payload.data.revitSocketId;
      complete.connection.documentId = action.payload.data.documentId;

      return complete;

    case UPDATE_COUNT:
      console.log('THE SCANNED COUNT WILL CHANGE');
      console.log(action);
      const count = action.newCount;
      let newState = {...state};
      newState.project.objs.scanned = count;
      return newState;

    case UPDATE_TOTAL:
      console.log('THE SCANNED TOTAL WILL CHANGE');
      console.log(action);
      const newTotal = action.total;
      let withNewTotal = {...state};
      withNewTotal.project.objs.total = newTotal;
      return withNewTotal;

    // set session state
    default:
      return state;
  }
}