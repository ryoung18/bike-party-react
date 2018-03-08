
// import axios from "axios";

// export const USER_LOGIN = 'USER_LOGIN';
// export const USER_SIGNUP = 'USER_SIGNUP';
// export const USER_LOGIN = 'USER_LOGIN';
export const GET_USER_INFO = 'GET_USER_INFO';

function handleUserInfo(data) {
  return {
    type: GET_USER_INFO,
    data
  }
}

function handleUserLogin() {

}

function handleUserSignup() {

}


export function getUserInfo() {
  return dispatch => {
    return  dispatch(handleUserInfo(data))
  }
}


export function postUserLogin() {
  return dispatch => {

  }
}

export function postUserSignup() {
  return dispatch => {

  }
}

let data = {
  username: 'bikeOrama',
  firstName: 'Bob',
  lastName: 'Poop',
  email: 'bob.poop@stinky.com'
}
