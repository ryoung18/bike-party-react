import { combineReducers } from 'redux';

import eventReducers from './eventReducers';
import usersReduers from './userReducers';

export default combineReducers({
  eventReducers,
  usersReduers
})
