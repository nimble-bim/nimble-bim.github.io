// reducer takes in an ACTION and STATE (copy of current state)

export default function users(state = [], action) {
  switch(action.type) {
    case "USER":
      console.log('THE TOTAL WILL CHANGE');
      console.log(state, action);
      break;
    default:
      break;
  }

  return state;
}