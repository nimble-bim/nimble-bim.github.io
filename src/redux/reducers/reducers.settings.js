import { TOGGLE_APP_THEME } from '../constants/action-types';
// reducer takes in an ACTION and STATE (copy of current state)

export default function settings(state = {}, action) {
  
  switch(action.type) {
    case TOGGLE_APP_THEME:
      let status = state.settings.useDarkTheme;
      
      let newObj = {...state};
      newObj.settings.useDarkTheme = !status;

      return newObj;
    default:
      return state;
  }
}