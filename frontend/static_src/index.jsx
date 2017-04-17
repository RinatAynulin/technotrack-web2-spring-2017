import React from 'react';
import ReactDOM from 'react-dom';

import initializeStore from './store.js';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router'
import App from './App.jsx';
import routes from './routes.js';
import {changeSelectedChat, CHANGE_SELECTED_CHAT} from './actions/chats.js';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
// Render the main component into the dom

const store = initializeStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('root'));
