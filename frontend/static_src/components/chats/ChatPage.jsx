import React from 'react'
import ChatList from './ChatList.jsx';
import Chat from './Chat.jsx';
import ChatExpanded from './ChatExpanded.jsx';
import {Grid, Col} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeSelectedChatAndUpdateMessage, requestChats, receiveChats} from './../../actions/chats';
import {receiveMessages, requestMessages} from './../../actions/messages';

import fetch from 'isomorphic-fetch';
import axios from 'axios';

class ChatPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(requestChats());
        axios(`/api/chats/`).then(response => {
            dispatch(receiveChats(response));
        });

    }

    handleClick(index) {
        console.log(index);
        console.log(this.props.changeSelectedChat);
        this.props.changeSelectedChatAndUpdateMessage(index);
    }

    render() {
        return (
            <div>
                <Grid>
                    <Col xs={4} md={4}>
                        <ChatList chats={this.props.chats} handleClick={this.handleClick}/>
                    </Col>

                    <Col xs={12} md={6}>
                        <div>
                            <ChatExpanded/>
                        </div>
                    </Col>

                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({selectedChat: state.chats.selectedChat, chats: state.chats.chats});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        changeSelectedChatAndUpdateMessage
    }, dispatch),
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
