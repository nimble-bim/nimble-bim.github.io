import { API } from '../constants/action-types';

const apiMiddleware = ({getState, dispatch }) => (next) => (action) => {
  
  if(action.type === API) {
    console.log(`API STUFF: ${ action.type }`);
    console.log(action);
  }

  next(action);
}

export default apiMiddleware;