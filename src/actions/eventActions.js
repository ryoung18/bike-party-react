// import axios from "axios";

export const GET_MEETUP_INFO = 'GET_MEETUP_INFO';

export function getMeetupInfo() {
  return dispatch => {
    return dispatch({
      type: GET_MEETUP_INFO,
      data
    })
  }
}

let data = {
  id: 1,
  date: 'March 12, 2018',
  time: '9:00 PM PST',
  start_location: '2191 Monterey Hwy San Jose, CA 95125',
  end_location: '2434 Almaden Rd San Jose, CA 95125',
  users: [{id: 1, username: 'Bob'}, {id: 2, username: 'Joe'}, {id: 3, username: 'Amy'}]
}
