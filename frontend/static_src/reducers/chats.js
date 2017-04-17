import {
  CHANGE_SELECTED_CHAT,
  RECEIVE_CHATS,
  REQUEST_CHATS
} from './../actions/chats.js';

import Immutable from 'immutable';

const initialStore = {
  selectedChat: 0,
  isFetching: false,
  chats: [],
}

export function chats(state = initialStore, action) {
  switch (action.type) {
  case CHANGE_SELECTED_CHAT:
    return Immutable.fromJS(state).set('selectedChat', action.selectedChat).toJS();

  case REQUEST_CHATS:
    return Immutable.fromJS(state).set('isFetching', true).toJS();

  case RECEIVE_CHATS:
    console.log(state);
    return Immutable.fromJS(state).set('isFetching', false).set('chats', action.chats).toJS();

  default:
    return state;
  }
}
