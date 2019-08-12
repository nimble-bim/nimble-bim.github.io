/* 
  This handles any data received before it hits
  a reducer. Can restructure and modify at will
*/

const loggingMiddleware = ({getState, dispatch }) => (next) => (action) => {
  console.log(`Action: ${ action.type }`);

  const payload = action.payload;
  switch(action.type) {
    case 'persist/PERSIST':
      break;
    case 'persist/REHYDRATE':
      break;
    default:
      break;
  }

  next(action);
}

export default loggingMiddleware;