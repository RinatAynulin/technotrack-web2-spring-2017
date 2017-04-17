export const REQUEST_CHATS = 'REQUEST_CHATS';
export const CHANGE_SELECTED_CHAT = 'CHANGE_SELECTED_CHAT';
export const RECEIVE_CHATS = 'RECEIVE_CHATS';
import axios from 'axios';

import {
  requestMessages,
  receiveMessages
} from './messages';

export function requestChats() {
  return {
    type: REQUEST_CHATS,
  };
}

export function receiveChats(json) {
  console.log(json);
  return {
    type: RECEIVE_CHATS,
    chats: json.data,
  }
}

export function changeSelectedChat(selectedChat) {
  return {
    type: CHANGE_SELECTED_CHAT,
    selectedChat
  };
}

export function changeSelectedChatAndUpdateMessage(selectedChat) {
  return (dispatch, getState) => {
    dispatch(changeSelectedChat(selectedChat));
    dispatch(requestMessages());
    console.log(`/api/messages/?chat=${selectedChat}`);
    axios(`/api/messages/?chat=${selectedChat}`).then(response => dispatch(receiveMessages(response)));
  }
}
