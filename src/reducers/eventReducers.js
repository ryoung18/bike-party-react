import { GET_MEETUP_INFO } from '../actions/eventActions';

const DEFAULT_STATE = {
    id: 0,
    date: '',
    time: '',
    start_location: '',
    end_location: '',
    users: []
}

export default function eventReducers(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case GET_MEETUP_INFO:
      return {...state, ...action.data};
    default:
      return state;
  }
}
