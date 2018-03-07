// import axios from "axios";
import { API_URL } from "../utils/helpers"; // server address localhost:3001
export const GET_MEETUP_INFO = 'GET_MEETUP_INFO';

function handleMeetupInfo(data) {
  return {
    type: GET_MEETUP_INFO,
    data
  }
}


export function getMeetupInfo() {
  return dispatch => {
    return dispatch({
      type: GET_MEETUP_INFO,
      data
    })

    //cant tell if this works
    // return fetch(`${API_URL}/api/event/`)
    //   .then(res => res.json())
    //   .then(data => dispatch(handleMeetupInfo(data)))
    //   .catch(err => console.log('issue', err))
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
