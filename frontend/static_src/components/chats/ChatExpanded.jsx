import React from 'react';
import ChatForm from './ChatForm.jsx';
import {Avatar} from 'material-ui';
import {connect} from 'react-redux';

import {receiveMessages, requestMessages} from './../../actions/messages';
import axios from 'axios';
class ChatExpanded extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(requestMessages());
        console.log(`/api/messages/?chat=${this.props.selectedChat}`);
        axios(`/api/messages/?chat=${this.props.selectedChat}`).then(response => dispatch(receiveMessages(response)));
    }

    findId = (element, index, array) => {
        return element.pk == this.props.selectedChat;
    }

    onCreate(post) {
        console.log('oncreate');
        /*
        post = {
            id: this.state.posts.length,
            content: post.content,
            user: this.user
        }
        this.setState({
            posts: [
                post, ...this.state.posts
            ]
        })
        */
    }
    render() {
        if (this.props.selectedChat == 0) {
            return null;
        }

        return (
            <div>
                <h1>{this.props.chats.find(this.findId).title}</h1>
                {this.props.messages.map(message => {
                    return <p>{message.content}</p>;
                })}
                <div>
                    <ChatForm onCreate={this.onCreate}/></div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({selectedChat: state.chats.selectedChat, chats: state.chats.chats, messages: state.messages.messages});

export default connect(mapStateToProps, null)(ChatExpanded);
