import React from 'react';
import { Route } from 'react-router';

import App from './App.jsx';

import ChatPage from './components/chats/ChatPage.jsx';
import FriendList from './components/friends/FriendList.jsx';
import Profile from './components/profile/Profile.jsx';
import People from './components/people/People.jsx';
import Feed from './components/feed/Feed.jsx';

const routes = (
  <Route path="/" component={App}>
    <Route path="/feed" component={Feed} />
    <Route path="/chats" component={ChatPage} />
    <Route path="/friends" component={FriendList} />
    <Route path="/profile" component={Profile} />
    <Route path="/people" component={People} />

  </Route>
);

export default routes;
