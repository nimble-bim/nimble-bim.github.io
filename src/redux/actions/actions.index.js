import * as sessionActions from './actions.session';
import * as settingsActions from './actions.settings';

const actions = {
  ...sessionActions,
  ...settingsActions
}

export default actions;