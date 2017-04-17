export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const REQUEST_MESSAGES = 'REQUEST_MESSAGES';
export const SEND_MESSAGES = 'SEND_MESSAGES';
export const ADD_MESSAGE = 'ADD_MESSAGE';
import axios from 'axios';

import {
  csrftoken
} from './../utils';

export function requestMessages(chat) {
  return {
    type: REQUEST_MESSAGES,
    chat
  };
}

export function receiveMessages(json) {
  console.log(json);
  return {
    type: RECEIVE_MESSAGES,
    messages: json.data.results,
  }
}

export function addMessage(message) {
    console.log(message);
  return {
    type: ADD_MESSAGE,
    message: message
  }
}


export function sendMessage(message) {
  return (dispatch) => {

    axios.post('/api/messages/', {
        content: message.content,
        author: message.author,
        chat: message.chat,
      }, {
        headers: {
          'X-CSRFToken': csrftoken
        }
      })
      .then(response =>
        dispatch(addMessage(message))
      )
      .catch(error =>
        console.log(error)
      );
  }
}
