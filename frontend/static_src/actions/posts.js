export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const ADD_POST = 'ADD_POST';
import axios from 'axios';

import {
  csrftoken
} from './../utils';

export function requestPosts() {
  return {
    type: REQUEST_POSTS,
  };
}

export function receivePosts(json) {
  console.log(json);
  return {
    type: RECEIVE_POSTS,
    posts: json.data,
  }
}

export function addPost(post) {
    console.log(post);
  return {
    type: ADD_POST,
    post: post
  }
}


export function sendPost(post) {
  return (dispatch) => {

    axios.post('/api/posts/', {
        content: post.content,
        author: post.author
      }, {
        headers: {
          'X-CSRFToken': csrftoken
        }
      })
      .then(response =>
        dispatch(addPost(post))
      )
      .catch(error =>
        console.log(error)
      );
  }
}
