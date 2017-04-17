import {
  createStore,
  combineReducers, compose, applyMiddleware
} from 'redux';
import {
  routerReducer
} from 'react-router-redux';

import {chats} from './reducers/chats.js';
import {messages} from './reducers/messages.js';
import {people} from './reducers/people.js';
import {posts} from './reducers/posts';
import {modal} from './reducers/modal';
import thunk from 'redux-thunk';
const initializeStore = () => {
  return createStore(
      combineReducers({
        routing: routerReducer,
        chats,
        messages,
        people,
        posts,
        modal
    }),

    /* preloadedState, */
    compose(applyMiddleware(thunk), window.devToolsExtension())
  );
}

export default initializeStore;
