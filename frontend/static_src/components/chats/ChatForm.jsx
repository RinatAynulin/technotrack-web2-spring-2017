import React from 'react';
import {Avatar} from 'material-ui';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
import {sendMessage} from './../../actions/messages';

class ChatForm extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.state = {
            content: ''
        }
    }

    sendMessage(e) {
        e.preventDefault();
        const {dispatch, sendMessage} = this.props;
        const message = {
            content: this.state.content,
            author: `http://localhost:8000/api/users/${this.props.author}/`,
            chat: `http://localhost:8000/api/chats/${this.props.chat}/`,
        }
        this.props.sendMessage(message);
    }

    onChange(e) {
        this.setState({content: e.target.value});
    }
    render() {
        return < div > < form className = "display: inline" > <Avatar className="display: inline" src={"https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg"}/> < textarea value = {
            this.state.content
        }
        name = "content" onChange = {
            this.onChange
        } /> < button className = "display: block" onClick = {
            this.sendMessage
        } > add < /button>
    </form > </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        sendMessage
    }, dispatch),
    dispatch
});

const mapStateToProps = (state, props) => ({chat: state.chats.selectedChat, author: '1'});

export default connect(mapStateToProps, mapDispatchToProps)(ChatForm);
