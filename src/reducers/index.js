import { combineReducers } from 'redux';

import events from './eventReducers';
import users from './userReducers';

export default combineReducers({
  events,
  users
})
