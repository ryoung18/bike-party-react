// import axios from "axios";
import { BASE_URL } from "../utils/helpers"; // server address localhost:3001
import axios from "axios";
export const GET_MEETUP_INFO = "GET_MEETUP_INFO";

function handleMeetupInfo(data) {
  return {
    type: GET_MEETUP_INFO,
    data
  };
}

export function getMeetupInfo() {
  return dispatch => {
    return axios(`${BASE_URL}/api`)
      .then(res => dispatch(handleMeetupInfo(res.data)))
      .catch(err => console.log("error", err));
  };
}

let data = {
  id: 1,
  date: "March 12, 2018",
  time: "9:00 PM PST",
  start_location: "2191 Monterey Hwy San Jose, CA 95125",
  end_location: "2434 Almaden Rd San Jose, CA 95125",
  users: [
    { id: 1, username: "Bob" },
    { id: 2, username: "Joe" },
    { id: 3, username: "Amy" }
  ]
};
