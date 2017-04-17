import {
  RECEIVE_POSTS,
  REQUEST_POSTS,
  ADD_POST
} from './../actions/posts.js';

import Immutable from 'immutable';

const initialStore = {
  isFetching: false,
  posts: [],
}

export function posts(state = initialStore, action) {
  switch (action.type) {
  case REQUEST_POSTS:
    return Immutable.fromJS(state).set('isFetching', true).toJS();

  case RECEIVE_POSTS:
    console.log(state);
    return Immutable.fromJS(state).set('isFetching', false).set('posts', action.posts).toJS();

  case ADD_POST:
    return Immutable.fromJS(state).set('posts', [...state.posts, action.post]).toJS();
  default:
    return state;
  }
}
