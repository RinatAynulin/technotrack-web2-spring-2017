import {
  RECEIVE_MESSAGES,
  REQUEST_MESSAGES,
  ADD_MESSAGE,
} from './../actions/messages.js';

import Immutable from 'immutable';

const initialStore = {
  isFetching: false,
  messages: [],
}

export function messages(state = initialStore, action) {
  switch (action.type) {
  case REQUEST_MESSAGES:
    return Immutable.fromJS(state).set('isFetching', true).toJS();

  case RECEIVE_MESSAGES:
    console.log(state);
    return Immutable.fromJS(state).set('isFetching', false).set('messages', action.messages).toJS();

  case ADD_MESSAGE:
    return Immutable.fromJS(state).set('messages', [...state.messages, action.message]).toJS();

  default:
    return state;
  }
}
