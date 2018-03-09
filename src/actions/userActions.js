import axios from "axios";
import { BASE_URL } from '../utils/helpers';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.header.common['Authorization'] = `Bear ${token}`;
  } else {
    delete axios.defaults.header.common['Authorization'];
  }
}

export function signup(userData) {
  return dispatch => {
    return axios.post(`${BASE_URL}/api/users`, userData);
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return axios.post(`${BASE_URL}/api/users/auth`, data)
      .then(res => {
        const token = res.data;
        dispatch( setCurrentUser(token) );
        // localStorage.setItem('jwtToken', token);
        // setAuthorizationToken(token);
        // dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

let data = {
  username: 'bikeOrama',
  firstName: 'Bob',
  lastName: 'Poop',
  email: 'bob.poop@stinky.com'
}
