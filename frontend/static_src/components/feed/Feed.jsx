import React from 'react';
import axios from 'axios';
import FeedElement from './FeedElement.jsx';
import {List, Subheader} from 'material-ui';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8000/api/userevents").then(res => {

            const eventsCame = JSON.parse(res.request.response);
            this.setState({events: eventsCame});
        });
    }

    render() {
        const eventsToRender = this.state.events.map((e) => <FeedElement event={e}/>);
        console.log(this.state.events);
        return (
            <div>
                <List>
                    <Subheader>Feed</Subheader>
                    {eventsToRender}
                </List>
            </div>
        )
    }
}

export default Feed;
