import React from 'react';
import Chat from './Chat.jsx';

import {List, ListItem, Avatar, Subheader} from 'material-ui';
import ReactModal from 'react-modal';

class ChatList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(index) {
        this.props.handleClick(index);
    }

    render() {
        const chats = this.props.chats.map(chat => {
            return <Chat key={chat.pk} pk={chat.pk} handleClick={this.handleClick} title={chat.title}/>;
        });
        return (
            <List>
                <Subheader>Recent chats</Subheader>
                {chats}
            </List>
        );
    }
}
export default ChatList
