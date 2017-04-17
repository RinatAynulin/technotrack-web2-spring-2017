import React from 'react';
import {ListItem, Avatar} from 'material-ui';

import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.handleClick(this.props.pk);
    }

    render() {
        if (typeof this.props.title == "undefined") {
            return null;
        }
        return (
            <ListItem primaryText={this.props.title} leftAvatar={< Avatar src = {
                "https://facebook.github.io/react/img/logo.svg"
            } />} rightIcon={< CommunicationChatBubble />} onClick={this.handleClick}/>
        );
    }
}

export default Chat;
