import React from 'react';
import ReactDOM from 'react-dom';

import {Grid, Col} from 'react-bootstrap';
import {Paper, MuiThemeProvider} from 'material-ui';
import Sidebar from './components/sidebar/Sidebar.jsx';
import ChatPage from './components/chats/ChatPage.jsx';
import FriendList from './components/friends/FriendList.jsx';
import Header from './components/header/Header.jsx';
import Profile from './components/profile/Profile.jsx';
import People from './components/people/People.jsx';
import Feed from './components/feed/Feed.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const user = {
    id: '1',
    name: 'Rinat Aynulin',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg',
    information: 'I LOVE CHICKEN'
}

const people = [
    {
        id: '1',
        name: 'Rinat Aynulin',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg'
    }, {
        id: '2',
        name: 'Vas Vasov',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg'
    }, {
        id: '3',
        name: 'Dan Dan',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg'
    }, {
        id: '4',
        name: 'Willy Willy',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg'
    }, {
        id: '5',
        name: 'Anna Nana',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg'
    }
]

const chats = [
    {
        id: 0,
        avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg",
        name: "fhjsdfjgksfg",
        messages: ['hey', 'dasdy']
    }, {
        id: 1,
        avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg",
        name: "adsad",
        messages: ['hey', 'hey']
    }, {
        id: 2,
        avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg",
        name: "asdsadasdsadsadasdas",
        messages: ['hey', 'hey']
    }, {
        id: 3,
        avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg",
        name: "fhjsdfzxczxjgksfg",
        messages: ['hey', 'hey']
    }, {
        id: 4,
        avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg",
        name: "fhjsdfjvczvcvgksfg",
        messages: ['hey', 'hey']
    }, {
        id: 5,
        avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg",
        name: "dasd",
        messages: ['hey', 'hey']
    }, {
        id: 6,
        avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg",
        name: "fhjsdfczvcjgksfg",
        messages: ['hey', 'hey']
    }, {
        id: 7,
        avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg",
        name: "fhjsdxcvbgsfgsdffjgksfg",
        messages: ['hey', 'hey']
    }
];

const friends = [
    {
        id: 0,
        name: 'adksdjaskd',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg'
    }, {
        id: 1,
        name: 'adksdjaskd',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg'
    }, {
        id: 2,
        name: 'adksdjaskd',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg'
    }, {
        id: 3,
        name: 'adksdjaskd',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg'
    }
];

const friendsRequests = [
    {
        id: 0,
        name: 'adksdjaskd',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg'
    }, {
        id: 4,
        name: 'adksdjaskd',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg'
    }, {
        id: 5,
        name: 'adksdjaskd',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg'
    }, {
        id: 6,
        name: 'adksdjaskd',
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/265px-Giraffe_standing.jpg'
    }
];

const items = {
    'Profile': <Profile user={user}/>,
    'Chats': <ChatPage chats={chats}/>,
    'Feed': <Feed/>,
    'Friends': <FriendList friends={friends} friendsRequests={friendsRequests}/>,
    'People': <People people={people}/>
}

class App extends React.Component {
    render() {
        console.log('test');
        return (
                <MuiThemeProvider>
                    <Grid>
                        <Header user={user}/>
                        <Col xs={4} md={2}>

                            <Sidebar/>

                        </Col>

                        <Col xs={12} md={8}>

                            {this.props.children}

                        </Col>
                    </Grid>
                </MuiThemeProvider>

        );
    }
}

export default App;
