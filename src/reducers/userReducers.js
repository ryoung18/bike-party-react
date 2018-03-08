import { GET_USER_INFO } from '../actions/userActions';

const DEFAULT_STATE = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  isAuthenticated: false,
  user: {}
};

export default function (state = DEFAULT_STATE, action) {
  switch(action.type) {
    case GET_USER_INFO:
      return {...state, ...action.data };
    default:
      return state;
  }
}
